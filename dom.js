/* var headerTitle = document.getElementById('header-title');
var header = document.getElementById('mainheader');

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[2].textContent = 'jon';
items[2].style.frontweight = 'bold';
items[2].style.background = 'green';

for(var i=0 ; i<items.length; i++){
    items[i].style.background = '#f4f4f4';
} */

//GETELEMENTSBYTAGNAME 

/* var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[2].textContent = 'jon';
li[2].style.frontweight = 'bold';
li[2].style.background = 'green';

for(var i=0 ; i<li.length; i++){
    li[i].style.background = '#f4f4f4';
}
 */

// queryselector
/* var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Enter text';

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

var item = document.querySelector('.list-group-item');
item.style.color= 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = 
document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color ='coral'; */

// QUERYSELECTORALL //
var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent= 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
  
for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = '#f4f4f4';
}
