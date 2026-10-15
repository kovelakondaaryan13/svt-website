import './page.js';
import('./main.js').catch(()=>{document.body.classList.add('no-webgl');document.querySelector('#fallback').hidden=false;document.body.classList.toggle('light',matchMedia('(prefers-color-scheme: light)').matches);document.querySelector('#theme').onclick=()=>document.body.classList.toggle('light');window.__ready=true;});
