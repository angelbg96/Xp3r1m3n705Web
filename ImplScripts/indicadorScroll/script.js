/* 
    document.documentElement.scrollHeight
    Es el tamaño total de la vista web

    document.documentElement.clientHeight
    Es la altura del viewport

    el valor maximo de escroll es el tamaño total de la vista
    menos la altura del viewport
*/

const hPage = document.documentElement.scrollHeight;
const hVPort = document.documentElement.clientHeight;
const scrollUnit = (hPage - hVPort)/100;

const rootStyle = document.documentElement.style;

addEventListener('scroll', () => {
    rootStyle.setProperty('--width', `${Math.round(scrollY / scrollUnit)}`);
    /* scrollY, nos dice en que posicion del scroll stamos */
})