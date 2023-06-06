let productsNew = JSON.parse(localStorage.getItem("products"));
console.log(productsNew);
let dataRow = document.querySelector("#data-row");
productsNew.forEach((products) => {
  dataRow.innerHTML += `
                    <tr>${products.name}</tr>
                    <tr>${products.price}</tr>
    `;
});
