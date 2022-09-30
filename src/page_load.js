import Icon from './download.png';
import { listener } from './index.js';
// import Background from './background_image.jpg';

export const setUp = () => {
  // let background = new Image();
  // background.src = Background
  // background.style.width = 'auto'
  // background.style.height = 'auto'
  let image = new Image();
  image.src = Icon;
  image.setAttribute('id', 'image');
  let headline = document.createElement('h1');
  headline.innerHTML = 'Welcome to my restaurant page!';
  headline.setAttribute('id', 'headline');
  let about_us = document.createElement('p');
  about_us.innerHTML = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";
  let hours = document.createElement('p');
  hours.innerHTML = `Sunday: 8am - 8pm<br/>
                     Monday: 6am - 6pm<br/>
                     Tuesday: 6am - 6pm<br/>
                     Wednesday: 6am - 6pm<br/>
                     Thursday: 6am - 10pm<br/>
                     Friday: 6am - 10pm <br/>
                     Saturday: 8am - 10pm<br/>`;
  hours.setAttribute('class', 'about_us');
  hours.setAttribute('id', 'hours');
  about_us.setAttribute('class', 'about_us');
  about_us.setAttribute('id', 'about_us');
  let location = document.createElement('p');
  location.innerHTML = "123 Forest Drive, Forestville, Maine";
  location.setAttribute('class','about_us');
  location.setAttribute('id','location');
  const content = document.getElementById('content');
  let container = document.createElement('div');
  container.setAttribute('id', 'container');
  let titleAboutUs = document.createElement('div');
  titleAboutUs.setAttribute('class', 'title');
  titleAboutUs.innerHTML ='About Us';
  let titleHours = document.createElement('div');
  titleHours.setAttribute('class', 'title');
  titleHours.innerHTML = 'Hours Of Operation';
  let titleLocation = document.createElement('div');
  titleLocation.setAttribute('class', 'title');
  titleLocation.innerHTML = 'Location';

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


  titleAboutUs.appendChild(about_us)
  titleHours.appendChild(hours)
  titleLocation.appendChild(location)




  container.appendChild(image);
  container.appendChild(nav);
  container.appendChild(headline);
  container.appendChild(titleAboutUs);
  container.appendChild(titleHours);
  container.appendChild(titleLocation);
  content.appendChild(container);

  listener();
  
};

