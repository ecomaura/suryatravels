document.querySelector('.burger')?.addEventListener('click',e=>{const u=document.querySelector('nav ul');const o=u.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',o)});
document.getElementById('enquiry')?.addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target);
const t=encodeURIComponent(`Hello Surya Tours & Travels,\nName: ${f.get('name')}\nService: ${f.get('service')}\nDate: ${f.get('date')||'Flexible'}\nPeople: ${f.get('pax')||'-'}\nMessage: ${f.get('msg')||'-'}`);
window.open('https://wa.me/917755903677?text='+t,'_blank','noopener')});
