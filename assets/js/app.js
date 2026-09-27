(function(){
'use strict';
const recipes=window.MIDNIGHT_RECIPES||[];
const sources=window.MIDNIGHT_SOURCES||[];
const courses=window.MIDNIGHT_COURSES||[];
const cuisineGroups=window.MIDNIGHT_CUISINES||{};
const ingredients=window.MIDNIGHT_INGREDIENTS||[];
const usualsCategories=window.MIDNIGHT_USUALS_CATEGORIES||[];
const depth=Number(document.body.dataset.depth||0), root=depth?'../':'./';
const page=document.body.dataset.page, app=document.getElementById('app');
const slugify=s=>String(s??'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const href=(path,q)=>root+path+(q?('?'+new URLSearchParams(q).toString()):'');
const star=()=>'<svg class="mrstar" aria-hidden="true"><use href="#mrstar"></use></svg>';
const canonicalCourse=r=>r.course||r.meal||'';
const courseValues=r=>Array.isArray(r.categories)?r.categories.filter(Boolean):[canonicalCourse(r)].filter(Boolean);
const courseDisplay=r=>r.courseDisplay||courseValues(r).join(', ');
const ingredientNames=r=>(r.ingredientCategories||[]).concat((r.ingredients||[]).map(x=>x.item||'')).filter(Boolean);
const searchText=r=>[r.title,r.source,r.sourceSecondary,r.cuisine,canonicalCourse(r),(r.categories||[]).join(' '),r.description,(r.ingredients||[]).map(x=>x.item||x.group||'').join(' '),(r.ingredientCategories||[]).join(' '),r.usualsCategory].join(' ').toLowerCase();
function card(r){const src=r.cardImage||r.heroImage;const media=src?`<div class="photo-frame"><img class="photo" src="${esc(root+src)}" alt="${esc(r.title)}" onerror="this.closest('.photo-frame').outerHTML='<div class=\'ph\'></div>'"></div>`:'<div class="ph"></div>';return `<article class="category-card card"><a href="${href('recipes/recipe.html',{slug:r.slug})}">${media}<h3 class="name">${esc(r.title)}</h3></a></article>`}
function cards(list){return list.length?`<div class="category-grid">${list.map(card).join('')}</div>`:'<p class="empty-state">No recipes here yet</p>'}
function sortedAll(){return [...recipes].sort((a,b)=>String(b.dateAdded||'').localeCompare(String(a.dateAdded||'')))}
function sorted(){return sortedAll().filter(r=>!r.isUsuals)}
function filterRecipes(type,value){const v=String(value||'').toLowerCase();if(type==='usuals'){return sortedAll().filter(r=>r.isUsuals&&(!v||String(r.usualsCategory||'').toLowerCase()===v))}if(!v)return sorted();return sorted().filter(r=>{if(type==='source')return String(r.source||'').toLowerCase()===v;if(type==='course')return courseValues(r).some(x=>String(x).toLowerCase()===v);if(type==='cuisine')return String(r.cuisine||'').toLowerCase()===v;if(type==='ingredient')return ingredientNames(r).some(x=>String(x).toLowerCase()===v||String(x).toLowerCase().includes(v));return !r.isUsuals&&searchText(r).includes(v)})}
function top(){const latest=sorted().slice(0,4);app.innerHTML=`<div class="wrap"><section class="section"><h2 class="h2">${star()}Latest Recipes</h2>${cards(latest)}<p class="viewall"><a href="${href('recipes/index.html')}">View all</a></p></section><section class="section"><h2 class="h2">${star()}Where did the idea come from?</h2><p class="filter-subtitle">Browse recipes by what inspired them.</p><div class="sources">${sources.map(s=>{const r=sorted().find(x=>x.source===s);return `<div class="tile"><a href="${href('pages/source.html',{value:s})}">${r&&(r.cardImage||r.heroImage)?`<div class="photo-frame"><img class="photo" src="${esc(root+(r.cardImage||r.heroImage))}" alt="${esc(r.title)}"></div>`:'<div class="ph sm"></div>'}<p class="source-name">${esc(s)}</p></a>${r?`<p class="source-latest"><a href="${href('recipes/recipe.html',{slug:r.slug})}">${esc(r.title)}</a></p>`:'<p class="source-empty">No recipes here yet</p>'}</div>`}).join('')}</div></section><section class="section"><h2 class="h2">${star()}About</h2><div class="about"><div class="ph bowl"></div><div><h3>Food we find. Recipes we recreate. Stories from our midnight kitchen.</h3><p>Hi, my name is Mitsuka. I cook after dark. This is a collection of recipes inspired by restaurants, travels, memories, traditions, and whatever catches my curiosity late at night.</p><p class="more"><a href="${href('pages/about.html')}">Learn more</a></p></div></div></section></div>`}
function listPage(title,list,sub=''){app.innerHTML=`<div class="wrap"><section class="section"><h2 class="h2">${star()}${esc(title)}</h2>${sub?`<p class="filter-subtitle">${esc(sub)}</p>`:''}${cards(list)}</section></div>`}
function recipe(){const slug=new URLSearchParams(location.search).get('slug')||recipes[0]?.slug;const r=recipes.find(x=>String(x.slug||'').toLowerCase()===String(slug||'').toLowerCase())||recipes[0];if(!r){app.innerHTML='<div class="wrap"><p class="empty-state">Recipe not found.</p></div>';return}app.innerHTML=recipeHtml(r);bindRecipe(r)}
function photo(src,alt,cls=''){return src?`<div class="photo-frame ${cls}"><img class="photo" src="${esc(root+src)}" alt="${esc(alt)}" onerror="this.closest('.photo-frame').outerHTML='<div class=\'ph ${cls}\'></div>'"></div>`:''}
function stepPhoto(src,alt){return src?`<div class="photo-frame step-photo-frame"><img class="photo" src="${esc(root+src)}" alt="${esc(alt)}" onerror="const g=this.closest('.step-photos');this.closest('.photo-frame').remove();if(g&&!g.querySelector('img'))g.remove()"></div>`:''}
function stepPhotoMarkup(s,r,i){let list=Array.isArray(s.stepPhotos)?s.stepPhotos.filter(Boolean):[];if(!list.length&&Array.isArray(s.photos))list=s.photos.filter(Boolean);if(!list.length&&Array.isArray(r.stepPhotos?.[i]))list=r.stepPhotos[i].filter(Boolean);if(!list.length&&Array.isArray(r.stepImages?.[i]))list=r.stepImages[i].filter(Boolean);if(!list.length&&s.image)list=[s.image];if(!list.length)return '';const count=list.length;return `<div class="step-photos step-photos-${count}">${list.map((src,n)=>stepPhoto(src,`${r.title} step ${i+1} photo ${n+1}`)).join('')}</div>`}
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
function instructionParagraph(value,isNote=false){const text=String(value??'').trim();const m=text.match(/^\*\*([^*]+):\*\*\s*(.*)$/);if(m)return `<p class="${isNote?'step-note instruction-note':'instruction-note'}"><strong>${esc(m[1])}:</strong> ${richText(m[2])}</p>`;const html=richText(text.replace(/^(?:[-–—]|\d+\.)\s+/,'') );return `<p class="${isNote?'step-note':''}">${html}</p>`}
function normalizeIngredientText(value){return String(value??'').toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9%]+/g,' ').replace(/\bfinely crushed\b|\bfinely minced\b|\bchopped\b|\bminced\b|\bcut into 3 4 cm pieces\b|\bto taste\b|\bfor finishing\b|\bfor finish\b/g,'').replace(/\s+/g,' ').trim()}
function ingredientFileKey(value){const n=normalizeIngredientText(value);if(n.includes('graham cracker'))return 'graham crackers';if(n.includes('dark chocolate'))return 'dark chocolate';if(n.includes('espresso powder'))return 'espresso powder';if(n.includes('unsweetened cocoa powder')||n==='cocoa powder')return 'unsweetened cocoa powder';if(n.includes('3 25 milk')||n.includes('3.25 milk'))return '3.25% milk';if(n.includes('fatty ground pork')||n.includes('ground pork'))return 'ground pork';if(n.includes('fresh red chili'))return 'fresh red chili';if(n==='garlic'||n.includes(' garlic'))return 'garlic';if(n.includes('doubanjiang'))return 'doubanjiang';if(n==='apple'||n==='apples')return 'apple';if(n==='whole milk')return 'whole milk';if(n.includes('35% whipping cream')||n.includes('whipping cream'))return '35% whipping cream';return n}
function ingredientFileAnchorMap(r){const map={};normalizeIngredientFile(r.ingredientFile).groups.forEach(g=>{map[ingredientFileKey(g.name)]=g.name});return map}
function ingredientInfoLink(r,item){const key=ingredientFileKey(item);if(!key)return '';const map=ingredientFileAnchorMap(r);const actual=map[key]||Object.entries(map).find(([k])=>key===k||key.includes(k)||k.includes(key))?.[1];if(!actual)return '';return ` <a class=\"ingredient-info\" href=\"#ingredient-file-${slugify(actual)}\" aria-label=\"Ingredient File: ${esc(actual)}\">ⓘ</a>`}
function ingredientFileMarkup(r,ingredientFile){const groups=ingredientFile.groups;return groups.map(g=>`<div class="ingredient-file-group" id="ingredient-file-${slugify(g.name)}"><div class="ingredient-file-name">${esc(g.name)}</div><div class="ingredient-file-details">${g.items.map(([k,v])=>`<p><strong>${esc(k)}:</strong> ${richText(v)}</p>`).join('')}</div></div>`).join('')}
function recipeHtml(r){
  const ingredientFile=normalizeIngredientFile(r.ingredientFile);
  const file=ingredientFile.items;
  const fileGroups=ingredientFile.groups;
  const isUsual=!!r.isUsuals;
  const scaleOptions=isUsual?['1','2','3']:['0.5','1','2'];
  const foundTitles=recipes.filter(x=>!x.isUsuals&&x.usesUsual===r.slug).map(x=>x.title);
  const foundIn=foundTitles.map(title=>{const found=recipes.find(x=>x.title===title&&!x.isUsuals);return found?`<a href="${href('recipes/recipe.html',{slug:found.slug})}">${esc(title)}</a>`:`<span>${esc(title)}</span>`;}).join('<br>');
  const intro=isUsual?`<section class="usual-intro"><p class="body-copy"><em>${esc(r.description||'')}</em></p>${String(r.usualIntro||'').split(/\n\s*\n/).filter(Boolean).map(x=>`<p class="body-copy">${esc(x)}</p>`).join('')}</section>`:'';
  const statsPan=(isUsual||r.showPan)&&r.stats?.pan?`<br><b>Pan</b>: ${esc(r.stats.pan)}`:'';const statsChill=r.showChill&&r.stats?.chill?`<br><b>Chill</b>: ${esc(r.stats.chill)}`:'';
  return `<div class="recipe-card"><div class="rtop"><div><h1 class="rtitle">${esc(r.title)}</h1><div class="meta-line"><span>${r.timeStamp?`📍 ${esc(r.timeStamp)}<span> · TORONTO</span>`:'The Usuals'}</span></div><div class="tags">${(r.tags||[]).map(t=>`<a href="${href('recipes/index.html',{q:t})}">#${esc(t)}</a>`).join('')}</div><p class="facts">${isUsual?`<b>The Usuals</b>: <a href="${href('pages/usuals.html',{category:r.usualsCategory})}">${esc(r.usualsCategory)}</a>`:`<b>Source</b>: <a href="${categoryLink('source',r.source)}">${esc(r.source)}</a>${r.sourceSecondary?` / <a href="${categoryLink('source',r.sourceSecondary)}">${esc(r.sourceSecondary)}</a>`:''}${r.original?`<br><b>Original</b>: ${esc(r.original)}`:''}${r.dish?`<br><b>Dish</b>: ${esc(r.dish)}`:''}<br><b>Cuisine</b>: <a href="${categoryLink('cuisine',r.cuisine)}">${esc(r.cuisine)}</a><br><b>Course</b>: <a href="${categoryLink('course',canonicalCourse(r))}">${esc(courseDisplay(r))}</a>`}</p><div class="recipe-jump-top"><button class="btn" data-jump="the-recipe">Jump To Recipe</button></div></div>${photo(r.heroImage,r.title)}</div>${intro}${!isUsual&&r.story?`<section><h2 class="h3">THE STORY</h2><p class="body-copy">${richText(r.story)}</p></section>`:''}${(ingredientFile.name||file.length||fileGroups.length)?`<section id="ingredient-file-section"><h2 class="h3">INGREDIENT FILE</h2><div class="ingredient-file">${ingredientFileMarkup(r,ingredientFile)}${ingredientFile.name?`<div class="ingredient-file-name">${esc(ingredientFile.name)}</div>`:''}${file.length?`<div class="ingredient-file-details">${file.map(([k,v])=>`<p><strong>${esc(k)}:</strong> ${esc(v)}</p>`).join('')}</div>`:''}</div></section>`:''}<section id="the-recipe"><h2 class="h3">THE RECIPE</h2><div class="recipe-inner"><div>${photo(r.recipeImage||r.cardImage||r.heroImage,r.title)}<h3 class="rname">${esc(r.recipeTitle||r.title)}</h3><p class="stats"><b>Prep</b>: ${esc(r.stats?.prep||'—')} <b>Cook</b>: ${esc(r.stats?.cook||'—')}<br><b>Total</b>: ${esc(r.stats?.total||'—')}${statsChill}<br><b>Serves</b>: ${esc(r.stats?.serves||'—')}${statsPan}<br><b>Quiet level</b>: ${esc(r.stats?.quest||'—')}</p><div class="recipe-actions recipe-action-row"><button class="btn" id="cookOpen" aria-pressed="false">Cook Mode</button><button class="btn" id="shareRecipe">Share</button><button class="btn" id="printRecipe">Print</button></div><h4 class="block-title" style="margin-top:34px">INGREDIENTS</h4><div class="toggle-row" id="unitToggle"><button data-unit="metric" aria-pressed="true">Metric</button><button data-unit="imperial" aria-pressed="false">US customary</button></div><div class="toggle-row small" id="scaleToggle">${scaleOptions.map(v=>`<button data-scale="${v}"${v==='1'?` aria-pressed="true"`:''}>${v==='1'?'×1':`×${v}`}</button>`).join('')}</div><ul class="ing" id="ingredientsList"></ul>${fileGroups.length?`<p class="ingredient-file-guide">ⓘ <a href="#ingredient-file-section">Click for substitutions &amp; ingredient tips</a></p>`:''}</div><div><h4 class="block-title">INSTRUCTIONS</h4>${(r.steps||[]).map((s,i)=>{const label=s.number&&s.title?`${s.number} — ${s.title}`:(s.label||'');const paragraphs=Array.isArray(s.paragraphs)?s.paragraphs:(s.text||'').split(/\n\s*\n/).map(x=>x.trim()).filter(Boolean);return `<div class="step"><div class="step-head"><span>${esc(label)}</span><span>${esc(s.clock||'')}</span></div><div class="step-copy">${paragraphs.map(p=>instructionParagraph(p)).join('')}${s.stepNote?instructionParagraph(s.stepNote,true):''}</div>${stepPhotoMarkup(s,r,i)}</div>`}).join('')}</div></div></section>${r.notes?.length?`<section><h2 class="h3">MIDNIGHT NOTES</h2><p class="note-sub">How I made it work in my kitchen.</p><ul class="notes-list">${r.notes.map(n=>`<li><b>${esc(n[0])}</b>: ${richText(n[1])}</li>`).join('')}</ul></section>`:''}${r.foundIn?.length?`<section class="found-in"><h2 class="h3">FOUND IN…</h2><p class="body-copy">${foundIn}</p></section>`:''}${r.finePrint?`<section><h2 class="h3">THE FINE PRINT</h2><p class="note-sub">Tonight or tomorrow?</p><p class="body-copy">${Object.entries(r.finePrint).map(([k,v])=>`<b>${esc(k)}</b>: ${richText(v)}<br>`).join('')}</p></section>`:''}<footer class="recipe-footer"><p><b>Inspired by</b>: ${esc(r.footerInspiredBy||'')|| (isUsual?`<a href="${href('pages/usuals.html',{category:r.usualsCategory})}">${esc(r.usualsCategory)}</a>`:`<a href="${categoryLink('source',r.source)}">${esc(r.source)}</a>`)}</p><p><b>Cuisine</b>: ${esc(r.footerCuisine||r.cuisine)}</p><p><b>Course</b>: ${esc(r.footerCourse||courseDisplay(r))}</p><p><b>Main ingredients</b>: ${(r.footerMainIngredients||r.mainIngredients||[]).map((x,i)=>`<a href="${href('recipes/index.html',{q:x})}">${esc(x)}</a>${i<(r.footerMainIngredients||r.mainIngredients||[]).length-1?' · ':''}`).join('')}</p>${r.footerRating?`<p class="footer-rating">${esc(r.footerRating)}</p>`:''}<div class="review-form"><h4 class="block-title">How did you like it?</h4><div class="star-picker" id="starPicker" aria-label="Choose a rating">${[1,2,3,4,5].map(n=>`<button type="button" data-star="${n}" aria-label="${n} stars" aria-pressed="false">☆</button>`).join('')}</div><input id="reviewName" maxlength="80" placeholder="Name (optional)"><textarea id="reviewComment" maxlength="1000" placeholder="Comment (optional)"></textarea><button class="btn" id="submitReview">Submit</button><p class="review-status" id="reviewStatus">Reviews are saved on this device only until a shared backend is connected.</p><div id="reviewList" class="review-list"></div></div></footer></div>`
}
function format(n,u){
  if(!u)return String(Math.round(n*100)/100);
  let v=n;
  if(['g','ml'].includes(String(u).toLowerCase()))v=Math.round(n);
  else v=Math.round(n*100)/100;
  return `${v} ${u}`
}
function formatQuantity(n,u){
  if(!u)return String(Math.round(n*100)/100);
  const eps=0.001;
  const common=[[0.25,'¼'],[1/3,'⅓'],[0.5,'½'],[2/3,'⅔'],[0.75,'¾']];
  const near=common.find(([v])=>Math.abs(n-v)<eps);
  if(near)return `${near[1]} ${u}`;
  if(Math.abs(n-Math.round(n))<eps)return `${Math.round(n)} ${u}`;
  return `${Math.round(n*100)/100} ${u}`
}
function convert(amount,unit,mode){
  const u=String(unit||'').toLowerCase();
  if(!u)return format(amount,'');
  if(mode==='metric'){
    if(['g','kg','ml','l'].includes(u))return format(amount,unit);
    if(['oz','ounce','ounces'].includes(u))return format(amount*28.3495,'g');
    if(['lb','lbs','pound','pounds'].includes(u))return format(amount*453.592,'g');
    if(['tsp','teaspoon','teaspoons'].includes(u))return format(amount*4.92892,'ml');
    if(['tbsp','tablespoon','tablespoons'].includes(u))return format(amount*14.7868,'ml');
    if(['c','cup','cups'].includes(u))return format(amount*236.588,'ml');
    if(['fl oz','floz','fluid ounce','fluid ounces'].includes(u))return format(amount*29.5735,'ml');
    if(u==='°f'||u==='fahrenheit')return `${Math.round((amount-32)*5/9)}°C`;
    return format(amount,unit)
  }
  if(u==='g')return format(amount/28.3495,'oz');
  if(u==='kg')return format(amount*2.20462,'lb');
  if(u==='ml')return volume(amount);
  if(u==='l')return volume(amount*1000);
  if(['c','cup','cups'].includes(u))return format(amount*8,'fl oz');
  if(['tbsp','tablespoon','tablespoons'].includes(u))return format(amount,'tbsp');
  if(['tsp','teaspoon','teaspoons'].includes(u))return format(amount,'tsp');
  if(u==='°c'||u==='celsius')return `${Math.round(amount*9/5+32)}°F`;
  if(u==='°f'||u==='fahrenheit')return `${Math.round((amount-32)*5/9)}°C`;
  return format(amount,unit)
}
function volume(ml){
  const cups=ml/236.588;
  if(cups>=.25&&Math.abs(cups-Math.round(cups))<.06)return `${Math.round(cups)} cup${Math.round(cups)===1?'':'s'}`;
  const tbsp=ml/14.7868;
  if(Math.abs(tbsp-Math.round(tbsp))<.08)return `${Math.round(tbsp)} tbsp`;
  const tsp=ml/4.92892;
  const common=[[0.25,'¼'],[1/3,'⅓'],[0.5,'½'],[2/3,'⅔'],[0.75,'¾']];
  const near=common.find(([v])=>Math.abs(tsp-v)<.03);
  if(near)return `${near[1]} tsp`;
  if(tsp>=.8&&tsp<3&&Math.abs(tsp-Math.round(tsp))<.08)return `${Math.round(tsp)} tsp`;
  const oz=ml/29.5735;
  return oz<0.1?'< 0.1 fl oz':`${Math.round(oz*10)/10} fl oz`
}
function renderIngredients(r,scale=1,unit='metric'){
  const list=document.getElementById('ingredientsList');
  if(!list)return;
  list.innerHTML=(r.ingredients||[]).map(x=>{
    if(typeof x==='string')return `<li><input type="checkbox"><span>${esc(x)}</span></li>`;
    if(x.group)return `<li><span class="group"><b>${esc(x.group)}</b>${x.usualSlug?` — <a href="${href('recipes/recipe.html',{slug:x.usualSlug})}">${esc(x.usualLabel||x.usualSlug)}</a>`:''}</span></li>`;
    const hasRange=x.minAmount!==undefined&&x.maxAmount!==undefined;
    const hasAmount=x.amount!==undefined&&x.amount!==null&&x.amount!=='';
    let v='';
    if(hasRange){
      const min=Number(x.minAmount)*scale,max=Number(x.maxAmount)*scale;
      if(unit==='imperial'){
        if(x.imperialMinAmount!==undefined&&x.imperialMaxAmount!==undefined){
          v=`${formatQuantity(Number(x.imperialMinAmount)*scale,x.imperialMinUnit||x.unit)}–${formatQuantity(Number(x.imperialMaxAmount)*scale,x.imperialMaxUnit||x.unit)}`;
        }else{
          v=`${convert(min,x.unit,'imperial')}–${convert(max,x.unit,'imperial')}`;
        }
      }else{
        v=`${formatQuantity(min,x.unit)}–${formatQuantity(max,x.unit)}`;
      }
    }else if(hasAmount){
      if(unit==='imperial'&&x.imperialAmount!==undefined&&x.imperialAmount!==null&&x.imperialAmount!=='')v=formatQuantity(Number(x.imperialAmount)*scale,x.imperialUnit);
      else v=convert(Number(x.amount)*scale,x.unit,unit);
    }
    const item=String(x.item??'').trim();
    return `<li><input type="checkbox"><span>${v?`<strong class="ingredient-quantity">${esc(v)}</strong> `:''}${esc(item)}${ingredientInfoLink(r,item)}</span></li>`
  }).join('')
}
function bindRecipe(r){let scale=1,unit='metric';renderIngredients(r,scale,unit);document.querySelectorAll('#unitToggle button').forEach(b=>b.onclick=()=>{unit=b.dataset.unit;document.querySelectorAll('#unitToggle button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));renderIngredients(r,scale,unit)});document.querySelectorAll('#scaleToggle button').forEach(b=>b.onclick=()=>{scale=Number(b.dataset.scale);document.querySelectorAll('#scaleToggle button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));renderIngredients(r,scale,unit)});document.querySelector('[data-jump]')?.addEventListener('click',()=>document.getElementById('the-recipe')?.scrollIntoView({behavior:'smooth'}));document.getElementById('shareRecipe')?.addEventListener('click',async()=>{const data={title:r.title,url:location.href};try{if(navigator.share)await navigator.share(data);else{await navigator.clipboard.writeText(location.href);alert('Recipe link copied.')}}catch(e){}});document.getElementById('printRecipe')?.addEventListener('click',()=>window.print());bindReviews(r);bindCook();}
function bindReviews(r){let rating=0;document.querySelectorAll('[data-star]').forEach(b=>b.onclick=()=>{rating=Number(b.dataset.star);document.querySelectorAll('[data-star]').forEach(x=>{const on=Number(x.dataset.star)<=rating;x.setAttribute('aria-pressed',String(on));x.textContent=on?'★':'☆'})});document.getElementById('submitReview')?.addEventListener('click',()=>{if(!rating){document.getElementById('reviewStatus').textContent='Please choose a star rating.';return}const key='mr-reviews-'+r.slug;const arr=JSON.parse(localStorage.getItem(key)||'[]');arr.push({rating,name:document.getElementById('reviewName').value.trim(),comment:document.getElementById('reviewComment').value.trim(),date:new Date().toISOString()});localStorage.setItem(key,JSON.stringify(arr));document.getElementById('reviewName').value='';document.getElementById('reviewComment').value='';rating=0;document.querySelectorAll('[data-star]').forEach(x=>{x.setAttribute('aria-pressed','false');x.textContent='☆'});showReviews(r);document.getElementById('reviewStatus').textContent='Saved on this device only.'});showReviews(r)}
function showReviews(r){const box=document.getElementById('reviewList');if(!box)return;const arr=JSON.parse(localStorage.getItem('mr-reviews-'+r.slug)||'[]');box.innerHTML=arr.map(x=>`<div class="review-item"><div class="review-stars">${'★'.repeat(x.rating)}${'☆'.repeat(5-x.rating)}</div>${x.name?`<b>${esc(x.name)}</b>`:''}${x.comment?`<p>${esc(x.comment)}</p>`:''}</div>`).join('')}
let wakeLock=null;async function setWakeLock(on){if(!on){if(wakeLock){try{await wakeLock.release()}catch(e){}wakeLock=null}return}if(!('wakeLock' in navigator))return;try{wakeLock=await navigator.wakeLock.request('screen')}catch(e){wakeLock=null}}
function bindCook(){const b=document.getElementById('cookOpen');if(!b)return;const update=()=>{b.textContent=b.getAttribute('aria-pressed')==='true'?'Cook mode: ON':'Cook mode';};b.onclick=async()=>{const on=b.getAttribute('aria-pressed')!=='true';b.setAttribute('aria-pressed',String(on));await setWakeLock(on);update()};document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'&&b.getAttribute('aria-pressed')==='true')setWakeLock(true)});update()}
function about(){const imgs=window.MIDNIGHT_SITE?.aboutImages||{};const aboutImg=(src,alt)=>src?`<div class="about-photo"><img class="photo" src="${esc(root+src)}" alt="${esc(alt)}" onerror="this.closest('.about-photo').remove()"></div>`:'';app.innerHTML=`<div class="wrap"><h2 class="h2">${star()}About</h2><section><h3 class="h3">ABOUT ME</h3>${aboutImg(imgs.aboutMe,'About me')}<p class="body-copy">Hi, my name is Mitsuka! I cook after dark.</p><p class="body-copy">I love cooking and trying new food because I believe you can learn about a place — its traditions, history, and culture — through what people eat.</p><p class="body-copy">Food is a love language — a simple way of showing someone that you care. Cooking is how you speak that language.</p></section><section class="about-recipes-section"><h3 class="h3">ABOUT MIDNIGHT RECIPES</h3>${aboutImg(imgs.aboutRecipes,'About MIDNIGHT RECIPES')}<p class="body-copy">There's something about cooking at midnight.</p><p class="body-copy">When the day is finally over and I have a quiet moment to myself, I often find myself drawn to the kitchen. Midnight feels like a special time — the world slows down, and the kitchen becomes a calm, private space.</p><p class="body-copy">I find food that makes me curious, recreate it in my kitchen, and share the recipe and the story behind it. This website is a collection of those discoveries — from restaurants, movies, books, grocery stores, travels, family recipes, traditions, memories, and anywhere else good food can be found.</p><p class="body-copy">Some recipes include an Ingredient File — a quick guide to interesting or unfamiliar ingredients, with practical information such as where to find them and what to use when you can't. You'll also find Midnight Notes and The Fine Print for practical kitchen details.</p></section></div>`}
function contact(){app.innerHTML=`<div class="wrap"><section class="section"><h2 class="h2">${star()}Contact</h2><p class="body-copy">For recipe questions, corrections, collaborations, or just to say hello:</p><p class="body-copy"><a href="mailto:from.midnightkitchen@gmail.com">from.midnightkitchen@gmail.com</a></p></section></div>`}
function usuals(){const q=new URLSearchParams(location.search).get('category')||'';if(q){listPage(`The Usuals · ${q}`,filterRecipes('usuals',q),`Recipes in ${q}.`);return}app.innerHTML=`<div class="wrap"><h2 class="h2">${star()}The Usuals</h2><p class="body-copy">The sauces, bases, toppings & little things we keep coming back to.</p><p class="body-copy">The things that quietly show up again and again in our kitchen. Recipes within recipes — the sauces, crusts, bases, and little extras that make everything else easier.</p><section class="section"><div class="usuals-categories">${usualsCategories.map(c=>`<a class="usuals-category" href="${href('pages/usuals.html',{category:c})}"><span>${esc(c)}</span></a>`).join('')}</div></section></div>`}
function usual(){usuals()}
function activeCuisineTree(){const out={};Object.entries(cuisineGroups).forEach(([group,vals])=>{const present=vals.filter(v=>recipes.some(r=>String(r.cuisine||'').toLowerCase()===v.toLowerCase()));if(present.length)out[group]=present});return out}
function activeIngredients(){return ingredients.filter(v=>recipes.some(r=>ingredientNames(r).some(x=>String(x).toLowerCase()===v.toLowerCase()||String(x).toLowerCase().includes(v.toLowerCase()))))}
function setupMenu(){const src=document.getElementById('src'),cui=document.getElementById('cui'),course=document.getElementById('course'),ing=document.getElementById('ing');if(src)src.innerHTML=sources.map(v=>`<a href="${href('pages/source.html',{value:v})}">${esc(v)}</a>`).join('');if(course)course.innerHTML=courses.map(v=>`<a href="${href('pages/meal.html',{value:v})}">${esc(v)}</a>`).join('');if(ing)ing.innerHTML=activeIngredients().map(v=>`<a href="${href('recipes/index.html',{q:v})}">${esc(v)}</a>`).join('');if(cui)cui.innerHTML=Object.entries(activeCuisineTree()).map(([group,vals])=>`<div class="menu-group"><button class="menu-group-title acc" data-acc="cuisine-${esc(group).replace(/[^a-z0-9]+/gi,'-')}">${esc(group)}</button><div class="sub menu-group-sub" id="cuisine-${esc(group).replace(/[^a-z0-9]+/gi,'-')}">${vals.map(v=>`<a href="${href('pages/cuisine.html',{value:v})}">${esc(v)}</a>`).join('')}</div></div>`).join('');document.querySelectorAll('[data-acc]').forEach(b=>b.onclick=()=>{const s=document.getElementById(b.dataset.acc);if(!s)return;const open=s.classList.toggle('open');b.setAttribute('aria-expanded',String(open))});document.querySelectorAll('[data-go="all"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();location.href=href('recipes/index.html')}));document.querySelector('[data-recipes-toggle]')?.addEventListener('click',e=>{const s=document.getElementById('recipesSub');const open=s.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',String(open))})}
function setupOverlay(){const menu=document.getElementById('menuOverlay'),search=document.getElementById('searchOverlay');document.getElementById('menuBtn').onclick=()=>{menu.dataset.open='true'};document.getElementById('searchBtn').onclick=()=>{const open=search.dataset.open==='true';search.dataset.open=String(!open);const btn=document.getElementById('searchBtn');btn.setAttribute('aria-label',open?'Open search':'Close search');if(!open)document.getElementById('searchInput').focus()};[menu,search].forEach(o=>o.addEventListener('click',e=>{if(e.target===o)o.dataset.open='false'}));document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.dataset.open='false';search.dataset.open='false'}});document.querySelectorAll('[data-go]').forEach(a=>a.addEventListener('click',e=>{const g=a.dataset.go;if(!['home','all','usuals','about','contact'].includes(g))return;e.preventDefault();const target={home:'index.html',all:'recipes/index.html',usuals:'pages/usuals.html',about:'pages/about.html',contact:'pages/contact.html'}[g];location.href=href(target)}));document.getElementById('searchInput').addEventListener('input',e=>{const q=e.target.value.trim().toLowerCase();const hits=q?recipes.filter(r=>!r.isUsuals&&searchText(r).includes(q)):[];document.getElementById('searchResults').innerHTML=q?cards(hits):''})}
function category(){const p=new URLSearchParams(location.search),v=p.get('value')||'';if(page==='source')listPage(v||'By Source',filterRecipes('source',v),v?`Recipes inspired by ${v}.`:'Choose a source from the menu.');if(page==='cuisine')listPage(v||'By Cuisine',filterRecipes('cuisine',v),v?`Recipes classified as ${v}.`:'Choose a cuisine from the menu.');if(page==='meal')listPage(v||'By Course',filterRecipes('course',v),v?`Recipes classified as ${v}.`:'Choose a course from the menu.')}
function all(){const q=new URLSearchParams(location.search).get('q')||'';listPage(q?`Recipes: ${q}`:'View All',q?filterRecipes('search',q):sorted(),q?`Showing recipes matching “${q}”.`:'All recipes, newest first.')}
function init(){setupMenu();setupOverlay();if(page==='home')top();else if(page==='all')all();else if(page==='latest')listPage('Latest Recipes',sorted());else if(page==='recipe')recipe();else if(['source','cuisine','meal'].includes(page))category();else if(page==='about')about();else if(page==='contact')contact();else if(page==='usuals')usuals();else if(page==='usual')usual()}
init();
})();
