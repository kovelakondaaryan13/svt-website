import './style.css';
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const salesForm=document.querySelector('#sales-form'),emailReview=document.querySelector('#email-review');
salesForm.addEventListener('submit',e=>{e.preventDefault();if(!salesForm.reportValidity())return;const d=new FormData(salesForm);const body=`Name: ${d.get('name')}
Company: ${d.get('company')}
Work email: ${d.get('email')}

Workflow:
${d.get('workflow')}`;document.querySelector('#enquiry-preview').textContent=body;document.querySelector('#email-draft').href='mailto:founder@svayantra.tech?subject='+encodeURIComponent('Factory workflow enquiry - '+d.get('company'))+'&body='+encodeURIComponent(body);emailReview.hidden=false;document.querySelector('#form-status').textContent='Draft prepared below. Review it, then open your email app.';emailReview.scrollIntoView({behavior:reduced?'instant':'smooth'});});
document.querySelector('#edit-enquiry').onclick=()=>{emailReview.hidden=true;salesForm.querySelector('input').focus();};

document.querySelector('#contact').onclick=()=>document.querySelector('#sales').scrollIntoView({behavior:reduced?'instant':'smooth'});
