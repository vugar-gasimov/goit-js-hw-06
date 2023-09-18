const rangeEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

rangeEl.addEventListener('input', onFontSizeChange);


function onFontSizeChange(event) {
    const rangeValue = event.currentTarget.value;
     spanEl.style.fontSize = rangeValue + 'px';
}