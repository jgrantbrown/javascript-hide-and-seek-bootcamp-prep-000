function getFirstSelector(selector){
return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target');
}


const ranklist=document.getElementById('app').querySelectorAll('ul.ranked-list li')

function increaseRankBy(n){
  for (let i=0, l= ranklist.length;i<l;i++){
 return ranklist[i].innerHtml= (i+n).toString()

}
}
