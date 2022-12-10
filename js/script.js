const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const email = document.getElementById('email');
const errorText = document.getElementById('error-text');

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})

function validateEmail() {
  if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][a-z]*[\.][a-z]{2,4}$/)) {
    errorText.innerHTML = "Please enter valid email";
    email.style.borderColor = "red";
    return false;
  }

  errorText.innerHTML = "";
  return true;
}
