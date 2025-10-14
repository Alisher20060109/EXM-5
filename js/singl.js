let params = new URLSearchParams(window.location.search)
const id = params.get("id");

let singlProduct = products.filter((el) => el.id == id);
console.log(singlProduct);
