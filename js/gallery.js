window.addEventListener('load', function () {

    //Gestion lightbox
    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
        event.preventDefault()
        $(this).ekkoLightbox()
    });


    let windowHeight = window.innerHeight
    const row = document.querySelector(`#images-wrapper`)
    const maxItems = 42
    let itemsToLoad = 12
    let i = 1;
    let step = 150
    
    loadItems(i, itemsToLoad)

    window.addEventListener('scroll', function(){
        changeValue(i)
    })

    function changeValue(i){
        if (itemsToLoad < maxItems)  {
            if (window.scrollY > step) {
                step = step + 150
                i = itemsToLoad + 1
                itemsToLoad = itemsToLoad + 3
                loadItems(i, itemsToLoad)
            }
        }
        else{
            window.removeEventListener("scroll", changeValue)
        }
    }

    //Gestion de la galerie
    function loadItems(i, itemsToLoad) {
        for (i; i <= itemsToLoad; i++) {
            let div = document.createElement(`div`)
            div.className = `col-lg-4 col-sm-6 col-12 picture`
            div.innerHTML = `
                <figure>
                    <a href="images/${i}.jpg?image=${i}" data-toggle="lightbox" data-gallery="example-gallery" data-max-width="1400" data-max-height="840">
                        <img src="images/${i}.jpg" class="img-fluid  img-bkg" alt="gallery-image${i}">
                        <i class="fas fa-plus"></i>
                    </a>
                </figure>
            `
            row.appendChild(div)
        }
        return i
    }
})