const assert = require('assert');
const { JSDOM } = require('jsdom');

const dom = new JSDOM(`
  <div id="loginForm"></div>
  <div id="managementSection" class="hidden"></div>
  <input id="username">
  <input id="password">
`);

const document = dom.window.document;

const userData = {
  username: 'admin',
  password: 'admin123'
};
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const managementSection = document.getElementById('managementSection');

function showManagementSection() {
  document.getElementById('loginForm').classList.add('hidden');
  managementSection.classList.remove('hidden');
}
function hideManagementSection() {
  document.getElementById('loginForm').classList.remove('hidden');
  managementSection.classList.add('hidden');
}
function login() {
  const enteredUsername = usernameInput.value;
  const enteredPassword = passwordInput.value;

  if (enteredUsername === userData.username && enteredPassword === userData.password) {
    showManagementSection();
  } else {
    // wrong credentials
  }
}

// simulate user input
usernameInput.value = 'admin';
passwordInput.value = 'admin123';

login();

assert(document.getElementById('loginForm').classList.contains('hidden'), '#loginForm should be hidden');
assert(!managementSection.classList.contains('hidden'), '#managementSection should be visible');

console.log('login.test.js passed');
