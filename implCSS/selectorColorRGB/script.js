const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const rootStyle = document.documentElement.style;

const changeColor = (e,varCSS) => {
    rootStyle.setProperty(varCSS,e.target.value);
}

red.addEventListener('mousemove', e => {
    changeColor(e,'--red');
})
red.addEventListener('change', e => {
    changeColor(e,'--red');
})

green.addEventListener('mousemove', e => {
    changeColor(e,'--green');
})
green.addEventListener('change', e => {
    changeColor(e,'--green');
})

blue.addEventListener('mousemove', e => {
    changeColor(e,'--blue');
})
blue.addEventListener('change', e => {
    changeColor(e,'--blue');
})
