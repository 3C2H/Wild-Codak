window.addEventListener('load', function () {
    //Gestion liens actifs
    const currentPage = document.body.id
    const currentNav = document.querySelector(`#menu-${currentPage}`)
    if(currentNav){
        currentNav.classList.add('active')
    }
})