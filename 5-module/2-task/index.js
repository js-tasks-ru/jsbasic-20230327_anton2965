function toggleText() {
  let text = document.querySelector('#text');
  let button = document.querySelector('.toggle-text-button');
  button.addEventListener('click', (element) => {
    text.hidden = !text.hidden;
  });
}

