/* eslint-disable no-undef */
// code from https://parsleyjs.org/doc/examples/simple.html
import './form-style.css';
import 'parsleyjs';
import 'jquery-mask-plugin';
import renderTemplate from './template';
// eslint-disable-next-line import/no-unresolved
import formHTML from './form-html.tpl.html?raw';

const printForm = () => {
  const body = document.querySelector('main');
  const form = document.createElement('div');
  body.append(form);
  form.setAttribute('id', 'form-root');
  const html = renderTemplate(formHTML);
  $('#form-root').append(html);
};

const setupLogic = () => {
  $('#demo-form')
    .parsley()
    .on('field:validated', () => {
      const ok = $('.parsley-error').length === 0;
      $('.bs-callout-info').toggleClass('hidden', !ok);
      $('.bs-callout-warning').toggleClass('hidden', ok);
    })
    .on('form:submit', () => {
      return false; // Don't submit form for this demo
    });

  // setup masking
  $('[data-jquery-mask-phone]').mask('(000) 000-0000', {
    placeholder: '__/__/____',
  });
};

const initContactForm = () => {
  printForm();
  setupLogic();
};

export default initContactForm;
