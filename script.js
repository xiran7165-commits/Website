const form=document.querySelector('#signature-form'),input=document.querySelector('#signature'),message=document.querySelector('#form-message'),board=document.querySelector('.notebook-main'),card=document.querySelector('.notebook-box'),trigger=document.querySelector('#notebook-trigger'),closeButton=document.querySelector('#close-notebook');
if(form&&input&&message&&board&&card&&trigger&&closeButton){
  const openCard=()=>{board.classList.add('notebook-open');card.setAttribute('aria-hidden','false');setTimeout(()=>input.focus(),250)};
  const closeCard=()=>{board.classList.remove('notebook-open');card.setAttribute('aria-hidden','true');form.reset();message.textContent='';trigger.focus()};
  trigger.addEventListener('click',openCard);
  closeButton.addEventListener('click',closeCard);
  form.addEventListener('submit',event=>{event.preventDefault();const name=input.value.trim();if(!name)return;const signature=document.createElement('span');signature.className='fake-signature new-signature';signature.textContent=name;signature.style.left=`${8+Math.random()*76}%`;signature.style.top=`${8+Math.random()*78}%`;signature.style.color=['#ed6b99','#5fae81','#e68e38','#7757b7'][Math.floor(Math.random()*4)];signature.style.transform=`rotate(${-12+Math.random()*24}deg)`;board.appendChild(signature);closeCard()});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&board.classList.contains('notebook-open'))closeCard()})
}
