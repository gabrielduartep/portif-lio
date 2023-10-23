const header = document.querySelector('header')

window.addEventListener('scroll', () => {
    const alturaPagina = window.scrollY
    if (alturaPagina < 5) header.classList.remove('scroll')
    else header.classList.add('scroll')
})