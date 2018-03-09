window.onload = function(){
    //Gestion lightbox
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault()
        $(this).ekkoLightbox()
    });

    //Gestion liens actifs
    const currentPage = document.body.id
    const currentNav = document.querySelector(`#menu-${currentPage}`)
    currentNav.classList.add('active')
}