import Icon from './download.png';
import { listener } from './index.js';

export const menu = () => {
  let image = new Image();
  image.src = Icon;
  image.setAttribute('id', 'image');
  let headline = document.createElement('h1');
  headline.innerHTML = 'MENU';
  headline.setAttribute('id', 'headline');


  //content
  let flex = document.createElement('div')
  flex.setAttribute('class', 'menuContainer')
  //beverages
  let beverageTitle = document.createElement('h3')
  beverageTitle.innerHTML = 'Beverages'
  beverageTitle.setAttribute('class', 'mainItemTitle');
  let beverage1Title = document.createElement('h3');
  beverage1Title.innerHTML = 'Honey Tea'
  beverage1Title.setAttribute('class', 'menuItemTitle')

  let beverage1 = document.createElement('p');
  beverage1.setAttribute('class', 'menuItem');
  beverage1.innerHTML = 'A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!<br/><br/>$2';

  let beverage2Title = document.createElement('h3');
  beverage2Title.setAttribute('class', 'menuItemTitle')
  beverage2Title.innerHTML = 'Beary Tea'

  let beverage2 = document.createElement('p');
  beverage2.setAttribute('class', 'menuItem');
  beverage2.innerHTML = 'A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.<br/><br/>$3';


  beverage1Title.appendChild(beverage1);
  beverage2Title.appendChild(beverage2);


  //sides
  let sidesTitle = document.createElement('h3');
  sidesTitle.setAttribute('class', 'mainItemTitle')
  sidesTitle.innerHTML = 'Sides';
  let side1Title = document.createElement('h3');
  side1Title.setAttribute('class', 'menuItemTitle')
  side1Title.innerHTML = 'Toast and Jam';
  let side1 = document.createElement('p');
  side1.setAttribute('class', 'menuItem');
  side1.innerHTML = 'A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.<br/><br/>$1';

  let side2Title = document.createElement('h3');
  side2Title.setAttribute('class', 'menuItemTitle')
  side2Title.innerHTML = 'Fresh Fruit';  
  let side2 = document.createElement('p');
  side2.setAttribute('class', 'menuItem');
  side2.innerHTML = 'A small bowl of fresh fruit, whatever we find at the market for the day.<br/></br>$3'

  side1Title.appendChild(side1);
  side2Title.appendChild(side2);

  //main dishes
  let mainMenuTitle = document.createElement('div')
  mainMenuTitle.setAttribute('class', 'mainItemTitle')
  mainMenuTitle.innerHTML = 'Main Dishes'

  let dish1Title = document.createElement('h3');
  dish1Title.setAttribute('class', 'menuItemTitle')
  dish1Title.innerHTML = 'Pancakes';  
  let dish1 = document.createElement('p');
  dish1.setAttribute('class', 'menuItem');
  dish1.innerHTML = 'A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.<br/></br>$4'

  dish1Title.appendChild(dish1);

  let dish2Title = document.createElement('h3');
  dish2Title.setAttribute('class', 'menuItemTitle')
  dish2Title.innerHTML = 'French Toast';  
  let dish2 = document.createElement('p');
  dish2.setAttribute('class', 'menuItem');
  dish2.innerHTML = 'Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.<br/></br>$5'

  dish2Title.appendChild(dish2);

  let dish3Title = document.createElement('h3');
  dish3Title.setAttribute('class', 'menuItemTitle')
  dish3Title.innerHTML = 'Beary Veggie Sandwich';
  let dish3 = document.createElement('p');
  dish3.setAttribute('class', 'menuItem');
  dish3.innerHTML = 'Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.<br/><br/>$8'

  dish3Title.appendChild(dish3);

  let dish4Title = document.createElement('h3');
  dish4Title.setAttribute('class', 'menuItemTitle')
  dish4Title.innerHTML = 'BLT';
  let dish4 = document.createElement('p');
  dish4.setAttribute('class', 'menuItem');
  dish4.innerHTML = 'Interested in the Beary Veggie Sandwich but also love bacon? Say no more.<br/><br/>$6'

  dish4Title.appendChild(dish4);

  let dish5Title = document.createElement('h3');
  dish5Title.setAttribute('class', 'menuItemTitle')
  dish5Title.innerHTML = 'Bagel and Lox';
  let dish5 = document.createElement('p');
  dish5.setAttribute('class', 'menuItem');
  dish5.innerHTML = "Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon.<br/><br/>$8"

  dish5Title.appendChild(dish5);

  let dish6Title = document.createElement('h3');
  dish6Title.setAttribute('class', 'menuItemTitle')
  dish6Title.innerHTML = 'Honeycomb';
  let dish6 = document.createElement('p');
  dish6.setAttribute('class', 'menuItem');
  dish6.innerHTML = "Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal.<br/><br/>$6"

  dish6Title.appendChild(dish6);

  let dish7Title = document.createElement('h3');
  dish7Title.setAttribute('class', 'menuItemTitle')
  dish7Title.innerHTML = 'The Beary Best Porridge';
  let dish7 = document.createElement('p');
  dish7.setAttribute('class', 'menuItem');
  dish7.innerHTML = "Made by Baby Bear himself, this porridge is guarenteed to be just right, or your money back.<br/><br/>$5";

  dish7Title.appendChild(dish7);

  let dish8Title = document.createElement('h3');
  dish8Title.setAttribute('class', 'menuItemTitle')
  dish8Title.innerHTML = 'Beary Bowl';
  let dish8 = document.createElement('p');
  dish8.setAttribute('class', 'menuItem');
  dish8.innerHTML = "Get a big ole bowl of our berries! Side of honey is $1 extra.<br/><br/>$7"

  dish8Title.appendChild(dish8);



  //dont touch 
  const content = document.getElementById('content');
  let container = document.createElement('div');
  container.setAttribute('id', 'container');

  let home = document.createElement('button');
  home.innerHTML = 'Home'
  home.setAttribute('class', 'links home')

  let menu = document.createElement('button');
  menu.innerHTML = 'Menu'
  menu.setAttribute('class', 'links menu')

  let contact_us = document.createElement('button');
  contact_us.innerHTML = 'Contact Us'
  contact_us.setAttribute('class', 'links contact_us')

  let nav = document.createElement('nav');

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact_us);


  container.appendChild(image);
  container.appendChild(nav);
  container.appendChild(headline);
  flex.appendChild(beverageTitle);
  flex.appendChild(beverage1Title);
  flex.appendChild(beverage2Title);
  flex.appendChild(sidesTitle);
  flex.appendChild(side1Title);
  flex.appendChild(side2Title);
  flex.appendChild(mainMenuTitle);
  flex.appendChild(dish1Title);
  flex.appendChild(dish2Title);
  flex.appendChild(dish3Title);
  flex.appendChild(dish4Title);
  flex.appendChild(dish5Title);
  flex.appendChild(dish6Title);
  flex.appendChild(dish7Title);
  flex.appendChild(dish8Title);

  container.appendChild(flex)
  content.appendChild(container);
  listener();
}