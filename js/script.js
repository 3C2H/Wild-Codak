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

    //Gestion de la galerie
    const row = document.querySelector(`#images-wrapper`)

    for (let i = 1; i < 43; i++) {
        let div = document.createElement(`div`)
        div.className = `col-lg-4 col-sm-6 col-12 picture`
        div.innerHTML = `
            <figure>
                <a href="images/${i}.jpg?image=${i}" data-toggle="lightbox" data-gallery="example-gallery" data-max-width="1400" data-max-height="840">
                    <img src="images/${i}.jpg" class="img-fluid  img-bkg" alt="galery-image${i}">
                    <i class="fas fa-plus"></i>
                </a>
            </figure>
        `
        row.appendChild(div)
    }
}