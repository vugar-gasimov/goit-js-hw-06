const refs = {
inputText: document.querySelector('#name-input'),
outputSpan: document.querySelector('#name-output'),
}; 

refs.inputText.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value.trim() === '') {
    refs.outputSpan.textContent = 'Anonymous';
  } else {
    refs.outputSpan.textContent = event.currentTarget.value;
  }
}