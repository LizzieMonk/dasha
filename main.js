//change navbar styles on scroll

window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
    document.querySelector('nav h4').classList.toggle
    ('logo', window.scrollY > 0)
    document.querySelector('.number').classList.toggle
    ('number-scroll', window.scrollY > 0)
})

