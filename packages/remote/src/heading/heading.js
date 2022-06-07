/* eslint-disable no-undef */
import './heading.css';

class Heading {
  // eslint-disable-next-line class-methods-use-this
  render(pageName) {
    const h1 = document.createElement('h1');
    h1.classList.add('header-styling');
    const body = document.querySelector('header');
    h1.innerHTML = `Welcome to ${pageName}`;
    body.append(h1);
  }
}

export default Heading;
