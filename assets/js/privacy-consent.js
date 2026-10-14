(function(){
'use strict';
var KEY='mr-analytics-consent-v1';
var GA_ID='G-5KTZYB7ZHY';
var loaded=false;
function getChoice(){try{return localStorage.getItem(KEY);}catch(e){return null;}}
function saveChoice(choice){try{localStorage.setItem(KEY,choice);}catch(e){/* Browser may block storage */}}
function loadAnalytics(){
 if(loaded||getChoice()!=='accepted')return;
 loaded=true;
 window.dataLayer=window.dataLayer||[];
 window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};
 window.gtag('js',new Date());
 window.gtag('config',GA_ID);
 var script=document.createElement('script');script.async=true;
 script.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(GA_ID);
 document.head.appendChild(script);
}
function closeDialog(){var el=document.getElementById('mr-cookie-consent');if(el)el.remove();}
function showDialog(){
 closeDialog();
 var el=document.createElement('section');el.id='mr-cookie-consent';
 el.className='mr-cookie-consent';el.setAttribute('aria-label','Cookie preferences');
 el.innerHTML='<p><strong>Cookies & privacy</strong></p><p>We use optional Google Analytics cookies to understand how readers use MIDNIGHT RECIPES. You can accept or reject analytics cookies. <a href="'+(document.body.dataset.depth==='1'?'../':'')+'pages/privacy.html">Read our Privacy Policy</a>.</p><div class="mr-cookie-actions"><button type="button" data-consent="rejected">Reject optional cookies</button><button type="button" data-consent="accepted">Accept analytics cookies</button></div>';
 document.body.appendChild(el);
 el.querySelectorAll('[data-consent]').forEach(function(btn){btn.addEventListener('click',function(){var choice=btn.getAttribute('data-consent');saveChoice(choice);closeDialog();if(choice==='accepted')loadAnalytics();});});
}
document.addEventListener('DOMContentLoaded',function(){
 var settings=document.getElementById('mrPrivacySettings');if(settings)settings.addEventListener('click',showDialog);
 if(getChoice()==='accepted')loadAnalytics();else if(getChoice()!=='rejected')showDialog();
});
})();
