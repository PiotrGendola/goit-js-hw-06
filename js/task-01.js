const categoryItems = document.querySelectorAll("li.item");

//Number of categories: 3
console.log(`Number of categories: ${categoryItems.length}`);
console.log(` `);

// Category: Animals
console.log(`Category: ${categoryItems[0].children[0].textContent}`);
// Elements: 4
console.log(`Elements: ${categoryItems[0].children[1].childElementCount}`);
console.log(` `);

// Category: Products
console.log(`Category: ${categoryItems[1].children[0].textContent}`);
// Elements: 3
console.log(`Elements: ${categoryItems[1].children[1].childElementCount}`);
console.log(` `);

// Category: Technologies
console.log(`Category: ${categoryItems[2].children[0].textContent}`);
// Elements: 5
console.log(`Elements: ${categoryItems[2].children[1].childElementCount}`);
console.log(` `);
