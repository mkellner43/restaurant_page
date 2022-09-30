import Icon from './download.png';
import { listener } from './index.js';

export const contact = () => {
  let image = new Image();
  image.src = Icon;
  image.setAttribute('id', 'image');
  let headline = document.createElement('h1');
  headline.innerHTML = 'Contact Us!';
  headline.setAttribute('id', 'headline');
  let mamaBear = document.createElement('p');
  mamaBear.innerHTML = `Chef<br/>
                        555-555-5554<br/>
                        totallyRealEmail@notFake.com<br/>`;
  let papaBear = document.createElement('p');
  papaBear.innerHTML = `Manager<br/>
                     555-555-5555<br/>
                     perfectlyRealEmail@notFake.com`;
  papaBear.setAttribute('class', 'about_us');
  papaBear.setAttribute('id', 'hours');
  mamaBear.setAttribute('class', 'about_us');
  mamaBear.setAttribute('id', 'about_us');
  let babyBear = document.createElement('p');
  babyBear.innerHTML = `Waiter<br/>
                        555-555-5556<br/>
                        totallyRealEmail@notFake.com<br/>`;
  babyBear.setAttribute('class','about_us');
  babyBear.setAttribute('id','location');
  const content = document.getElementById('content');
  let container = document.createElement('div');
  container.setAttribute('id', 'container');
  let titleMamaBear = document.createElement('div');
  titleMamaBear.setAttribute('class', 'title');
  titleMamaBear.innerHTML ='Mama Bear';
  let titlePapaBear = document.createElement('div');
  titlePapaBear.setAttribute('class', 'title');
  titlePapaBear.innerHTML = 'Papa Bear';
  let titleBabyBear = document.createElement('div');
  titleBabyBear.setAttribute('class', 'title');
  titleBabyBear.innerHTML = 'Baby Bear';

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


  titleMamaBear.appendChild(mamaBear)
  titlePapaBear.appendChild(papaBear)
  titleBabyBear.appendChild(babyBear)




  container.appendChild(image);
  container.appendChild(nav);
  container.appendChild(headline);
  container.appendChild(titleMamaBear);
  container.appendChild(titlePapaBear);
  container.appendChild(titleBabyBear);
  content.appendChild(container);
  listener();
}