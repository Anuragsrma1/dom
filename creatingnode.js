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

/* //createelement//
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
container.insertBefore(newDiv,h1); */

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);


// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }

}

