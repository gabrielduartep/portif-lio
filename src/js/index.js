const header = document.querySelector('header')

window.addEventListener('scroll', () => {
    const alturaPagina = window.scrollY
    if (alturaPagina < 10) header.classList.remove('scroll')
    else header.classList.add('scroll')
})