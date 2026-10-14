(function(){
'use strict';
const recipes=window.MIDNIGHT_RECIPES||[];
const sources=window.MIDNIGHT_SOURCES||[];
function cutieText(value){return String(value??'').replace(/&/g,' and ').replace(/[“”]/g,'"').replace(/[‘’]/g,"'").replace(/[–—]/g,'-').replace(/…/g,'...').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^\x00-\x7F]/g,'').replace(/\s+/g,' ').trim()}
const courses=window.MIDNIGHT_COURSES||[];
const cuisineGroups=window.MIDNIGHT_CUISINES||{};
const usualsCategories=window.MIDNIGHT_USUALS_CATEGORIES||[];
const depth=Number(document.body.dataset.depth||0), root=depth?'../':'./';
let imageManifest={};
function imageData(r){const slug=String(r?.slug||'').toLowerCase();const auto=imageManifest[slug]||{};const base=slug?`images/recipes/${slug}/`:'';return {heroImage:auto.hero||r.heroImage||(base?base+'hero.jpg':''),recipeImage:auto.recipe||r.recipeImage||(base?base+'recipe.jpg':''),steps:auto.steps||{}}}
function resolvedStepImages(s,r,index){const stepNo=String(s?.number||index+1).replace(/\D/g,'')||String(index+1);const auto=imageData(r).steps?.[stepNo.padStart(2,'0')];if(Array.isArray(auto)&&auto.length)return auto.filter(Boolean);return Array.isArray(s?.stepImages)?s.stepImages.filter(Boolean):(Array.isArray(s?.stepPhotos)?s.stepPhotos.filter(Boolean):[])}
const page=document.body.dataset.page, app=document.getElementById('app');
const SITE_NAME='MIDNIGHT RECIPES';
const SITE_URL='https://midnightrecipes.com';
const DEFAULT_SHARE_IMAGE=SITE_URL+'/images/og-default.jpg';
const defaultDesc=document.querySelector('meta[name="description"]')?.content||'';
const reviewsEnabled=!!window.MIDNIGHT_SITE?.reviewsEnabled;
const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
const getFavs=()=>{try{const a=JSON.parse(store.get('mr-favorites')||'[]');return Array.isArray(a)?a:[]}catch(e){return []}};
const setFavs=a=>store.set('mr-favorites',JSON.stringify(a));
function setMeta(title,desc){const full=title?`${title} | ${SITE_NAME}`:SITE_NAME;const d=desc||defaultDesc;document.title=full;document.querySelector('meta[name="description"]')?.setAttribute('content',d);document.querySelector('meta[property="og:title"]')?.setAttribute('content',full);document.querySelector('meta[property="og:description"]')?.setAttribute('content',d)}
function setCanonical(url){let link=document.querySelector('link[rel="canonical"]');if(!link){link=document.createElement('link');link.rel='canonical';document.head.appendChild(link)}link.href=url;let og=document.querySelector('meta[property="og:url"]');if(!og){og=document.createElement('meta');og.setAttribute('property','og:url');document.head.appendChild(og)}og.setAttribute('content',url)}
const CANONICAL_PARAMS={'pages/source.html':['value'],'pages/cuisine.html':['value'],'pages/meal.html':['value'],'pages/usuals.html':['category'],'recipes/recipe.html':['slug']};
function setCanonicalFromLocation(){const m=location.pathname.match(/((?:pages|recipes)\/[^/]*)$/);const path=m?m[1]:'';const q=new URLSearchParams();(CANONICAL_PARAMS[path]||[]).forEach(k=>{const v=new URLSearchParams(location.search).get(k);if(v)q.set(k,v)});const qs=q.toString();setCanonical(SITE_URL+'/'+path+(qs?'?'+qs:''))}
function setShareImage(url,portrait=false){const put=(attr,key,val)=>{let m=document.querySelector(`meta[${attr}="${key}"]`);if(!m){m=document.createElement('meta');m.setAttribute(attr,key);document.head.appendChild(m)}m.setAttribute('content',val)};put('property','og:image',url);put('name','twitter:image',url);put('name','twitter:card',portrait?'summary':'summary_large_image')}
function setNoindex(){if(document.querySelector('meta[name="robots"]'))return;const m=document.createElement('meta');m.name='robots';m.content='noindex';document.head.appendChild(m)}
const slugify=s=>String(s??'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');
const hasMeaningfulValue=v=>{if(v===null||v===undefined)return false;const t=String(v).trim().toLowerCase();return t!==''&&t!=='n/a'&&t!=='na';};
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const href=(path,q)=>root+path+(q?('?'+new URLSearchParams(q).toString()):'');
const star=()=>'<svg class="mrstar" aria-hidden="true"><use href="#mrstar"></use></svg>';
const canonicalCourse=r=>r.course||'';
const courseValues=r=>Array.isArray(r.categories)?r.categories.filter(Boolean):[canonicalCourse(r)].filter(Boolean);
const courseFilterValue=value=>courses.find(c=>String(c).toLowerCase()===String(value).toLowerCase()||String(c).toLowerCase().replace(/s$/,'')===String(value).toLowerCase().replace(/s$/,''))||value;
const cuisineValues=r=>[r.cuisine,r.cuisineSecondary,...(Array.isArray(r.cuisines)?r.cuisines:[]),...splitFooterValues(r.footerCuisine)].filter(Boolean);
const courseDisplay=r=>r.courseDisplay||courseValues(r).join(', ');
const searchText=r=>[
  r.title,r.slug,r.source,r.sourceSecondary,r.original,r.dish,r.cuisine,r.cuisineSecondary,...(Array.isArray(r.cuisines)?r.cuisines:[]),
  canonicalCourse(r),r.footerInspiredBy,r.footerCuisine,r.footerCourse,
  ...(r.categories||[]),...(r.tags||[]),r.description,
  ...(r.ingredients||[]).map(x=>x.item||''),
  ...(r.ingredientCategories||[]),r.usualsCategory
].filter(hasMeaningfulValue).join(' ').toLowerCase();
const searchMatches=(r,query)=>{
  const text=searchText(r);
  const tokens=String(query||'').trim().toLowerCase().split(/\s+/).filter(Boolean);
  if(!tokens.length)return false;
  return tokens.every(token=>{
    const escaped=token.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
    return new RegExp(`(?:^|[^a-z0-9])${escaped}(?=$|[^a-z0-9])`,'i').test(text);
  });
};
function imageErrorHandler(fallbackClass='',optional=false){return `let i=Number(this.dataset.extI||0);const E=['.jpeg','.JPG','.JPEG'];if(i<E.length){this.dataset.extI=String(i+1);this.src=this.src.replace(/\\.(?:jpe?g)$/i,E[i]);}else{const f=this.closest('.photo-frame');if(f){${optional?`f.remove();`:`f.outerHTML='<div class=\\'ph ${fallbackClass}\\'></div>';`}}}`}
function card(r,usualsContext=false){const src=imageData(r).heroImage;const media=src?`<div class="photo-frame"><img class="photo" loading="lazy" decoding="async" src="${esc(root+src)}" alt="${esc(r.title)}" onerror="${imageErrorHandler('')}"/></div>`:'<div class="ph"></div>';return `<article class="category-card card"><a href="${href('recipes/recipe.html',{slug:r.slug})}">${media}<h3 class="name">${esc(r.title)}</h3></a></article>`}
function cards(list,usualsContext=false){return list.length?`<div class="category-grid">${list.map(r=>card(r,usualsContext)).join('')}</div>`:'<p class="empty-state">No recipes here yet</p>'}
function sortedAll(){return recipes.map((r,index)=>({r,index})).sort((a,b)=>String(b.r.dateAdded||'').localeCompare(String(a.r.dateAdded||''))||b.index-a.index).map(x=>x.r)}
function sorted(){return sortedAll().filter(r=>!r.isUsuals)}
function reviewStats(r){try{const arr=JSON.parse(localStorage.getItem('mr-reviews-'+r.slug)||'[]');const ratings=Array.isArray(arr)?arr.map(x=>Number(x?.rating)).filter(x=>Number.isFinite(x)&&x>=1&&x<=5):[];if(!ratings.length)return {avg:0,count:0};return {avg:ratings.reduce((a,b)=>a+b,0)/ratings.length,count:ratings.length}}catch(e){return {avg:0,count:0}}}
function sortRecipes(list,sort='latest'){
  const base=list.map((r,index)=>({r,index}));
  if(sort==='az')return base.sort((a,b)=>a.r.title.localeCompare(b.r.title,undefined,{sensitivity:'base'})||a.index-b.index).map(x=>x.r);
  if(sort==='za')return base.sort((a,b)=>b.r.title.localeCompare(a.r.title,undefined,{sensitivity:'base'})||a.index-b.index).map(x=>x.r);
  if(sort==='popular')return base.map(x=>{const s=reviewStats(x.r);return {...x,avg:s.avg,count:s.count}}).sort((a,b)=>b.avg-a.avg||b.count-a.count||String(b.r.dateAdded||'').localeCompare(String(a.r.dateAdded||''))||b.index-a.index).map(x=>x.r);
  if(sort==='oldest')return base.sort((a,b)=>String(a.r.dateAdded||'').localeCompare(String(b.r.dateAdded||''))||a.index-b.index).map(x=>x.r);
  return base.sort((a,b)=>String(b.r.dateAdded||'').localeCompare(String(a.r.dateAdded||''))||b.index-a.index).map(x=>x.r);
}
function filterRecipes(type,value){const v=String(value||'').trim().toLowerCase();if(type==='usuals'){return recipes.filter(r=>r.isUsuals&&(!v||String(r.usualsCategory||'').toLowerCase()===v))}const pool=type==='search'?recipes:recipes.filter(r=>!r.isUsuals);if(!v)return pool;return pool.filter(r=>{if(type==='source')return [r.source,r.sourceSecondary,...(Array.isArray(r.sources)?r.sources:[])].filter(Boolean).some(x=>String(x).toLowerCase()===v);if(type==='course'){const target=String(courseFilterValue(value)).toLowerCase();return courseValues(r).some(x=>String(x).toLowerCase()===target)||splitFooterValues(r.footerCourse).some(x=>String(courseFilterValue(x)).toLowerCase()===target)}if(type==='cuisine')return cuisineValues(r).some(x=>String(x).toLowerCase()===v);return searchMatches(r,v)})}
function listSortValue(){const value=new URLSearchParams(location.search).get('sort')||'latest';return ['popular','latest','oldest','az','za'].includes(value)?value:'latest'}
function bindListSort(){const select=document.querySelector('[data-sort]');if(!select)return;select.addEventListener('change',()=>{const p=new URLSearchParams(location.search);p.set('sort',select.value);location.href=location.pathname+'?'+p.toString()})}
function sortControl(sort){return `<div class="sort-control" style="display:flex;align-items:center;justify-content:flex-end;gap:8px;margin:0 0 18px;font-size:15px"><label for="recipeSort">Sort:</label><select id="recipeSort" data-sort aria-label="Sort recipes" style="font:inherit;background:transparent;border:1px solid var(--line);padding:6px 9px"><option value="popular"${sort==='popular'?' selected':''}>Popular</option><option value="latest"${sort==='latest'?' selected':''}>Latest</option><option value="oldest"${sort==='oldest'?' selected':''}>Oldest</option><option value="az"${sort==='az'?' selected':''}>A–Z</option><option value="za"${sort==='za'?' selected':''}>Z–A</option></select></div>`}
function top(){const latest=sorted().slice(0,4);app.innerHTML=`<div class="wrap"><h1 class="visually-hidden">MIDNIGHT RECIPES</h1><div class="home-tagline"><p>Food we find. Recipes we recreate.</p><p>Stories from our midnight kitchen.</p></div><section class="section"><h2 class="h2">${star()}Midnight Dispatches</h2>${cards(latest)}<p class="viewall"><a href="${href('recipes/index.html')}">View all</a></p></section><section class="section"><h2 class="h2">${star()}Where did the idea come from?</h2><p class="filter-subtitle">Browse recipes by what inspired them.</p><div class="sources">${sources.map(s=>{const r=sorted().find(x=>x.source===s||x.sourceSecondary===s||(Array.isArray(x.sources)&&x.sources.includes(s)));return `<div class="tile"><a href="${href('pages/source.html',{value:s})}">${r&&imageData(r).heroImage?`<div class="photo-frame"><img class="photo" loading="lazy" decoding="async" src="${esc(root+imageData(r).heroImage)}" alt="${esc(r.title)}" onerror="${imageErrorHandler('sm')}"></div>`:'<div class="ph sm"></div>'}<p class="source-name">${esc(cutieText(s))}</p></a>${r?`<p class="source-latest"><a href="${href('recipes/recipe.html',{slug:r.slug})}">${esc(r.title)}</a></p>`:'<p class="source-empty">No recipes here yet</p>'}</div>`}).join('')}</div></section><section class="section"><h1 class="h2">${star()}About</h1><div class="about"><div class="about-photo home-about-photo">${window.MIDNIGHT_SITE?.aboutImages?.aboutRecipes?`<img class="photo" loading="lazy" decoding="async" src="${esc(root+window.MIDNIGHT_SITE.aboutImages.aboutRecipes)}" alt="MIDNIGHT KITCHEN">`:''}</div><div><p>Hi, my name is Mitsuka. I cook after dark. This is a collection of recipes inspired by restaurants, travels, memories, traditions, and whatever catches my curiosity late at night.</p><p class="more"><a href="${href('pages/about.html')}">Learn more</a></p></div></div></section></div>`}
function listPage(title,list,sub=''){setMeta(title,`${title}: ${list.length} recipe${list.length===1?'':'s'} from ${SITE_NAME}.`);setCanonicalFromLocation();const sort=listSortValue();const usualsContext=list.length>0&&list.every(r=>r.isUsuals);app.innerHTML=`<div class="wrap"><section class="section"><h1 class="h2">${star()}${esc(title)}</h1>${sub?`<p class="filter-subtitle">${esc(sub)}</p>`:''}${sortControl(sort)}${cards(sortRecipes(list,sort),usualsContext)}</section></div>`;bindListSort()}
function notFound(msg){setMeta('Page not found');const m=document.createElement('meta');m.name='robots';m.content='noindex';document.head.appendChild(m);app.innerHTML=`<div class="wrap"><section class="section"><h1 class="h2">${star()}Page not found</h1><p class="body-copy">${esc(msg)}</p><p class="body-copy"><a href="${href('recipes/index.html')}">View all recipes</a> · <a href="${href('index.html')}">Home</a></p></section></div>`}
function isoDuration(t){const x=String(t||'');const h=x.match(/(\d+(?:\.\d+)?)\s*(?:hrs?|hours?|h)\b/i),m=x.match(/(\d+)\s*(?:mins?|minutes?|m)\b/i);if(!h&&!m)return '';return 'PT'+(h?Math.round(Number(h[1]))+'H':'')+(m?Number(m[1])+'M':'')}
function cleanStepText(t){return String(t||'').replace(/\{\{qty:[^}]*\}\}\s*/g,'').replace(/\*+/g,'').replace(/\s+/g,' ').trim()}
function addRecipeJsonLd(r){document.getElementById('recipe-jsonld')?.remove();const abs=p=>p?`${SITE_URL}/${p}`:undefined;const ing=(r.ingredients||[]).filter(x=>x&&x.item&&!x.hideFromIngredients).map(x=>[x.amount,x.unit,x.item].filter(v=>v!==undefined&&v!==null&&v!=='').join(' '));const steps=(r.steps||[]).flatMap(st=>(Array.isArray(st.paragraphs)?st.paragraphs:[]).map(cleanStepText).filter(Boolean)).map(text=>({'@type':'HowToStep',text}));if(!ing.length||!steps.length)return;const st=r.stats||{};const data={'@context':'https://schema.org','@type':'Recipe',name:r.title,description:r.description||undefined,url:`https://midnightrecipes.com/recipes/recipe.html?slug=${encodeURIComponent(r.slug)}`,image:abs(imageData(r).heroImage)||DEFAULT_SHARE_IMAGE,datePublished:r.dateAdded||undefined,author:{'@type':'Organization',name:SITE_NAME},recipeCategory:r.course||undefined,recipeCuisine:r.cuisine||undefined,prepTime:isoDuration(st.prep)||undefined,cookTime:isoDuration(st.cook)||undefined,totalTime:isoDuration(st.total)||undefined,recipeYield:st.serves!==undefined?String(st.serves):undefined,recipeIngredient:ing,recipeInstructions:steps};const el=document.createElement('script');el.type='application/ld+json';el.id='recipe-jsonld';el.textContent=JSON.stringify(data);document.head.appendChild(el)}function relatedRecipes(r){if(r.isUsuals)return [];const lc=v=>String(v).toLowerCase();const cu=new Set(cuisineValues(r).map(lc)),co=new Set(courseValues(r).map(lc)),ic=new Set((r.ingredientCategories||[]).map(lc));return recipes.filter(x=>x!==r&&!x.isUsuals).map(x=>{let n=0;if(cuisineValues(x).some(v=>cu.has(lc(v))))n+=2;if(courseValues(x).some(v=>co.has(lc(v))))n+=1;if((x.ingredientCategories||[]).some(v=>ic.has(lc(v))))n+=1;if(x.source&&x.source===r.source)n+=1;return {x,n}}).filter(o=>o.n>0).sort((a,b)=>b.n-a.n||String(b.x.dateAdded||'').localeCompare(String(a.x.dateAdded||''))).slice(0,3).map(o=>o.x)}
function recipe(){const slug=(new URLSearchParams(location.search).get('slug')||'').trim();const r=slug?recipes.find(x=>String(x.slug||'').toLowerCase()===slug.toLowerCase()):null;if(!r){notFound(slug?'We could not find that recipe. It may have been moved or renamed.':'No recipe was selected.');return}setMeta(r.title,r.description);setCanonical(`${SITE_URL}/recipes/recipe.html?slug=${encodeURIComponent(r.slug)}`);{const heroPath=imageData(r).heroImage;setShareImage(heroPath?`${SITE_URL}/${heroPath}`:DEFAULT_SHARE_IMAGE,!!heroPath)}app.innerHTML=recipeHtml(r);bindRecipe(r);addRecipeJsonLd(r)}
function favorites(){setMeta('Favorites','Recipes you have saved on this device.');setNoindex();const favs=getFavs();const list=sorted().filter(r=>favs.includes(r.slug));if(!list.length){app.innerHTML=`<div class="wrap"><section class="section"><h1 class="h2">${star()}Favorites</h1><p class="body-copy">No favorites yet. Tap “Favorite” on a recipe to keep it here.</p><p class="body-copy"><a href="${href('recipes/index.html')}">Browse all recipes</a></p></section></div>`;return}listPage('Favorites',list,'Saved on this device only.')}
function photo(src,alt,cls='',optional=false,eager=false){return src?`<div class="photo-frame ${cls}"><img class="photo" ${eager?'fetchpriority="high" ':'loading="lazy" '}decoding="async" src="${esc(root+src)}" alt="${esc(alt)}" onerror="${imageErrorHandler(cls,optional)}"/></div>`:''}
function stepPhoto(src,alt){return src?`<div class="photo-frame step-photo-frame"><img class="photo" loading="lazy" decoding="async" src="${esc(root+src)}" alt="${esc(alt)}" onerror="const g=this.closest('.step-photos');const E=['.jpeg','.JPG','.JPEG'];let i=Number(this.dataset.extI||0);if(i<E.length){this.dataset.extI=String(i+1);this.src=this.src.replace(/\\.(?:jpe?g)$/i,E[i]);}else{this.closest('.photo-frame')?.remove();if(g&&!g.querySelector('img'))g.remove();}"></div>`:''}
function stepPhotoMarkup(s,r,i){let list=resolvedStepImages(s,r,i);if(!list.length)return '';return `<div class="step-photos step-photos-${list.length}">${list.map((src,n)=>stepPhoto(src,`${r.title} step ${i+1} photo ${n+1}`)).join('')}</div>`}
function categoryLink(type,value){const map={source:'pages/source.html',course:'pages/meal.html',cuisine:'pages/cuisine.html'};return href(map[type],{value})}
function normalizeIngredientFile(value){
  if(!value)return {groups:[],name:'',items:[]};
  if(Array.isArray(value)&&value.some(x=>x&&typeof x==='object'&&!Array.isArray(x)&&('details' in x||'items' in x))){
    const groups=value.map(g=>{const name=g?.name||g?.label||'';const details=g?.details||g?.items||[];const items=Array.isArray(details)?details.map(item=>{if(Array.isArray(item))return [String(item[0]||''),String(item[1]??'')];const label=item?.label||item?.name;const text=item?.text??item?.value??item?.description;return label&&text!=null?[String(label),String(text)]:null}).filter(Boolean).filter(([k])=>!/^\d+$/.test(k.trim())):[];return {name:String(name),items};}).filter(g=>g.name||g.items.length);
    return {groups,name:'',items:[]};
  }
  if(Array.isArray(value)){
    const items=value.map(item=>{if(!item)return null;if(Array.isArray(item)){const label=item[0],text=item[1];if(typeof label==='string'&&label.trim()&&!/^\d+$/.test(label.trim())&&text!=null)return [label,String(text)];return null}if(typeof item==='object'){const label=item.label||item.name;const text=item.text??item.value??item.description;if(typeof label==='string'&&label.trim()&&!/^\d+$/.test(label.trim())&&text!=null)return [label,String(text)];}return null}).filter(Boolean).filter(([k])=>!['ingredient name','ingredient'].includes(k.toLowerCase()));
    return {groups:[],name:'',items};
  }
  const entries=Object.entries(value).filter(([k,v])=>v!=null&&v!==''&&k.toLowerCase()!=='ingredient name');const nameEntry=entries.find(([k])=>k.toLowerCase()==='ingredient');return {groups:[],name:nameEntry?String(nameEntry[1]):'',items:entries.filter(([k])=>k.toLowerCase()!=='ingredient')};
}
function richText(value){
  return esc(String(value??'')).replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>').replace(/\*([^*]+)\*/g,'<em>$1</em>').replace(/\n\s*\n/g,'<br><br>').replace(/\n/g,'<br>')
}
function plainRichText(value){
  return esc(String(value??'')).replace(/\*\*([^*]+)\*\*/g,'$1').replace(/\*([^*]+)\*/g,'$1').replace(/\n\s*\n/g,'\n').replace(/\n/g,'<br>')
}
function parseQuantity(value){
  const s=String(value??'').trim();
  if(/^\d+\s+\d+\/\d+$/.test(s)){const [w,f]=s.split(/\s+/);const [a,b]=f.split('/').map(Number);return Number(w)+a/b}
  if(/^\d+\/\d+$/.test(s)){const [a,b]=s.split('/').map(Number);return a/b}
  return Number(s);
}
function normalizeStepUnit(value){
  const u=String(value||'').toLowerCase().trim();
  if(/^tablespoons?$/.test(u))return 'tbsp';
  if(/^teaspoons?$/.test(u))return 'tsp';
  if(/^cups?$/.test(u))return 'cup';
  if(/^ounces?$/.test(u))return 'oz';
  if(/^pounds?$/.test(u)||u==='lbs')return 'lb';
  if(u==='c')return 'cup';
  return u;
}
function instructionIngredientCandidates(r,item,rawUnit,context=''){
  const ref=String(item??'').split('::');
  const requestedGroup=ref.length>1?normalizeQuantityIngredient(ref[0]):'';
  const requestedItem=ref.length>1?ref.slice(1).join('::'):String(item??'');
  const key=ingredientKey(requestedItem);
  const list=[]; let currentGroup='';
  (r?.ingredients||[]).forEach(x=>{
    if(x&&typeof x==='object'&&x.group){currentGroup=String(x.group);return;}
    if(x&&typeof x==='object'&&!x.group&&x.item)list.push({ingredient:x,group:currentGroup});
  });
  const matching=list.filter(({ingredient,group})=>{
    if(requestedGroup&&normalizeQuantityIngredient(group)!==requestedGroup)return false;
    const xKey=ingredientKey(ingredient.item);
    return xKey===key || xKey.includes(key) || key.includes(xKey) || normalizeQuantityIngredient(ingredient.item).includes(normalizeQuantityIngredient(requestedItem));
  }).map(x=>x.ingredient);
  if(matching.length<=1)return matching;
  const raw=normalizeStepUnit(rawUnit);
  return matching.slice().sort((a,b)=>{
    const score=x=>{
      const xKey=ingredientKey(x.item);
      const contextText=normalizeQuantityIngredient(context);
      const finishingMatch=/finish|finishing/.test(contextText)&&/finish|finishing/.test(normalizeQuantityIngredient(x.item));
      const nonFinishingMatch=!/finish|finishing/.test(contextText)&&!/finish|finishing/.test(normalizeQuantityIngredient(x.item));
      const source=normalizeStepUnit(x.unit);
      const imperial=normalizeStepUnit(x.imperialUnit||'');
      const desired=normalizeStepUnit(desiredUnit(x.item,'imperial',x.unit,'',r)||'');
      return (xKey===key?10000:0)+(finishingMatch?900:0)+(nonFinishingMatch?800:0)+(source===raw?400:0)+(imperial===raw?300:0)+(desired===raw?200:0)+Math.max(normalizeQuantityIngredient(x.item).length,ingredientKey(x.item).length)/1000;
    };
    return score(b)-score(a);
  });
}
function applyScaleMinimum(amount,item,unit,r){
  const key=`${ingredientKey(item)}|${normalizeStepUnit(unit)}`;
  const minimum=r?.scaleMinimums?.[key];
  if(minimum===undefined||minimum===null||minimum==='')return amount;
  return Math.max(Number(amount),Number(minimum));
}
const SINGULAR_ITEMS={'egg yolks':'egg yolk','eggs':'egg','egg whites':'egg white','bananas':'banana','firm-ripe bananas':'firm-ripe banana','whole cloves':'whole clove','leaves':'leaf'};
function qtyNumber(str){const m=String(str).trim().match(/^(\d+)(?:\s+(\d+)\/(\d+))?$|^(\d+)\/(\d+)$/);if(!m)return NaN;if(m[4])return Number(m[4])/Number(m[5]);return Number(m[1])+(m[2]?Number(m[2])/Number(m[3]):0)}
function fixPlurals(text){
  return String(text).replace(/((?:\d+\s+)?\d+(?:\/\d+)?)(\s+(?:large\s+)?)(egg yolks|egg whites|eggs|firm-ripe bananas|bananas|whole cloves)\b/gi,(m,q,mid,noun)=>{
    const v=qtyNumber(q);
    if(!Number.isFinite(v)||v>1+1e-9)return m;
    return q+mid+(SINGULAR_ITEMS[noun.toLowerCase()]||noun);
  });
}
function scaleApprox(t,scale){return String(t).replace(/(approx\.\s*)(\d+(?:\.\d+)?)(\s*g\b)/i,(m,a,n,g)=>`${a}${Math.round(Number(n)*scale)}${g}`)}
function compactSameUnit(s){const m=String(s).match(/^(.+?)\s+(\S+)–(.+?)\s+(\S+)$/);return m&&m[2]===m[4]&&!/^[\d/]+$/.test(m[2])?`${m[1]}–${m[3]} ${m[4]}`:s}
function rangeCompact(x,unit){return !!(x.compactRange||(unit==='imperial'&&x.imperialCompactRange))}
function instructionQuantityFromIngredient(x,scale,unit,r){
  if(!x)return '';
  if(x.minAmount!==undefined&&x.maxAmount!==undefined){
    const min=applyScaleMinimum(Number(x.minAmount)*scale,x.item,x.unit,r),max=applyScaleMinimum(Number(x.maxAmount)*scale,x.item,x.unit,r);
    if(unit==='imperial'&&x.imperialMinAmount!==undefined&&x.imperialMaxAmount!==undefined){
      const min=applyScaleMinimum(Number(x.imperialMinAmount)*scale,x.item,x.imperialMinUnit||x.unit,r);
      const max=applyScaleMinimum(Number(x.imperialMaxAmount)*scale,x.item,x.imperialMaxUnit||x.unit,r);
      return rangeCompact(x,unit)?formatCompactRange(min,max,x.imperialMinUnit||x.unit,x.imperialMaxUnit||x.unit,r):`${formatTargetValue(min,x.imperialMinUnit||x.unit,r)}–${formatTargetValue(max,x.imperialMaxUnit||x.unit,r)}`;
    }
    if(rangeCompact(x,unit)&&unit!=='imperial')return formatCompactRange(min,max,x.unit,x.unit,r);
    const target=desiredUnit(x.item,unit,x.unit,'',r);
    if(target)return rangeCompact(x,unit)?formatCompactTextRange(convertToUnit(min,x.unit,target,x.item,'',r),convertToUnit(max,x.unit,target,x.item,'',r)):`${convertToUnit(min,x.unit,target,x.item,'',r)}–${convertToUnit(max,x.unit,target,x.item,'',r)}`;
    if(unit==='imperial'){const a=convert(min,x.unit,'imperial',x.item,'',r),b=convert(max,x.unit,'imperial',x.item,'',r);return rangeCompact(x,unit)?formatCompactRange(min,max,x.unit,x.unit,r):`${a}–${b}`}return rangeCompact(x,unit)?formatCompactRange(min,max,x.unit,x.unit,r):`${formatQuantity(min,x.unit)}–${formatQuantity(max,x.unit)}`;
  }
  if(x.amount!==undefined&&x.amount!==null&&x.amount!==''){
    if(unit==='imperial'&&x.imperialMinAmount!==undefined&&x.imperialMaxAmount!==undefined){const min=applyScaleMinimum(Number(x.imperialMinAmount)*scale,x.item,x.imperialMinUnit||x.unit,r),max=applyScaleMinimum(Number(x.imperialMaxAmount)*scale,x.item,x.imperialMaxUnit||x.unit,r);return rangeCompact(x,unit)?formatCompactRange(min,max,x.imperialMinUnit||x.unit,x.imperialMaxUnit||x.unit,r):`${formatTargetValue(min,x.imperialMinUnit||x.unit,r)}–${formatTargetValue(max,x.imperialMaxUnit||x.unit,r)}`;}
    if(unit==='imperial'&&x.imperialAmount!==undefined&&x.imperialAmount!==null&&x.imperialAmount!==''){const amount=applyScaleMinimum(Number(x.imperialAmount)*scale,x.item,x.imperialUnit,r);return formatTargetValue(amount,x.imperialUnit,r);}
    const scaledAmount=applyScaleMinimum(Number(x.amount)*scale,x.item,x.unit,r);
    const target=desiredUnit(x.item,unit,x.unit,'',r);
    const formatted=target?convertToUnit(scaledAmount,x.unit,target,x.item,'',r):convert(scaledAmount,x.unit,unit,x.item,'',r);
    return `${formatted}${unit!=='imperial'?(x.instructionMetricSuffix||''):''}`;
  }
  return '';
}
function scaleInstructionQuantity(num,rawUnit,scale,unit,context='',pos=0,ingredientContext='',r=null){
  const amount=parseQuantity(num)*scale;
  const unitCanInferBefore=/^(g|kg|ml|l|oz|ounces?|lbs?|pounds?|tsp|teaspoons?|tbsp|tablespoons?|cups?|cup)$/i.test(String(rawUnit||''));
  const activeRecipe=r?.stepQuantityConversion?r:null;
  const item=ingredientContext||inferIngredientFromText(context,pos,ingredientContext,unitCanInferBefore,activeRecipe);
  const candidate=instructionIngredientCandidates(r,item,rawUnit,ingredientContext)[0];
  if(candidate){
    const synced=instructionQuantityFromIngredient(candidate,scale,unit,r);
    if(synced)return synced;
  }
  return convert(amount,rawUnit,unit,item,ingredientContext,r);
}
function scaleInstructionText(value,r,scale,unit,ingredientContext=''){return fixPlurals(scaleInstructionTextRaw(value,r,scale,unit,ingredientContext))}
function scaleInstructionTextRaw(value,r,scale,unit,ingredientContext=''){
  let text=String(value??'');
  if(r?.stepQuantityConversion){
    let usedQuantityTokens=false;
    text=text.replace(/\{\{approx:([^}]+)\}\}/g,(m,key)=>{const ing=(r.ingredients||[]).find(i=>i&&String(i.item).toLowerCase()===String(key).toLowerCase());const g=ing&&String(ing.item).match(/approx\.\s*(\d+(?:\.\d+)?)\s*g\b/i);if(!g)return m;usedQuantityTokens=true;return `${Math.round(Number(g[1])*scale)} g`;});
    text=text.replace(/\{\{qty:([^}]+)\}\}/g,(m,item)=>{
      if(r?.slug==='mexican-calabaza-en-tacha-pumpkin-pie'){
        const syrup=String(item).startsWith('INSTRUCTION-ONLY SYRUP::');
        const key=syrup?String(item).split('::').slice(1).join('::'):String(item);
        const special={
          'Half & Half / 10% Cream':{metric:[180,'ml'],imperial:[3/4,'cup',4]},
          'Pumpkin Purée':{metric:[400,'g'],imperial:[5/3,'cup',3]},
          'Eggs':{metric:[2,'large'],imperial:[2,'large']},
          'Orange Juice':syrup?{metric:[30,'ml'],imperial:[2,'tbsp']}:{metric:[15,'ml'],imperial:[1,'tbsp']},
          'Salt':syrup?{metric:[1,'pinch'],imperial:[1,'pinch']}:{metric:[0.25,'tsp'],imperial:[0.25,'tsp']},
          'Dark Brown Sugar':syrup?{metric:[35,'g'],imperial:[2.5,'tbsp']}:{metric:[60,'g'],imperial:[1/3,'cup',3]},
          'Molasses':syrup?{metric:[5,'g'],imperial:[1,'tsp']}:{metric:[10,'g'],imperial:[0.5,'tbsp']},
          'Water':{metric:[15,'ml'],imperial:[1,'tbsp']},
          'Orange Peel, about 2–3 cm (1 inch) long':{metric:[1,'strip'],imperial:[1,'strip']}
        }[key];
        if(special){
          const spec=special[unit==='imperial'?'imperial':'metric'];
          const amount=Number(spec[0])*scale, u=spec[1];
          let value;
          if(u==='cup')value=formatCupValue(amount,false);
          else value=formatUnitValue(amount,u);
          usedQuantityTokens=true; return value;
        }
      }
      const candidate=instructionIngredientCandidates(r,item,'',ingredientContext)[0];
      const synced=candidate?instructionQuantityFromIngredient(candidate,scale,unit,r):'';
      if(synced){usedQuantityTokens=true;return compactSameUnit(synced);}
      return m;
    });
    text=text.replace(/½/g,'1/2').replace(/¼/g,'1/4').replace(/¾/g,'3/4').replace(/⅓/g,'1/3').replace(/⅔/g,'2/3').replace(/⅛/g,'1/8').replace(/⅜/g,'3/8').replace(/⅝/g,'5/8').replace(/⅞/g,'7/8');
    if(usedQuantityTokens){
      if(r?.slug==='mexican-calabaza-en-tacha-pumpkin-pie'){
        text=text.replace(/(^|[^\d])((?:\d+\s+)?\d+\/\d+|\d+(?:\.\d+)?)\s+(stick|strips?|pinch(?:es)?)(?=\s|[,.]|$)/gi,(match,prefix,num,rawUnit)=>{
          const amount=parseQuantity(num)*scale;
          const display=Math.abs(amount-Math.round(amount))<1e-9?String(Math.round(amount)):formatFraction(amount,8);
          const base=String(rawUnit).toLowerCase().startsWith('strip')?'strip':String(rawUnit).toLowerCase().startsWith('pinch')?'pinch':'stick';
          const normalized=amount<=1+1e-9?base:(base==='pinch'?'pinches':`${base}s`);
          return `${prefix}${display} ${normalized}`;
        });
        
      }
      return text;
    }
  }
  const atom='(?:\\d+\\s+\\d+\\/\\d+|\\d+\\/\\d+|\\d+(?:\\.\\d+)?)';
  const range=`${atom}(?:\\s*[–-]\\s*${atom})?`;
  const units='g|kg|ml|l|oz|ounces?|lbs?|pounds?|tsp|teaspoons?|tbsp|tablespoons?|cups?|cup|large\\s+eggs?|eggs?';
  const conversionUnits=r?.stepQuantityConversion?'g|kg|ml|l|oz|ounces?|lbs?|pounds?|tsp|teaspoons?|tbsp|tablespoons?|cups?|cup':units;
  const quantityPattern=new RegExp(r?.stepQuantityConversion?`(^|[^\\d])(${range})\\s*((?<![A-Za-z])(?:${conversionUnits})\\b)(?=\\s|$|[,.])`:`(^|[^\\d])(${range})\\s*(\\b(?:${units})\\b)(?=\\b|[,.])`,'gi');
  text=text.replace(quantityPattern,(match,prefix,num,rawUnit,offset)=>{
    const rangeParts=num.match(new RegExp(`^(${atom})(?:\\s*[–-]\\s*(${atom}))?$`));
    if(!rangeParts)return match;
    if(r?.stepQuantityConversion){
      const unitCanInferBefore=/^(g|kg|ml|l|oz|ounces?|lbs?|pounds?|tsp|teaspoons?|tbsp|tablespoons?|cups?|cup)$/i.test(String(rawUnit||''));
      const item=inferIngredientFromText(text,offset+prefix.length,ingredientContext,unitCanInferBefore,r);
      const candidate=instructionIngredientCandidates(r,item,rawUnit,ingredientContext)[0];
      const synced=instructionQuantityFromIngredient(candidate,scale,unit,r);
      if(synced)return prefix+synced;
    }
    const first=scaleInstructionQuantity(rangeParts[1],rawUnit,scale,unit,text,offset+prefix.length,ingredientContext,r);
    if(!rangeParts[2])return prefix+first;
    const second=scaleInstructionQuantity(rangeParts[2],rawUnit,scale,unit,text,offset+prefix.length,ingredientContext,r);
    return `${prefix}${first}–${second}`;
  });
  if(r?.slug==='mexican-calabaza-en-tacha-pumpkin-pie'){
    text=text.replace(/(^|[^\d])((?:\d+\s+)?\d+\/\d+|\d+(?:\.\d+)?)\s+(stick|strips?|pinch(?:es)?)(?=\s|[,.]|$)/gi,(match,prefix,num,rawUnit)=>{
      const amount=parseQuantity(num)*scale;
      const display=Math.abs(amount-Math.round(amount))<1e-9?String(Math.round(amount)):formatFraction(amount,8);
      const base=String(rawUnit).toLowerCase().startsWith('strip')?'strip':String(rawUnit).toLowerCase().startsWith('pinch')?'pinch':'stick';
      const normalized=amount<=1+1e-9?base:(base==='pinch'?'pinches':`${base}s`);
      return `${prefix}${display} ${normalized}`;
    });
  }
  if(r?.slug==='mexican-calabaza-en-tacha-pumpkin-pie'){
    
  }
  return text;
}
function instructionAmount(a,scale,unit,context='',r=null){
  const ingredientContext=a?.ingredient||'';
  if(a&&a.min!==undefined&&a.max!==undefined){
    const candidate=ingredientContext?instructionIngredientCandidates(r,ingredientContext,a.unit,context)[0]:null;
    if(candidate){
      const minValue={...candidate,amount:unit==='imperial'&&candidate.imperialMinAmount!==undefined?candidate.imperialMinAmount:a.min,unit:unit==='imperial'&&candidate.imperialMinUnit?candidate.imperialMinUnit:candidate.unit,minAmount:undefined,maxAmount:undefined,imperialAmount:undefined,imperialMinAmount:undefined,imperialMaxAmount:undefined};
      const maxValue={...candidate,amount:unit==='imperial'&&candidate.imperialMaxAmount!==undefined?candidate.imperialMaxAmount:a.max,unit:unit==='imperial'&&candidate.imperialMaxUnit?candidate.imperialMaxUnit:candidate.unit,minAmount:undefined,maxAmount:undefined,imperialAmount:undefined,imperialMinAmount:undefined,imperialMaxAmount:undefined};
      const rangeText=`${instructionQuantityFromIngredient(minValue,scale,unit,r)}–${instructionQuantityFromIngredient(maxValue,scale,unit,r)}`;
      return compactSameUnit(rangeText);
    }
    return `${scaleInstructionQuantity(String(a.min),a.unit,scale,unit,context,0,ingredientContext,r)}–${scaleInstructionQuantity(String(a.max),a.unit,scale,unit,context,0,ingredientContext,r)}`;
  }
  if(a&&a.value!==undefined)return scaleInstructionQuantity(String(a.value),a.unit,scale,unit,context,0,ingredientContext,r);
  return '';
}
function instructionModeParts(value){
  const raw=String(value??'').trim();
  const m=raw.match(/^\*\*(Midnight Shortcut|Food Processor \(Fastest\)|Quiet Mode \(Silent\))\s*:\*\*\s*(.*)$/i) || raw.match(/^(Midnight Shortcut|Food Processor \(Fastest\)|Quiet Mode \(Silent\))\s*:\s*(.*)$/i);
  if(m)return {label:m[1],body:m[2]};
  const title=raw.match(/^(Midnight Shortcut|Food Processor|Quiet Mode)(?:\s*[—-]\s*(Fastest|Silent|Microwave|Boil))?\s*:?[ ]*$/i);
  if(title){
    const label=title[2]&&/^(Food Processor|Quiet Mode)$/i.test(title[1])?`${title[1]} (${title[2]})`:title[2]&&/^Midnight Shortcut$/i.test(title[1])?`${title[1]} — ${title[2]}`:title[1];
    return {label,body:'',titleOnly:true};
  }
  return null;
}
function instructionIsModeTitle(value){return !!instructionModeParts(value);}
function structuredInstructionText(value,r,scale,unit,context=''){
  if(!value||typeof value!=='object'||typeof value.text!=='string')return '';
  let text=value.text;
  const amounts=Array.isArray(value.amounts)?value.amounts:[];
  text=text.replace(/\{\{amount:(\d+)\}\}/g,(m,i)=>instructionAmount(amounts[Number(i)],scale,unit,context,r));
  return text;
}
function instructionParagraph(value,isNote=false,r=null,scale=1,unit='metric',mode=false,context=''){
  if(value&&typeof value==='object'){
    const text=structuredInstructionText(value,r,scale,unit,context);
    return `<p class="${isNote?'step-note':''}${mode?' instruction-mode-body':''}">${richText(text)}</p>`;
  }
  const parts=instructionModeParts(value);
  if(parts){
    const body=parts.body?scaleInstructionText(parts.body,r,scale,unit,context):'';
    return `<p class="instruction-mode"><strong>${esc(parts.label)}:</strong>${body?` ${richText(body)}`:''}</p>`;
  }
  const text=scaleInstructionText(value,r,scale,unit,context);
  let rendered=richText(text);
  if(!isNote&&r?.usesUsual){
    const u=recipes.find(x=>x.slug===r.usesUsual);
    if(u?.title){const link=href('recipes/recipe.html',{slug:u.slug});rendered=rendered.split(esc(u.title)).join(`<a href="${link}"><u>${esc(u.title)}</u></a>`);}
  }
  return `<p class="${isNote?'step-note':''}${mode?' instruction-mode-body':''}">${rendered}</p>`;
}
function instructionBlock(paragraphs,r,scale,unit,context=''){
  let mode=false;
  return paragraphs.map(p=>{
    const isTitle=instructionIsModeTitle(p);
    const html=instructionParagraph(p,false,r,scale,unit,mode,context);
    mode=isTitle&&!!instructionModeParts(p)?.titleOnly;
    return html;
  }).join('');
}
function normalizeIngredientText(value){return String(value??'').toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9%.]+/g,' ').replace(/\bfinely crushed\b|\bfinely minced\b|\bchopped\b|\bminced\b|\bcut into 3 4 cm pieces\b|\bto taste\b|\bfor finishing\b|\bfor finish\b/g,'').replace(/\s+/g,' ').trim()}
function ingredientFileKey(value){const n=normalizeIngredientText(value);if(n.includes('graham cracker'))return 'graham crackers';if(n.includes('dark chocolate'))return 'dark chocolate';if(n.includes('espresso powder'))return 'espresso powder';if(n.includes('unsweetened cocoa powder')||n==='cocoa powder')return 'unsweetened cocoa powder';if(n.includes('3 25 milk')||n.includes('3.25 milk'))return '3.25% milk';if(n.includes('fatty ground pork')||n.includes('ground pork'))return 'ground pork';if(n.includes('fresh red chili'))return 'fresh red chili';if(n.includes('makrut lime leaf'))return 'makrut lime leaf';if(n==='garlic'||n.includes(' garlic'))return 'garlic';if(n.includes('doubanjiang'))return 'doubanjiang';if(n==='apple'||n==='apples')return 'apple';if(n==='whole milk')return 'whole milk';if(n.includes('35% whipping cream')||n.includes('whipping cream'))return '35% whipping cream';return n}
function ingredientFileAnchorMap(r){const map={};normalizeIngredientFile(r.ingredientFile).groups.forEach(g=>{map[ingredientFileKey(g.name)]=g.name});return map}
function ingredientInfoLink(r,item,enabled=true){if(!enabled)return '';const key=ingredientFileKey(item);if(!key)return '';const map=ingredientFileAnchorMap(r);const actual=map[key]||Object.entries(map).find(([k])=>key===k||key.includes(k)||k.includes(key))?.[1];if(!actual)return '';return ` <a class=\"ingredient-info\" href=\"#ingredient-file-${slugify(actual)}\" aria-label=\"Ingredient File: ${esc(actual)}\">ⓘ</a>`}
function ingredientFileMarkup(r,ingredientFile){const groups=ingredientFile.groups;return groups.map(g=>`<div class="ingredient-file-group" id="ingredient-file-${slugify(g.name)}"><div class="ingredient-file-name">${esc(g.name)}</div><div class="ingredient-file-details">${g.items.filter(([k,v])=>hasMeaningfulValue(k)&&hasMeaningfulValue(v)).map(([k,v])=>`<p><strong>${esc(k)}:</strong> ${richText(v)}</p>`).join('')}</div></div>`).join('')}
function splitFooterValues(value){return String(value??'').split(/\s*(?:·|,|\/)\s*/).map(x=>x.trim()).filter(Boolean)}
function footerFilterLink(type,value){
  if(!hasMeaningfulValue(value))return '';
  const target=type==='course'?courseFilterValue(value):value;
  const known=type==='source'?sources.includes(value):type==='course'?courses.includes(target):type==='cuisine'?recipes.some(x=>cuisineValues(x).some(v=>String(v).toLowerCase()===String(value).toLowerCase())):false;
  return known?categoryLink(type,target):href('recipes/index.html',{q:value});
}
function footerLinks(type,value){
  const values=splitFooterValues(value);
  return values.map((x,i)=>`<a href="${footerFilterLink(type,x)}">${esc(x)}</a>${i<values.length-1?' · ':''}`).join('');
}
function footerIngredientValues(r){
  if(Array.isArray(r.footerMainIngredients)&&r.footerMainIngredients.length)return r.footerMainIngredients;
  if(Array.isArray(r.mainIngredients)&&r.mainIngredients.length)return r.mainIngredients;
  return Array.isArray(r.ingredientCategories)?r.ingredientCategories.filter(hasMeaningfulValue):[];
}
function recipeHtml(r){
  const ingredientFile=normalizeIngredientFile(r.ingredientFile);
  const file=ingredientFile.items;
  const fileGroups=ingredientFile.groups;
  const isUsual=!!r.isUsuals;
  const foundTitles=recipes.filter(x=>!x.isUsuals&&x.usesUsual===r.slug).map(x=>x.title);
  const foundIn=foundTitles.map(title=>{const found=recipes.find(x=>x.title===title&&!x.isUsuals);return found?`<a href="${href('recipes/recipe.html',{slug:found.slug})}">${esc(title)}</a>`:`<span>${esc(title)}</span>`;}).join('<br>');
  const intro=isUsual?`<section class="usual-intro"><p class="body-copy"><em>${esc(r.description||'')}</em></p>${String(r.usualIntro||'').split(/\n\s*\n/).filter(Boolean).map(x=>`<p class="body-copy">${esc(x)}</p>`).join('')}</section>`:'';
  const statsPan=(isUsual||r.showPan)&&r.stats?.pan?`<br><b>Pan</b>: ${esc(r.stats.pan)}`:'';const statsChill=r.showChill&&r.stats?.chill?`<br><b>Chill</b>: ${esc(r.stats.chill)}`:'';
  return `<div class="recipe-card${r.fixedStepPhotoCells?' fixed-step-photo-cells':''}"><div class="rtop"><div><h1 class="rtitle">${esc(cutieText(r.title))}</h1><div class="meta-line"><span>${r.timeStamp?`📍 ${esc(r.timeStamp)}<span> · TORONTO</span>`:'The Usuals'}</span></div><div class="recipe-meta-divider"></div><p class="facts">${isUsual?`<b>The Usuals</b>: <a href="${href('pages/usuals.html',{category:r.usualsCategory})}">${esc(r.usualsCategory)}</a>`:`<b>Source</b>: <a href="${categoryLink('source',r.source)}">${esc(r.source)}</a>${r.sourceSecondary?` / <a href="${categoryLink('source',r.sourceSecondary)}">${esc(r.sourceSecondary)}</a>`:''}${hasMeaningfulValue(r.original)?`<br><b>Inspired by</b>: ${r.originalUrl?`<a class="original-link" href="${esc(r.originalUrl)}" target="_blank" rel="noopener noreferrer">${esc(r.original)}</a>`:esc(r.original)}`:''}${r.dish?`<br><b>Dish</b>: ${esc(r.dish)}`:''}<br><b>Cuisine</b>: <a href="${categoryLink('cuisine',r.cuisine)}">${esc(r.cuisine)}</a>${r.cuisineSecondary?`, <a href="${categoryLink('cuisine',r.cuisineSecondary)}">${esc(r.cuisineSecondary)}</a>`:''}<br><b>Course</b>: <a href="${categoryLink('course',canonicalCourse(r))}">${esc(courseDisplay(r))}</a>`}</p><div class="recipe-jump-top"><button class="btn" data-jump="the-recipe">Jump To Recipe</button></div></div>${photo(imageData(r).heroImage,r.title,'',false,true)}</div>${intro}${!isUsual&&(r.story||r.storyQuote)?`<section><h2 class="h3">THE STORY</h2>${r.storyQuote?`<p class="story-quote"><em>${esc(r.storyQuote)}</em></p>`:''}${r.story?`<p class="body-copy${r.compactStory?' story-compact':''}">${r.compactStory?richText(r.story).replace(/<br><br>/g,'<br>'):richText(r.story)}</p>`:''}</section>`:''}${(ingredientFile.name||file.length||fileGroups.length)?`<section id="ingredient-file-section"><h2 class="h3">INGREDIENT FILE</h2><div class="ingredient-file">${ingredientFileMarkup(r,ingredientFile)}${ingredientFile.name?`<div class="ingredient-file-name">${esc(ingredientFile.name)}</div>`:''}${file.length?`<div class="ingredient-file-details">${file.map(([k,v])=>`<p><strong>${esc(k)}:</strong> ${esc(v)}</p>`).join('')}</div>`:''}</div></section>`:''}<div class="recipe-practical-box"><section id="the-recipe"><h2 class="h3">THE RECIPE</h2><div class="recipe-inner"><div>${!isUsual&&imageData(r).recipeImage?photo(imageData(r).recipeImage,r.title,'',true):''}<h3 class="rname">${esc(cutieText(r.recipeTitle||r.title))}</h3><p class="stats"><b>Prep</b>: ${esc(r.stats?.prep||'—')} <b>Cook</b>: ${esc(r.stats?.cook||'—')}<br><b>Total</b>: ${esc(r.stats?.total||'—')}${statsChill}<br><b>Serves</b>: ${esc(r.stats?.serves||'—')}${statsPan}<br><b>Quiet level</b>: ${esc(r.stats?.quiet||'—')}</p><div class="recipe-actions recipe-action-row"><button class="btn" id="cookOpen" aria-pressed="false">Cook Mode</button><button class="btn" id="shareRecipe">Share</button><button class="btn" id="printRecipe">Print</button><button class="btn" id="favRecipe" aria-pressed="false">♡ Favorite</button></div><h4 class="block-title" style="margin-top:34px">INGREDIENTS</h4><div class="toggle-row" id="unitToggle"><button data-unit="metric" aria-pressed="false">Metric</button><button data-unit="imperial" aria-pressed="true">US</button></div><div class="toggle-row small" id="scaleToggle"><span aria-hidden="true">×</span><div class="scale-stepper"><input id="recipeScale" data-scale type="number" inputmode="decimal" min="0.01" step="any" value="1" aria-label="Quantity multiplier"><div class="scale-stepper-buttons" aria-label="Adjust quantity multiplier"><button type="button" data-scale-step="up" aria-label="Increase quantity multiplier">▲</button><button type="button" data-scale-step="down" aria-label="Decrease quantity multiplier">▼</button></div></div></div><ul class="ing" id="ingredientsList"></ul>${fileGroups.length?`<p class="ingredient-file-guide">ⓘ <a href="#ingredient-file-section">Click for substitutions &amp; ingredient tips</a></p>`:''}</div><div><h4 class="block-title" style="margin-top:34px">INSTRUCTIONS</h4>${(r.steps||[]).map((s,i)=>{const label=s.number&&s.title?`${s.number} — ${s.title}`:(s.label||'');const paragraphs=Array.isArray(s.paragraphs)?s.paragraphs:(s.text||'').split(/\n\s*\n/).map(x=>x.trim()).filter(Boolean);return `<div class="step"><div class="step-head"><span>${esc(label)}</span><span>${esc(s.clock||'')}</span></div><div class="step-copy">${instructionBlock(paragraphs,r,window.__recipeScale||1,window.__recipeUnit||'metric',s.title||'')}${s.stepNote?instructionParagraph(s.stepNote,true,r,window.__recipeScale||1,window.__recipeUnit||'metric',false,s.title||''):''}</div>${stepPhotoMarkup(s,r,i)}</div>`}).join('')}</div></div></section></div>${r.notes?.length?`<section><h2 class="h3">MIDNIGHT NOTES</h2><p class="note-sub">How I made it work in my kitchen.</p><div class="notes-list">${r.notes.map(n=>`<div class="note-item"><div class="note-title"><b>${esc(n[0])}</b></div><div class="note-body">${r.richTextNotes?richText(n[1]):plainRichText(n[1])}</div></div>`).join('')}</div></section>`:''}${isUsual&&foundTitles.length?`<section class="found-in"><h2 class="h3">FOUND IN</h2><p class="note-sub">${esc(r.foundInIntro||'Recipes that use this usual...')}</p><div class="body-copy found-in-list">${foundIn}</div></section>`:''}${r.finePrint?`<section><h2 class="h3">THE FINE PRINT</h2><p class="note-sub">Tonight or tomorrow?</p><p class="body-copy">${Object.entries(r.finePrint).filter(([k,v])=>hasMeaningfulValue(k)&&hasMeaningfulValue(v)).map(([k,v])=>`<b>${esc(k)}</b>: ${richText(v)}<br>`).join('')}</p></section>`:''}${(()=>{const rel=relatedRecipes(r);return rel.length?`<section class="related"><h2 class="h3">YOU MIGHT ALSO LIKE</h2>${cards(rel)}</section>`:''})()}${(r.footerRating||reviewsEnabled)?`<footer class="recipe-footer">${r.footerRating?`<p class="footer-rating">${esc(r.footerRating)}</p>`:''}${reviewsEnabled?`<div class="review-form"><h4 class="block-title">How did you like it?</h4><div class="star-picker" id="starPicker" aria-label="Choose a rating">${[1,2,3,4,5].map(n=>`<button type="button" data-star="${n}" aria-label="${n} stars" aria-pressed="false">☆</button>`).join('')}</div><input id="reviewName" maxlength="80" placeholder="Name (optional)"><textarea id="reviewComment" maxlength="1000" placeholder="Comment (optional)"></textarea><button class="btn" id="submitReview">Submit</button><p class="review-status" id="reviewStatus">Reviews are saved on this device only until a shared backend is connected.</p><div id="reviewList" class="review-list"></div></div>`:''}</footer>`:''}</div>`
}
function normalizeQuantityIngredient(value){
  return String(value??'').toLowerCase().replace(/[’']/g,"'").replace(/[^a-z0-9%.]+/g,' ').replace(/\s+/g,' ').trim();
}
const unitIngredientMap={
  metric:{
    'white sugar':'g','espresso powder':'g','salt':'g','unsweetened cocoa powder':'g','cornstarch':'g','ground ginger':'g','ground cinnamon':'g','cinnamon':'g','ginger':'g','plain biscuits':'g','sugar':'g','chicken bouillon powder':'g',
    'sesame oil':'ml','10% cream':'ml','half & half / 10% cream':'ml','half & half':'ml','half half':'ml','cold water':'ml'
  },
  imperial:{
    'ground pork':'lb','cooked sweet potato':'cup','cornstarch':'cup','3.25% milk':'cup','half & half / 10% cream':'cup','half & half':'cup','half half':'cup','10% cream':'cup','whole milk':'cup','unsalted butter':'cup','unsalted butter melted':'cup','graham crackers':'cup','graham crackers finely crushed':'cup','dark brown sugar':'cup','molasses':'cup','finely crushed':'cup','dark chocolate chopped':'cup','dark chocolate':'cup','sugar':'cup','white sugar':'cup','35% whipping cream':'cup','brown sugar':'cup','whipped cream':'cup','water':'cup','granulated sugar':'cup','apples':'cup','chives':'cup',
    'garlic':'tbsp','fresh ginger':'tbsp','ground cinnamon':'tbsp','cinnamon':'tbsp','ground ginger':'tbsp','ginger':'tbsp','salt':'tbsp','kosher salt':'tbsp'
  }
};
const orangeSyrupIngredients={'dark brown sugar':'tbsp','molasses':'tbsp','orange juice':'tbsp','water':'tbsp'};
const densityPerUnit={
  
  'salt|tsp':6,
  'kosher salt|tsp':6,
  'ground cinnamon|tsp':2.6,
  'cinnamon|tsp':2.6,
  'ground ginger|tsp':2,
  'ginger|tsp':2,
  'fresh ginger|tsp':2,
  'garlic|tsp':8.5/3,
  'unsweetened cocoa powder|tsp':5.4/3,
  'cornstarch|tsp':8/3,
  'sugar|tsp':12.5/3,
  'sugar|ml':0.833,
  'dark brown sugar|tbsp':12.5,
  'molasses|tbsp':20.5,
  'orange juice|tbsp':14.7868,
  'water|tbsp':14.7868,
  'salt|tbsp':18,
  'kosher salt|tbsp':18,
  'ground cinnamon|tbsp':7.8,
  'cinnamon|tbsp':7.8,
  'ground ginger|tbsp':6,
  'ginger|tbsp':6,
  'ground ginger|tbsp':6,
  'fresh ginger|tbsp':6,
  'garlic|tbsp':8.5,
  'unsweetened cocoa powder|tbsp':5.4,
  'cornstarch|tbsp':8,
  'white sugar|tbsp':12.5,
  'sugar|tbsp':12.5,
  'brown sugar|cup':220,
  'dark brown sugar|cup':220,
  'sugar|cup':200,
  'granulated sugar|cup':200,
  'cornstarch|cup':128,
  'graham crackers finely crushed|cup':100,
  'graham crackers|cup':100,
  'dark chocolate chopped|cup':170,
  'dark chocolate|cup':170,
  'unsalted butter|tbsp':14.1875,
  'unsalted butter melted|tbsp':14.1875,
  'unsalted butter|cup':227,
  'unsalted butter melted|cup':227,
  'whole milk|cup':240,
  '3.25% milk|cup':240,
  'half & half / 10% cream|cup':240,
  '10% cream|cup':240,
  '35% whipping cream|cup':240,
  'whipped cream|cup':240,
  'water|cup':240,
  'apples|cup':125,
  'chives|cup':16,
  'cooked sweet potato|cup':200,
  'ground pork|lb':453.592,
  'molasses|cup':328,
  'finely crushed|cup':100
};
function ingredientKey(value){
  let s=normalizeQuantityIngredient(value);
  s=s.replace(/\bfinely\s+(?:crushed|minced|grated)\b/g,'').replace(/\bchopped\b|\bminced\b|\bpeeled\b|\bcored\b|\bvery ripe\b|\bripe\b|\bmashed\b|\bfor finishing\b|\bfor finish\b|\bto taste\b/g,'').replace(/\band\s+cut\s+into\b.*$/,'').replace(/\bcut\s+into\b.*$/,'');
  s=s.replace(/\s+/g,' ').trim();
  const aliases={
    'espresso powder':'espresso powder','espresso powder':'espresso powder','graham crackers finely crushed':'graham crackers finely crushed','graham crackers finely crushed':'graham crackers finely crushed',
    'unsalted butter melted':'unsalted butter','unsalted butter cubed':'unsalted butter','melted butter':'unsalted butter','dark chocolate chopped':'dark chocolate chopped','half half 10% cream':'half & half / 10% cream','half half 10 cream':'half & half / 10% cream','half and half 10% cream':'half & half / 10% cream','half and half 10 cream':'half & half / 10% cream','fatty ground pork':'ground pork','white sugar':'sugar','unsweetened cocoa powder':'unsweetened cocoa powder','plain biscuits finely crushed':'plain biscuits','cooked sweet potato flesh':'cooked sweet potato','garlic chives or green onion cut into 3 4 cm pieces':'garlic chives or green onion','garlic chives or green onion':'garlic chives or green onion'
  };
  return aliases[s]||s;
}
function desiredUnit(item,mode,rawUnit,context='',r=null){
  if(!String(rawUnit??'').trim())return null;
  const key=ingredientKey(item);
  const contextText=normalizeQuantityIngredient(context);
  const overrides=r?.unitOverrides?.[mode]||{};
  const overrideKey=Object.keys(overrides).find(k=>ingredientKey(k)===key);
  if(overrideKey)return overrides[overrideKey];
  if(contextText.includes('orange molasses syrup')&&orangeSyrupIngredients[key])return orangeSyrupIngredients[key];
  const map=unitIngredientMap[mode]||{};
  if(map[key])return map[key];
  const candidates=Object.keys(map).sort((a,b)=>b.length-a.length);
  const matched=candidates.find(k=>key===k||key.startsWith(k+' '));
  if(matched)return map[matched];
  const u=String(rawUnit||'').toLowerCase();
  if(mode==='imperial'&&['tsp','teaspoon','teaspoons'].includes(u))return 'tsp';
  return null;
}
function fraction8(n){return formatFractionMin(n,8)}
function formatFractionMin(n,den=8){
  const v=Number(n); if(!Number.isFinite(v))return String(n);
  let rounded=Math.round(v*den)/den;
  if(rounded<=0&&v>0)rounded=1/den;
  return formatFraction(rounded,den);
}
function densityValue(key,targetUnit,r=null){
  const recipeDensity=r?.densityOverrides?.[`${key}|${targetUnit}`];
  if(recipeDensity)return recipeDensity;
  const exact=densityPerUnit[`${key}|${targetUnit}`];
  if(exact)return exact;
  const entries=Object.keys(densityPerUnit).filter(k=>k.endsWith(`|${targetUnit}`)).sort((a,b)=>b.length-a.length);
  const match=entries.find(k=>key===k.slice(0,-targetUnit.length-1)||key.startsWith(k.slice(0,-targetUnit.length-1)+' '));
  return match?densityPerUnit[match]:null;
}
const NICE_CUPS=[0,1/8,1/4,1/3,3/8,1/2,5/8,2/3,3/4,7/8,1];
const CUP_TEXT=['','1/8','1/4','1/3','3/8','1/2','5/8','2/3','3/4','7/8',''];
function formatCupValue(n,forceCup=false){
  const value=Number(n); if(!Number.isFinite(value))return `${n} cup`;
  const nearest=list=>list.reduce((best,f)=>Math.abs(f-value)<Math.abs(best-value)?f:best,list[0]);
  const asTbsp=()=>{const tbsp=value*16;if(tbsp<=0.25+1e-9)return `${formatFractionMin(tbsp*3,8)} tsp`;return `${formatFractionMin(tbsp,tbsp>4?2:4)} tbsp`};
  if(value<=0.25+1e-9){
    const near=nearest(NICE_CUPS.slice(1));
    return forceCup&&Math.abs(near-value)/value<=0.08?`${CUP_TEXT[NICE_CUPS.indexOf(near)]} cup`:asTbsp();
  }
  if(value<0.5){
    const near=nearest(NICE_CUPS.slice(1));
    if(Math.abs(near-value)/value>0.06)return asTbsp();
  }
  const steps=value>=1?[0,1/4,1/3,1/2,2/3,3/4,1]:NICE_CUPS;
  let whole=Math.floor(value+1e-9),rem=value-whole,best=steps[0];
  steps.forEach(f=>{if(Math.abs(rem-f)<Math.abs(rem-best)-1e-9)best=f});
  if(best===1){whole+=1;best=0}
  const frac=best?CUP_TEXT[NICE_CUPS.indexOf(best)]:'';
  const text=whole?(frac?`${whole} ${frac}`:String(whole)):frac;
  return `${text} ${whole+best>1+1e-9?'cups':'cup'}`;
}
function formatFraction(n,denominator=8){
  const d=Math.max(1,Math.round(Number(denominator)||8));
  const rounded=Math.round(Number(n)*d)/d;
  if(Math.abs(rounded)<0.0001)return '0';
  const whole=Math.floor(rounded+1e-9), numerator=Math.round((rounded-whole)*d);
  if(numerator===0)return String(whole);
  const gcd=(a,b)=>{while(b){const t=a%b;a=b;b=t}return a||1};
  const g=gcd(numerator,d), num=numerator/g, den=d/g;
  return whole?`${whole} ${num}/${den}`:`${num}/${den}`;
}
function formatCompactRange(min,max,minUnit,maxUnit,r=null){const left=formatTargetValue(min,minUnit,r),right=formatTargetValue(max,maxUnit||minUnit,r);const suffix=` ${minUnit||''}`;const first=minUnit&&String(minUnit).toLowerCase()===String(maxUnit||minUnit).toLowerCase()&&left.toLowerCase().endsWith(suffix.toLowerCase())?left.slice(0,-suffix.length):left;return `${first}–${right}`;}
function formatCompactTextRange(left,right){left=String(left);right=String(right);const match=right.match(/^(.*?)(\s+[^\s]+)$/);if(match&&left.endsWith(match[2]))left=left.slice(0,-match[2].length);return `${left}–${right}`;}
function formatTargetValue(n,u,r=null){
  const unit=String(u||'').toLowerCase();
  if(r?.usCupFractions&&['cup','cups'].includes(unit))return formatCupValue(n,!!r.forceCupUnits);
  return formatUnitValue(n,u);
}
const UNIT_PLURALS={pinch:'pinches',strip:'strips',stick:'sticks',clove:'cloves',bunch:'bunches','small bunch':'small bunches',slice:'slices',piece:'pieces',sprig:'sprigs',leaf:'leaves',leaves:'leaves'};
function pluralUnit(u,n){const key=String(u).toLowerCase();return Number(n)>1+1e-9&&UNIT_PLURALS[key]?UNIT_PLURALS[key]:u}
function formatUnitValue(n,u){
  const v=Number(n);
  if(!u)return Number.isInteger(v)?String(v):formatFractionMin(v,4);
  const unit=String(u).toLowerCase();
  if(unit==='tbsp')return `${formatFractionMin(v,4)} ${u}`;
  if(unit==='tsp')return `${formatFractionMin(v,8)} ${u}`;
  if(unit==='g'||unit==='ml'){const whole=v>0?Math.max(1,Math.round(v)):Math.round(v);return `${whole} ${u}`}
  if(['lb','oz','fl oz','l','kg'].includes(unit))return `${formatFractionMin(v,4)} ${u}`;
  if(['cup','cups'].includes(unit))return formatCupValue(v,true);
  return `${formatFractionMin(v,4)} ${pluralUnit(u,v)}`;
}
function convertToUnit(amount,from,to,item='',context='',r=null){
  const n=Number(amount); if(!Number.isFinite(n))return `${amount} ${to||from||''}`.trim();
  const f=String(from||'').toLowerCase(); const t=String(to||'').toLowerCase();
  if(!t||f===t){
    const sameKey=ingredientKey(item);
    if(t==='cup'||t==='cups')return r?.usCupFractions?formatCupValue(n,!!r.forceCupUnits):formatUnitValue(n,to||from);
    if(r?.integerUnits?.metric?.includes(sameKey))return `${Math.round(n)} ${to||from}`;
    return formatUnitValue(n,to||from);
  }
  const key=ingredientKey(item);
  const formatConverted=(value,target)=>{
    if(r?.integerUnits?.metric?.includes(key)&&['g','ml'].includes(String(target).toLowerCase()))return `${Math.round(value)} ${target}`;
    return formatUnitValue(value,target);
  };
  if(f==='g'&&t==='lb')return formatUnitValue(n/453.592,'lb');
  if(f==='g'&&t==='cup'){
    const density=densityValue(key,'cup',r); if(density)return formatTargetValue(n/density,'cup',r);
  }
  if(f==='tbsp'&&t==='cup'){
    const density=densityValue(key,'tbsp',r); if(density)return formatTargetValue(n*density/ (densityValue(key,'cup',r)||240),'cup',r);
    return formatTargetValue(n/16,'cup',r);
  }
  if(f==='ml'&&t==='cup')return formatTargetValue(n/240,'cup',r);
  if(f==='g'&&t==='tbsp'){
    const density=densityValue(key,'tbsp',r); if(density)return formatUnitValue(n/density,'tbsp');
  }
  if(f==='g'&&t==='tsp'){
    const density=densityValue(key,'tsp',r); if(density)return formatUnitValue(n/density,'tsp');
  }
  if(f==='tbsp'&&t==='g'){
    const density=densityValue(key,'tbsp',r); if(density)return formatConverted(n*density,'g');
  }
  if(f==='tsp'&&t==='g'){
    const density=densityValue(key,'tsp',r); if(density)return formatConverted(n*density,'g');
  }
  if(f==='g'&&t==='ml'){
    if(key==='10% cream'||key==='half & half / 10% cream')return formatUnitValue(n/1.01,'ml');
    if(key==='sesame oil')return formatUnitValue(n/0.92,'ml');
  }
  if(f==='ml'&&t==='g'){
    const density=densityValue(key,'ml'); if(density)return formatConverted(n*density,'g');
    if(key==='10% cream'||key==='half & half / 10% cream')return formatUnitValue(n*1.01,'g');
    if(key==='sesame oil')return formatUnitValue(n*0.92,'g');
  }
  if(f==='cup'&&t==='ml')return formatUnitValue(n*240,'ml');
  if(f==='lb'&&t==='g')return formatUnitValue(n*453.592,'g');
  if(f==='oz'&&t==='g')return formatUnitValue(n*28.3495,'g');
  if(f==='tbsp'&&t==='tsp')return formatUnitValue(n*3,'tsp');
  if(f==='tsp'&&t==='tbsp')return formatUnitValue(n/3,'tbsp');
  if(f==='tbsp'&&t==='ml')return formatConverted(n*14.7868,'ml');
  if(f==='tsp'&&t==='ml')return formatConverted(n*4.92892,'ml');
  if(f==='ml'&&t==='tbsp')return formatUnitValue(n/14.7868,'tbsp');
  if(f==='tbsp'&&t==='cup')return formatTargetValue(n/16,'cup',r);
  if(f==='tsp'&&t==='cup')return formatUnitValue(n/48,'cup');
  if(f==='cup'&&t==='tbsp')return formatUnitValue(n*16,'tbsp');
  if(f==='cup'&&t==='tsp')return formatUnitValue(n*48,'tsp');
  if(f==='cup'&&t==='fl oz')return formatUnitValue(n*8,'fl oz');
  if(f==='g'&&t==='oz')return formatUnitValue(n/28.3495,'oz');
  if(f==='ml'&&t==='fl oz')return formatUnitValue(n/29.5735,'fl oz');
  return formatUnitValue(n,to);
}
function inferIngredientFromText(text,pos,context='',allowBefore=true,r=null){
  const source=String(text||'');
  const after=source.slice(pos,pos+90).toLowerCase();
  const before=source.slice(Math.max(0,pos-90),pos).toLowerCase();
  const afterSegment=after.split(/[,;]/,1)[0];
  const ingredientAfter=afterSegment.replace(/^\s*(?:\d+\s+\d+\/\d+|\d+\/\d+|\d+(?:\.\d+)?)(?:\s*[–-]\s*(?:\d+\s+\d+\/\d+|\d+\/\d+|\d+(?:\.\d+)?))?\s*(?:g|kg|ml|l|oz|ounces?|lbs?|pounds?|tsp|teaspoons?|tbsp|tablespoons?|cups?|cup|large\s+eggs?|eggs?)\s*/i,'');
  const normalizedAfter=normalizeQuantityIngredient(ingredientAfter);
  const normalizedAfterCanonical=normalizeQuantityIngredient(ingredientKey(ingredientAfter));
  const normalizedBefore=normalizeQuantityIngredient(before);
  const contextText=normalizeQuantityIngredient(context);
  if(contextText.includes('orange molasses syrup')){const orangeCandidates=Object.keys(orangeSyrupIngredients).sort((a,b)=>b.length-a.length);const orangeMatch=orangeCandidates.find(k=>normalizedAfter.includes(normalizeQuantityIngredient(k))||normalizedBefore.includes(normalizeQuantityIngredient(k)));if(orangeMatch)return orangeMatch;}
  if(!r){const legacyCandidates=Object.keys({...unitIngredientMap.metric,...unitIngredientMap.imperial}).map(k=>({key:k,normalized:normalizeQuantityIngredient(k)})).sort((a,b)=>b.normalized.length-a.normalized.length);const legacyAfter=legacyCandidates.find(x=>normalizedAfter.includes(x.normalized));if(legacyAfter)return legacyAfter.key;if(normalizedAfter.includes('sweet potato'))return 'cooked sweet potato';if(allowBefore)return legacyCandidates.find(x=>normalizedBefore.includes(x.normalized))?.key||'';return '';}
  const overrideKeys=Object.values(r?.unitOverrides||{}).flatMap(x=>Object.keys(x||{}));
  const recipeItems=(r?.ingredients||[]).map(x=>typeof x==='object'?x.item:'').filter(Boolean);
  const recipeKeys=recipeItems.map(x=>ingredientKey(x));
  const candidates=Array.from(new Set([...Object.keys({...unitIngredientMap.metric,...unitIngredientMap.imperial}),...overrideKeys,...recipeItems,...recipeKeys])).map(k=>({key:k,normalized:normalizeQuantityIngredient(k),canonical:normalizeQuantityIngredient(ingredientKey(k))})).filter(x=>x.normalized||x.canonical).sort((a,b)=>Math.max(b.normalized.length,b.canonical.length)-Math.max(a.normalized.length,a.canonical.length));
  const recipePhraseMatch=recipeItems.map(raw=>({raw,n:normalizeQuantityIngredient(raw)})).filter(x=>x.n).sort((a,b)=>b.n.length-a.n.length).find(x=>{
    const words=x.n.split(' ');
    const variants=[x.n,words.slice(0,3).join(' '),words.slice(0,2).join(' ')].filter(v=>v.length>=8);
    return variants.some(v=>normalizedAfter.includes(v));
  });
  if(recipePhraseMatch)return recipePhraseMatch.raw;
  const phraseMatch=candidates.filter(x=>x.normalized&&normalizedAfter.includes(x.normalized)||x.canonical&&normalizedAfterCanonical.includes(x.canonical)).sort((a,b)=>Math.max(b.normalized.length,b.canonical.length)-Math.max(a.normalized.length,a.canonical.length))[0];
  if(phraseMatch)return phraseMatch.key;
  const recipeWordMatch=recipeItems.find(raw=>{const k=ingredientKey(raw);return k&&normalizedAfter&&normalizedAfter.includes(k.split(' ').slice(-1)[0])});
  if(recipeWordMatch)return recipeWordMatch;
  const afterMatch=candidates.find(x=>normalizedAfter.includes(x.normalized)||(x.canonical&&(normalizedAfterCanonical.includes(x.canonical)||x.canonical===normalizedAfter||x.canonical.endsWith(' '+normalizedAfter))));
  if(afterMatch)return afterMatch.key;
  if(normalizedAfter.includes('sweet potato'))return 'cooked sweet potato';
  if(allowBefore){
    if(normalizedBefore.includes('sweet potato'))return 'cooked sweet potato';
    const recentBefore=normalizedBefore.slice(-24);
    const beforeMatch=candidates.find(x=>x.normalized&&recentBefore.endsWith(x.normalized));
    if(beforeMatch)return beforeMatch.key;
  }
  return '';
}
function format(n,u){return formatUnitValue(n,u)}
function formatQuantity(n,u){return formatUnitValue(n,u)}
function convert(amount,unit,mode,item='',context='',r=null){
  const target=desiredUnit(item,mode,unit,context,r);
  if(target)return convertToUnit(amount,unit,target,item,context,r);
  const u=String(unit||'').toLowerCase();
  if(!u)return format(amount,'');
  if(mode==='metric'){
    if(['g','kg','ml','l'].includes(u))return format(amount,unit);
    if(['oz','ounce','ounces'].includes(u))return format(amount*28.3495,'g');
    if(['lb','lbs','pound','pounds'].includes(u))return format(amount*453.592,'g');
    if(['tsp','teaspoon','teaspoons'].includes(u))return format(amount*4.92892,'ml');
    if(['tbsp','tablespoon','tablespoons'].includes(u))return format(amount*14.7868,'ml');
    if(['c','cup','cups'].includes(u))return format(amount*236.588,'ml');
    return format(amount,unit);
  }
  if(u==='g')return format(amount/28.3495,'oz');
  if(u==='kg')return format(amount*2.20462,'lb');
  if(u==='ml')return formatCupValue(amount/236.588,false);
  if(['c','cup','cups'].includes(u))return format(amount*8,'fl oz');
  if(['tbsp','tablespoon','tablespoons'].includes(u))return format(amount,'tbsp');
  if(['tsp','teaspoon','teaspoons'].includes(u))return format(amount,'tsp');
  return format(amount,unit);
}
function renderIngredients(r,scale=1,unit='metric'){
  const list=document.getElementById('ingredientsList');
  if(!list)return;
  let currentGroup='';
  list.innerHTML=(r.ingredients||[]).map(x=>{
    if(x&&typeof x==='object'&&x.hideFromIngredients)return '';
    if(typeof x==='string')return `<li><label class="ingredient-check"><input type="checkbox"><span>${esc(x)}</span></label></li>`;
    if(x.group){currentGroup=String(x.group);return `<li><span class="group"><b>${esc(x.group)}</b>${x.usualSlug?`<span class="usual-reference">One of our usuals: <a href="${href('recipes/recipe.html',{slug:x.usualSlug})}">${esc(x.usualLabel||x.usualSlug)}</a></span>`:''}</span></li>`;}
    const item=String(x.item??'').trim();
    const hasRange=x.minAmount!==undefined&&x.maxAmount!==undefined;
    const hasAmount=x.amount!==undefined&&x.amount!==null&&x.amount!=='';
    let v='';
    if(hasRange){
      const min=applyScaleMinimum(Number(x.minAmount)*scale,x.item,x.unit,r),max=applyScaleMinimum(Number(x.maxAmount)*scale,x.item,x.unit,r);
      if(rangeCompact(x,unit)&&unit!=='imperial'){
        v=formatCompactRange(min,max,x.unit,x.unit,r);
      }else if(unit==='imperial'&&rangeCompact(x,unit)&&x.imperialMinAmount!==undefined&&x.imperialMaxAmount!==undefined){
        v=formatCompactRange(Number(x.imperialMinAmount)*scale,Number(x.imperialMaxAmount)*scale,x.imperialMinUnit||x.unit,x.imperialMaxUnit||x.unit,r);
      }else {
        const target=desiredUnit(item,unit,x.unit,currentGroup,r);
        if(target){
          v=rangeCompact(x,unit)?formatCompactTextRange(convertToUnit(min,x.unit,target,item,currentGroup,r),convertToUnit(max,x.unit,target,item,currentGroup,r)):`${convertToUnit(min,x.unit,target,item,currentGroup,r)}–${convertToUnit(max,x.unit,target,item,currentGroup,r)}`;
        }else if(unit==='imperial'&&x.imperialMinAmount!==undefined&&x.imperialMaxAmount!==undefined){
          v=`${formatQuantity(Number(x.imperialMinAmount)*scale,x.imperialMinUnit||x.unit)}–${formatQuantity(Number(x.imperialMaxAmount)*scale,x.imperialMaxUnit||x.unit)}`;
        }else if(unit==='imperial'){
          v=`${convert(min,x.unit,'imperial',item,currentGroup)}–${convert(max,x.unit,'imperial',item,currentGroup)}`;
        }else{
          v=`${formatQuantity(min,x.unit)}–${formatQuantity(max,x.unit)}`;
        }
      }
    }else if(hasAmount){
      if(unit==='imperial'&&x.imperialMinAmount!==undefined&&x.imperialMaxAmount!==undefined){const min=applyScaleMinimum(Number(x.imperialMinAmount)*scale,item,x.imperialMinUnit||x.unit,r),max=applyScaleMinimum(Number(x.imperialMaxAmount)*scale,item,x.imperialMaxUnit||x.unit,r);v=rangeCompact(x,unit)?formatCompactRange(min,max,x.imperialMinUnit||x.unit,x.imperialMaxUnit||x.unit,r):`${formatTargetValue(min,x.imperialMinUnit||x.unit,r)}–${formatTargetValue(max,x.imperialMaxUnit||x.unit,r)}`;}
      else if(unit==='imperial'&&x.imperialAmount!==undefined&&x.imperialAmount!==null&&x.imperialAmount!==''){const amount=applyScaleMinimum(Number(x.imperialAmount)*scale,item,x.imperialUnit,r);v=formatTargetValue(amount,x.imperialUnit,r);}
      else {
        const scaledAmount=applyScaleMinimum(Number(x.amount)*scale,item,x.unit,r);
        const target=desiredUnit(item,unit,x.unit,currentGroup,r);
        if(target)v=convertToUnit(scaledAmount,x.unit,target,item,currentGroup,r);
        else v=convert(scaledAmount,x.unit,unit,item,currentGroup,r);
      }
    }
    if(hasRange)v=compactSameUnit(v);
    return `<li><label class="ingredient-check"><input type="checkbox"><span>${v?`<strong class="ingredient-quantity">${esc(v)}</strong> `:''}${esc(fixPlurals(`${v} ${scaleApprox(item,scale)}`).slice(String(v).length+1))}</span></label>${ingredientInfoLink(r,item,!x.hideIngredientInfo)}</li>`
  }).join('')
}
function renderInstructionSteps(r,scale,unit){document.querySelectorAll('.step').forEach((stepEl,i)=>{const s=r.steps?.[i];if(!s)return;const paragraphs=Array.isArray(s.paragraphs)?s.paragraphs:(s.text||'').split(/\n\s*\n/).map(x=>x.trim()).filter(Boolean);const copy=stepEl.querySelector('.step-copy');if(copy)copy.innerHTML=instructionBlock(paragraphs,r,scale,unit,s.title||'')+(s.stepNote?instructionParagraph(s.stepNote,true,r,scale,unit,false,s.title||''):'');});}
function bindRecipe(r){let scale=1,unit=store.get('mr-unit')==='metric'?'metric':'imperial';window.__recipeScale=scale;window.__recipeUnit=unit;document.querySelectorAll('#unitToggle button').forEach(x=>x.setAttribute('aria-pressed',String(x.dataset.unit===unit)));renderIngredients(r,scale,unit);renderInstructionSteps(r,scale,unit);document.querySelectorAll('#unitToggle button').forEach(b=>b.onclick=()=>{unit=b.dataset.unit;window.__recipeUnit=unit;store.set('mr-unit',unit);document.querySelectorAll('#unitToggle button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));renderIngredients(r,scale,unit);renderInstructionSteps(r,scale,unit)});const scaleInput=document.getElementById('recipeScale');const updateScale=()=>{const value=Number(scaleInput.value);if(!Number.isFinite(value)||value<=0)return;scale=value;window.__recipeScale=scale;renderIngredients(r,scale,unit);renderInstructionSteps(r,scale,unit)};scaleInput?.addEventListener('input',updateScale);document.querySelectorAll('[data-scale-step]').forEach(b=>b.addEventListener('click',()=>{const current=Number(scaleInput.value);const base=Number.isFinite(current)&&current>0?current:1;const next=Math.max(0.01,Number((base+(b.dataset.scaleStep==='up'?0.5:-0.5)).toFixed(2)));scaleInput.value=String(next);updateScale();}));document.querySelector('[data-jump]')?.addEventListener('click',()=>document.getElementById('the-recipe')?.scrollIntoView({behavior:'smooth'}));document.getElementById('shareRecipe')?.addEventListener('click',async()=>{const data={title:r.title,url:location.href};try{if(navigator.share)await navigator.share(data);else{await navigator.clipboard.writeText(location.href);alert('Recipe link copied.')}}catch(e){}});document.getElementById('printRecipe')?.addEventListener('click',()=>window.print());bindReviews(r);bindCook();}
function bindReviews(r){let rating=0;document.querySelectorAll('[data-star]').forEach(b=>b.onclick=()=>{rating=Number(b.dataset.star);document.querySelectorAll('[data-star]').forEach(x=>{const on=Number(x.dataset.star)<=rating;x.setAttribute('aria-pressed',String(on));x.textContent=on?'★':'☆'})});(()=>{const fb=document.getElementById('favRecipe');if(fb){const paint=()=>{const on=getFavs().includes(r.slug);fb.setAttribute('aria-pressed',String(on));fb.textContent=on?'♥ Favorited':'♡ Favorite';document.getElementById('favBtn')?.classList.toggle('has-favs',getFavs().length>0)};paint();fb.addEventListener('click',()=>{const f=getFavs();setFavs(f.includes(r.slug)?f.filter(x=>x!==r.slug):f.concat(r.slug));paint()})}})();document.getElementById('submitReview')?.addEventListener('click',()=>{if(!rating){document.getElementById('reviewStatus').textContent='Please choose a star rating.';return}const key='mr-reviews-'+r.slug;const arr=JSON.parse(localStorage.getItem(key)||'[]');arr.push({rating,name:document.getElementById('reviewName').value.trim(),comment:document.getElementById('reviewComment').value.trim(),date:new Date().toISOString()});localStorage.setItem(key,JSON.stringify(arr));document.getElementById('reviewName').value='';document.getElementById('reviewComment').value='';rating=0;document.querySelectorAll('[data-star]').forEach(x=>{x.setAttribute('aria-pressed','false');x.textContent='☆'});showReviews(r);document.getElementById('reviewStatus').textContent='Saved on this device only.'});showReviews(r)}
function showReviews(r){const box=document.getElementById('reviewList');if(!box)return;const arr=JSON.parse(localStorage.getItem('mr-reviews-'+r.slug)||'[]');box.innerHTML=arr.map(x=>`<div class="review-item"><div class="review-stars">${'★'.repeat(x.rating)}${'☆'.repeat(5-x.rating)}</div>${x.name?`<b>${esc(x.name)}</b>`:''}${x.comment?`<p>${esc(x.comment)}</p>`:''}</div>`).join('')}
let wakeLock=null;async function setWakeLock(on){if(!on){if(wakeLock){try{await wakeLock.release()}catch(e){}wakeLock=null}return}if(!('wakeLock' in navigator))return;try{wakeLock=await navigator.wakeLock.request('screen')}catch(e){wakeLock=null}}
function bindCook(){const b=document.getElementById('cookOpen');if(!b)return;const update=()=>{b.textContent=b.getAttribute('aria-pressed')==='true'?'NO SLEEP':'Cook mode';};b.onclick=async()=>{const on=b.getAttribute('aria-pressed')!=='true';b.setAttribute('aria-pressed',String(on));await setWakeLock(on);update()};document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'&&b.getAttribute('aria-pressed')==='true')setWakeLock(true)});update()}
function about(){setMeta('About','About MIDNIGHT RECIPES and the person who cooks after dark.');setCanonicalFromLocation();const imgs=window.MIDNIGHT_SITE?.aboutImages||{};const aboutImg=(src,alt)=>src?`<div class="about-photo"><img class="photo" loading="lazy" decoding="async" src="${esc(root+src)}" alt="${esc(alt)}" onerror="this.closest('.about-photo').remove()"></div>`:'';app.innerHTML=`<div class="wrap"><h1 class="h2">${star()}About</h1><section class="about-block"><h3 class="h3">ABOUT ME</h3><div class="about-grid">${aboutImg(imgs.aboutMe,'About me')}<div class="about-text"><p class="body-copy">Hi, my name is Mitsuka! I cook after dark.</p><p class="body-copy">I was born and raised in Japan and moved to Canada in 2023. I currently live in Toronto, where so many different cultures and food traditions come together.</p><p class="body-copy">I love cooking and trying new food because I believe you can learn about a place — its traditions, history, and culture — through what people eat.</p><p class="body-copy">I also believe food has the power to make someone’s day, or even their life, a little better. You don’t need special skills or a big gesture. Sometimes simply making something for someone is enough to show them that you care.</p><p class="body-copy">My family, who live far away, often worry about me and ask, “Are you eating well?” instead of “How are you?”</p><p class="body-copy">Food is a love language — a simple way of showing someone that you care. Cooking is how you speak that language.</p><p class="body-copy">Some recipes on this website are my own experiments and interpretations. But whether I’m recreating something I ate at a restaurant, trying to capture a flavor from a childhood memory, or creating something entirely new, I never want to lose sight of the people behind the food.</p><p class="body-copy">I have great respect for the cooks, families, and food traditions that create flavours people remember. Every recipe has a story, and I want to honour those stories while sharing my own.</p></div></div></section><section class="about-block about-block-reverse about-recipes-section"><h3 class="h3">ABOUT MIDNIGHT RECIPES</h3><div class="about-grid">${aboutImg(imgs.aboutRecipes,'About MIDNIGHT RECIPES')}<div class="about-text"><p class="body-copy">There’s something about cooking at midnight.</p><p class="body-copy">When the day is finally over and I have a quiet moment to myself, I often find myself drawn to the kitchen. Midnight feels like a special time — the world slows down, and the kitchen becomes a calm, private space that feels a little different from any other time of day.</p><p class="body-copy">And somehow, the things I want to make are rarely random.</p><p class="body-copy">They’re usually foods that have stayed in my memory — something I ate once and never forgot, something that made me wonder:<br><strong>“How’d they make that?”</strong></p><p class="body-copy">I find food that makes me curious, recreate it in my kitchen, and share the recipe and the story behind it.</p><p class="body-copy">This website is a collection of those discoveries — from restaurants, movies, books, grocery stores, travels, family recipes, traditions, memories, and anywhere else good food can be found.</p><p class="body-copy">But Midnight Recipes is about more than simply recreating a dish. It’s about making these recipes work in a real kitchen.</p><p class="body-copy">Because these recipes often begin late at night, I don’t always have every ingredient on hand. That’s why some recipes include an <strong>Ingredient File</strong> — a quick guide to interesting or unfamiliar ingredients, with practical information such as where to find them and what to use when you can’t.</p><p class="body-copy">You’ll also find <strong>Midnight Notes</strong> — the things I discover only by actually making the recipe. What I changed, what worked, what didn’t, and the little tricks that made the dish better.</p><p class="body-copy">And because cooking at midnight doesn’t always mean eating at midnight, <strong>The Fine Print</strong> covers what happens after the cooking is done: when the food is best eaten, whether it can be made ahead, how to store or freeze it, and how to reheat and serve it.</p><p class="body-copy">I want these recipes to work with real ingredients, real kitchens, and real life — even when you’re cooking late at night with whatever happens to be in the fridge.</p><p class="body-copy">I hope something you find here makes you want to cook for someone you love, share a meal, and spread a little joy★彡</p></div></div></section></div>`}
function contact(){setMeta('Contact','Questions, corrections or collaborations — get in touch with MIDNIGHT RECIPES.');setCanonicalFromLocation();app.innerHTML=`<div class="wrap"><section class="section contact-section"><h1 class="h2">${star()}Contact</h1><div class="contact-copy"><p class="body-copy">Have a question about a recipe, spotted something that needs correcting, or want to work together?</p><p class="body-copy">We would love to hear from you. You can reach us by email for recipe questions, corrections, collaborations, or simply to say hello.</p></div><div class="contact-signoff"><p class="contact-star">★彡</p><p class="body-copy contact-email"><a href="mailto:from.midnightkitchen@gmail.com">from.midnightkitchen@gmail.com</a></p></div></section></div>`}
function usuals(){const q=new URLSearchParams(location.search).get('category')||'';if(q){listPage(cutieText(q),filterRecipes('usuals',q));return}setMeta('The Usuals','The sauces, bases, toppings & little things we keep coming back to.');setCanonicalFromLocation();app.innerHTML=`<div class="wrap"><h1 class="h2">${star()}The Usuals</h1><p class="body-copy">The sauces, bases, toppings & little things we keep coming back to.</p><p class="body-copy">The things that quietly show up again and again in our kitchen. Recipes within recipes — the sauces, crusts, bases, and little extras that make everything else easier.</p><section class="section"><div class="usuals-categories">${usualsCategories.map(c=>`<a class="usuals-category" href="${href('pages/usuals.html',{category:c})}"><span>${esc(c)}</span></a>`).join('')}</div></section></div>`}
function usual(){usuals()}
function activeCuisineTree(){const out={};Object.entries(cuisineGroups).forEach(([group,vals])=>{const present=vals.filter(v=>recipes.some(r=>cuisineValues(r).some(c=>String(c).toLowerCase()===v.toLowerCase())));if(present.length)out[group]=present});return out}
function setupMenu(){const src=document.getElementById('src'),cui=document.getElementById('cui'),course=document.getElementById('course');if(src)src.innerHTML=sources.map(v=>`<a href="${href('pages/source.html',{value:v})}">${esc(v)}</a>`).join('');if(course)course.innerHTML=courses.map(v=>`<a href="${href('pages/meal.html',{value:v})}">${esc(v)}</a>`).join('');if(cui)cui.innerHTML=Object.entries(activeCuisineTree()).map(([group,vals])=>`<div class="menu-group"><button class="menu-group-title acc" data-acc="cuisine-${esc(group).replace(/[^a-z0-9]+/gi,'-')}">${esc(group)}</button><div class="sub menu-group-sub" id="cuisine-${esc(group).replace(/[^a-z0-9]+/gi,'-')}">${vals.map(v=>`<a href="${href('pages/cuisine.html',{value:v})}">${esc(v)}</a>`).join('')}</div></div>`).join('');document.querySelectorAll('[data-acc]').forEach(b=>b.onclick=()=>{const s=document.getElementById(b.dataset.acc);if(!s)return;const open=s.classList.toggle('open');b.setAttribute('aria-expanded',String(open))});document.querySelectorAll('[data-go="all"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();location.href=href('recipes/index.html')}));document.querySelector('[data-recipes-toggle]')?.addEventListener('click',e=>{const s=document.getElementById('recipesSub');const open=s.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',String(open))})}
function setupOverlay(){const menu=document.getElementById('menuOverlay'),search=document.getElementById('searchOverlay');document.getElementById('menuBtn').onclick=()=>{menu.dataset.open='true'};document.getElementById('searchBtn').onclick=()=>{const open=search.dataset.open==='true';search.dataset.open=String(!open);const btn=document.getElementById('searchBtn');btn.setAttribute('aria-label',open?'Open search':'Close search');if(!open)document.getElementById('searchInput').focus()};[menu,search].forEach(o=>o.addEventListener('click',e=>{if(e.target===o)o.dataset.open='false'}));document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.dataset.open='false';search.dataset.open='false'}});document.querySelectorAll('[data-go]').forEach(a=>a.addEventListener('click',e=>{const g=a.dataset.go;if(!['home','all','usuals','about','contact'].includes(g))return;e.preventDefault();const target={home:'index.html',all:'recipes/index.html',usuals:'pages/usuals.html',about:'pages/about.html',contact:'pages/contact.html'}[g];location.href=href(target)}));document.getElementById('searchInput').addEventListener('input',e=>{const q=e.target.value.trim().toLowerCase();const hits=q?recipes.filter(r=>searchMatches(r,q)):[];document.getElementById('searchResults').innerHTML=q?cards(hits):''})}
function category(){const p=new URLSearchParams(location.search),v=p.get('value')||'';if(page==='source')listPage(cutieText(v)||'By Source',filterRecipes('source',v));if(page==='cuisine')listPage(cutieText(v)||'By Cuisine',filterRecipes('cuisine',v));if(page==='meal')listPage(cutieText(v)||'By Course',filterRecipes('course',v))}
function all(){const q=new URLSearchParams(location.search).get('q')||'';listPage(q?`Recipes: ${q}`:'View All',q?filterRecipes('search',q):recipes.filter(r=>!r.isUsuals))}
async function init(){setupMenu();setupOverlay();try{const res=await fetch(root+'assets/js/image-manifest.json',{cache:'no-store'});if(res.ok)imageManifest=await res.json();}catch(e){imageManifest={}}if(page==='home')top();else if(page==='all')all();else if(page==='latest')listPage('Latest Recipes',recipes.filter(r=>!r.isUsuals));else if(page==='recipe')recipe();else if(['source','cuisine','meal'].includes(page))category();else if(page==='about')about();else if(page==='contact')contact();else if(page==='favorites')favorites();else if(page==='usuals')usuals();else if(page==='usual')usual()}
init();
})();
