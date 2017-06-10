function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('.ranked-list')
  for(var i = 0; i < lis.length; i++){
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + 1;
  }
}

function deepestChild(){
  var curNode = document.querySelector('#grand-node');

  while(curNode.firstElementChild){
    curNode = curNode.firstElementChild;
  }
  return curNode;
}

//function
