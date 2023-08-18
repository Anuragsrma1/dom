/* // Traversing the dom//
var itemList = document.querySelector('#items');
//parentnode//
/*console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode); */

//parentelement//
/* console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement); */

//console.log(itemList.childNode);
/*console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

//firstchild//
console.log(itemList.firstChild);
itemList.firstChild.textchild = 'Hello world';
//fiirstelementchild//
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent = 'jack';
//lastelementchild//

console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'jack';
//lastchild//

console.log(itemList.lastChild);
itemList.lastChild.textContent = 'hello';
 // nextsbiling//
 console.log(itemList.nextSibling);
// nextelementsibilng//
console.log(itemList.nextElementSibling);

//previoussibiling//

console.log(itemList.previousSibling);

//previouselementsibiling//
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color ='red'; */

//createelement//
var newDiv = document.createElement('div');

newDiv.className = 'hello world';
//creating id//
newDiv.id = 'hello world';

//Add atr//
newDiv.setAttribute('title','Hello div');

//create text node
var newDivText = document.createTextNode('hello');

//add text to div//
newDiv.appendChild(newDivText);

var container = document.querySelector('header' .container);
var h1 = document.querySelector('header h1');


console.log(newDiv);
container.insertBefore(newDiv,h1);