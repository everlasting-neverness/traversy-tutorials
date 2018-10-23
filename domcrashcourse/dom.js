// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }

// var form = document.getElementById('addForm');
// var itemList = document.getElementById('items');
// var filter = document.getElementById('filter');
//
// // Form submit event
// form.addEventListener('submit', addItem);
// // Delete event
// itemList.addEventListener('click', removeItem);
// // Filter event
// filter.addEventListener('keyup', filterItems);
//
// // Add item
// function addItem(e){
//   e.preventDefault();
//
//   // Get input value
//   var newItem = document.getElementById('item').value;
//
//   // Create new li element
//   var li = document.createElement('li');
//   // Add class
//   li.className = 'list-group-item';
//   // Add text node with input value
//   li.appendChild(document.createTextNode(newItem));
//
//   // Create del button element
//   var deleteBtn = document.createElement('button');
//
//   // Add classes to del button
//   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
//
//   // Append text node
//   deleteBtn.appendChild(document.createTextNode('X'));
//
//   // Append button to li
//   li.appendChild(deleteBtn);
//
//   // Append li to list
//   itemList.appendChild(li);
// }
//
// // Remove item
// function removeItem(e){
//   if(e.target.classList.contains('delete')){
//     if(confirm('Are You Sure?')){
//       var li = e.target.parentElement;
//       itemList.removeChild(li);
//     }
//   }
// }
//
// // Filter Items
// function filterItems(e){
//   // convert text to lowercase
//   var text = e.target.value.toLowerCase();
//   // Get lis
//   var items = itemList.getElementsByTagName('li');
//   // Convert to an array
//   Array.from(items).forEach(function(item){
//     var itemName = item.firstChild.textContent;
//     if(itemName.toLowerCase().indexOf(text) != -1){
//       item.style.display = 'block';
//     } else {
//       item.style.display = 'none';
//     }
//   });
// }

var form = document.getElementById('addForm');
var itemList = document.querySelector('#items');
var filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
filter.addEventListener('keyup', filterItems);

function addItem(e) {
  e.preventDefault();
  var newItem = document.getElementById('item');
  var li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem.value));
  var delbut = document.createElement('button');
  delbut.setAttribute('class', "btn btn-danger btn-sm float-right delete");
  delbut.textContent = 'X';
  li.appendChild(delbut);
  itemList.appendChild(li);
}

itemList.addEventListener('click', function(event){
  // console.log(event.target.className);
  if (event.target.className == "btn btn-danger btn-sm float-right delete") {
    if(confirm('Are you shere?'))
      // event.target.parentElement.remove();
      itemList.removeChild(event.target.parentElement);
  }
})

function filterItems(e) {
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName('li');
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1)
        item.style.display = 'block';
    else
        item.style.display = 'none';
  });
}
