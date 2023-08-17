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

var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[2].textContent = 'jon';
li[2].style.frontweight = 'bold';
li[2].style.background = 'green';

for(var i=0 ; i<li.length; i++){
    li[i].style.background = '#f4f4f4';
}
