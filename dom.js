var headerTitle = document.getElementById('header-title');
var header = document.getElementById('mainheader');

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[2].textContent = 'jon';
items[2].style.frontweight = 'bold';
items[2].style.background = 'green';



