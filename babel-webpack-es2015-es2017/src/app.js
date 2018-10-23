import { person, sayHello } from "./lib";

let test = () => console.log(person.location, sayHello(person.name));

test();

let newObj = {...person};

console.log(newObj.age);

async function getPosts() {
  const response = await fetch("http://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}

getPosts().then(posts => console.log(posts));
