let cart = [
    {item: "Bread", price: 3.29, quantity: 2},
    {item: "Milk", price: 4.09, quantity: 11},
    {item: "T-Bone Steak", price: 12.99, quantity: 21},
    {item: "Baking Potato", price: 1.89, quantity: 6},
    {item: "Iceberg Lettuce", price: 2.06, quantity: 1},
    {item: "Ice Cream - Vanilla", price: 6.81, quantity: 11},
    {item: "Apples", price: 0.66, quantity: 6}
];

const itemNames = cart.map(item => item.item);
itemNames.sort(); // Sort the item names
itemNames.forEach(item => console.log(item));

const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
console.log('Total Cost:', totalCost.toFixed(2));

const itemNamesSorted = cart.map(item => item.item).sort();
itemNamesSorted.forEach(item => console.log(item));
