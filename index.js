function getFirstSelector(selector){
return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target');
}



function increaseRankBy(n){
  const ranklist=document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i=0,l=ranklist.length;i<l;i++){
  parseInt(ranklist[i]).innerHTML= document.querySelector(ranklist[i] + n).toString();
}
}
