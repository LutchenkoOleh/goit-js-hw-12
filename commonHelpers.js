import{a as L,i as d,S as v}from"./assets/vendor-4d53def3.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const q=document.querySelector(".gallery");function P(e){const o=e.map(({webformatURL:a,largeImageURL:i,tags:t,likes:s,views:l,comments:m,downloads:h})=>`<li class="gallery-item">
      <a class="gallery-link" href="${i}">
      <img src="${a}" alt="${t}" class="gallery-img">
      </a>
        <div class="text-wrap">
          <p class="img-text">Likes <span class="img-text-span">${s}</span></p>
          <p class="img-text">Views <span class="img-text-span">${l}</span></p>
          <p class="img-text">Comments <span class="img-text-span">${m}</span></p>
          <p class="img-text">Downloads <span class="img-text-span">${h}</span></p>
        </div>
    </li>`).join("");q.insertAdjacentHTML("beforeend",o)}async function f({q:e="",page:o=1,per_page:a=15}={}){const t="https://pixabay.com/api/?key=44806225-40e07737f22f709bd193bb0f7",s="photo",l="horizontal",m=!0;return(await L.get(`${t}&image_type=${s}&orientation=${l}&safesearch=${m}`,{params:{q:e,page:o,per_page:a}})).data}const x="is-hidden";function $(e){e.classList.add(x)}function C(e){e.classList.remove(x)}function I(e){e.disabled=!0}function E(e){e.disabled=!1}const c={hide:$,show:C,disable:I,enable:E},r={q:"",page:1,per_page:15,maxPage:""},g=document.querySelector(".bottom-spin"),p=document.querySelector(".loader");p.style.opacity=0;g.style.opacity=0;const n=document.querySelector(".page-btn");n.addEventListener("click",w);c.hide(n);const u=document.querySelector(".form");u.addEventListener("submit",T);async function T(e){document.querySelector(".gallery").innerHTML="",r.page=1,e.preventDefault(),p.style.opacity=1;const o=e.currentTarget;if(r.q=o.elements.query.value.trim().toLowerCase(),r.q.length<=0){d.show({backgroundColor:"#ef4040",messageColor:"#fff",messageSize:"16px",position:"topRight",message:"Please write something in the search field"}),p.style.opacity=0,u.reset();return}c.show(n),c.disable(n);try{const{hits:a,totalHits:i}=await f(r);S({hits:a}),r.maxPage=Math.ceil(i/r.per_page),a.length>0&&a.length!==i?c.enable(n):c.hide(n)}catch{y()}finally{u.reset()}}let b=new v(".gallery a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250});async function S(){const{hits:e,totalHits:o}=await f(r);o===0?y():P(e),b.on("show.simplelightbox",function(){}),b.refresh(),p.style.opacity="0"}function y(){d.error({backgroundColor:"#ef4040",messageColor:"#fff",messageSize:"16px",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}async function w(){r.page+=1,c.disable(n),g.style.opacity=1;try{const{hits:e}=await f();S({hits:e});const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"}),g.style.opacity=0}catch{y()}finally{c.enable(n),r.page===r.maxPage&&(c.hide(n),n.removeEventListener("click",w),d.info({backgroundColor:"#7453d7",messageColor:"#fff",messageSize:"16px",position:"bottomCenter",message:"We're sorry, but you've reached the end of search results."}))}}
//# sourceMappingURL=commonHelpers.js.map
