function getFirstSelector(selector){
return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target');
}



function increaseRankBy(n){
  const ranklist=document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (var i=0 ; i<ranklist.length ; i++){
  ranklist.innerHTML= (parseInt(ranklist[i]) + n).toString();
}
}
