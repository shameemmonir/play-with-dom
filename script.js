// console.log('connected');
// const title = document.getElementById('title');
// title.innerText = "My JS Power";
// title.style.color = 'red';
// console.log(title.innerText);


// const title2 = document.querySelector("p");
// title2.textContent = "I am done by selector";
// console.log(title2);

// const items = document.getElementsByClassName('list-items');
// console.log(items.length);

// for (let index = 0; index < items.length; index++) {
//     const element = items[index];
//     element.style.color = 'green';
//     console.log(element);
// }

// const items2 = document.getElementsByTagName('li');
// console.log(items2);

// for (const iterator of items2){
//     console.log(iterator);
//     iterator.style.fontSize = "40px";
//     iterator.style.backgroundColor = 'yellow';
// }

// const bodyName = document.querySelector("body");
// console.log(bodyName.children);

// const items = document.querySelectorAll('.list-items');
// console.log(items)

// const items = document.querySelector('ul');
// console.log(items.children);

// const ul = document.querySelector('ul');
// console.log(ul.textContent);
// ul.innerHTML = '<p>Hello</P';

// document.querySelector("h2").removeAttribute("id");
// document.querySelector("h2").setAttribute("class", "first-heading");

// const ul = document.querySelector('ul');

// const li = document.createElement('li');
// li.innerText = 'added by js';
// console.log(li);

// ul.appendChild(li);

// const h2 = document.querySelector('h2');
// console.log(h2);
// h2.classList.add('first', 'second');

const ul = document.querySelector('ul');
const second = document.getElementById('second');

const li = document.createElement('li');
li.innerText = 'Hello';

ul.insertBefore(li, second);
