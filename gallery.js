const viewer=document.querySelector('.image-dialog');
if(viewer && typeof viewer.showModal==='function'){
 const picture=viewer.querySelector('img'),caption=viewer.querySelector('p');
 document.querySelectorAll('[data-lightbox]').forEach(link=>link.addEventListener('click',event=>{
  if(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||event.button!==0)return;
  event.preventDefault();picture.src=link.href;picture.alt=link.querySelector('img').alt;caption.textContent=picture.alt;viewer.showModal();
 }));
 viewer.addEventListener('click',event=>{if(event.target===viewer){const box=viewer.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)viewer.close();}});
}

const filters=document.querySelector('.gallery-filters');
if(filters){
 filters.hidden=false;
 const cards=[...document.querySelectorAll('[data-gallery-group]')],count=document.querySelector('[data-gallery-count]');
 filters.addEventListener('click',event=>{const button=event.target.closest('[data-gallery-filter]');if(!button)return;const group=button.dataset.galleryFilter;filters.querySelectorAll('button').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));cards.forEach(card=>card.hidden=group!=='all'&&card.dataset.galleryGroup!==group);if(count)count.textContent=count.dataset.label+': '+cards.filter(card=>!card.hidden).length;});
}
