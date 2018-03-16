window.addEventListener('load', function () {

    //Gestion lightbox
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault()
        $(this).ekkoLightbox()
    });

    //Gestion de la galerie
    const row = document.querySelector(`#images-wrapper`)
    const maxItems = 42
    let itemsToLoad = 12
    let step = 200

    const scrollListener = window.addEventListener('scroll', () => {
        if (itemsToLoad < maxItems)  {
            if (window.scrollY > step) {
                step = step + 200
                let counter = itemsToLoad + 1
                itemsToLoad = itemsToLoad + 6
                loadItems(counter, itemsToLoad)
            }
        }
    })
    
    const loadItems = (counter, itemsToLoad) => {
        for (let i = counter; i <= itemsToLoad; i++) {
            let div = document.createElement(`div`)
            div.className = `col-lg-4 col-sm-6 col-12 picture`
            div.innerHTML = `
                <figure class="image-wrapper">
                    <a href="images/${i}.jpg?image=${i}" data-toggle="lightbox" data-gallery="example-gallery" data-max-width="1400" data-max-height="840">
                        <img src="images/${i}.jpg" class="img-fluid img-bkg" alt="gallery-image${i}">
                    </a>
                </figure>
            `
            row.appendChild(div)
        }
    }


})