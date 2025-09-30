export default function burst(el) {
  if (!el) return;
  const rect = el.getBoundingClientRect();
  for (let i=0;i<18;i++){
    const span=document.createElement("span");
    span.textContent=["✨","🎉","💫"][Math.floor(Math.random()*3)];
    span.style.position="fixed"; span.style.left=rect.left+rect.width/2+"px"; span.style.top=rect.top+rect.height/2+"px";
    span.style.pointerEvents="none"; span.style.fontSize=14+Math.random()*12+"px"; span.style.transform=`translate(-50%,-50%) rotate(${Math.random()*360}deg)`;
    document.body.appendChild(span);
    const dx=(Math.random()-0.5)*300, dy=(Math.random()-0.5)*300;
    span.animate([{ transform: span.style.transform, opacity:1 }, { transform:`translate(${dx}px, ${dy}px)`, opacity:0 }], { duration: 900+Math.random()*400, easing:"cubic-bezier(.2,.6,.2,1)" }).onfinish=()=>span.remove();
  }
}