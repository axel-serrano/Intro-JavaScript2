const breakfastMenu = ['Pancakes -$12.00', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15'];
const mainCourseMenu = ['Steak -$15.00', 'Pasta -$10.00', 'Burger -$20.00', 'Salmon -$28.00'];
const dessertMenu = ['Cake -$6.00', 'Ice Cream -$5.00', 'Pudding -$8.00', 'Fruit Salad -$10.00'];

//map array method 

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index+1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

//forEach array method and loop iteration 

let mainCourseItem = '';




mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});

document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

// map array for the dessert menu 

const dessertMenuItemsHTML = dessertMenu.map((item, index) => `<p>Item ${index + 1}: ${item}<p>`).join('');
document.getElementById ('dessertMenuItems').innerHTML = dessertMenuItemsHTML;
