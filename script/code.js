// // The below code is an example of a factory function

// function createPerson({firstName, lastName, fullName, age, job}){
//     return {
//       firstName,
//       lastName,
//       age,
//       job,
//       sentence: function () {
//         return console.log(
//           `Hello, my name is ${this.firstName}, I'm ${this.age} years old and I'm a ${this.job}`
//         );
//       },
//     };
// }

// let john = createPerson({
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 25,
//     job: 'front end web developer',
// })

// console.log(john.sentence());

// let mark = createPerson({
//     firstName: 'Mark',
//     lastName: 'Matt',
//     age: 30,
//     job: 'Senior Developer'
// })

// console.log(mark.sentence());

let itemArr = [
  {
    id: 1,
    name: "Acer",
    price: 10000,
  },
  {
    id: 2,
    name: "Acer",
    price: 20000,
  },
  {
    id: 3,
    name: "dell",
    price: 30000,
  },
  {
    id: 4,
    name: "Dell",
    price: 26000,
  }
];

// Local Storage Open Source Code from JOEL ( FOR FREE)
let products =
JSON.parse(localStorage.getItem("products")) ?
JSON.parse(localStorage.getItem("products")) :
JSON.parse(localStorage.setItem("products",JSON.stringify(itemArr)))


let pro = document.getElementById("listing");
pro.innerHTML= "";
products.forEach((products) =>{
    pro.innerHTML +=`
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${products.name}</h5>
    <a href="#" class="btn btn-primary">${products.price}</a>
  </div>
</div>
    `
})


