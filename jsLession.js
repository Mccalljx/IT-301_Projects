let products = [
    { name: "Laptop", price: 850, category: "Electronics" },
    { name: "Notebook", price: 5, category: "School Supplies" },
    { name: "Headphones", price: 45, category: "Electronics" },
    { name: "Backpack", price: 35, category: "School Supplies" },
    { name: "Monitor", price: 220, category: "Electronics" }
];

console.log(products[0].name);
console.log(products[4].price);

for (let product of products) {
    console.log(product.name);
}

products.forEach(function(product) {
    console.log(product.name + ": $" + product.price);
});

let backpack = products.find(product => product.name === "Backpack");
console.log(backpack.name + ": $" + backpack.price);

let electronics = products.filter(product => product.category === "Electronics");
console.log(electronics);
