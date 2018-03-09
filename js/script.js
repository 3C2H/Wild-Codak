window.onload = function(){
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault()
        $(this).ekkoLightbox()
    });
    const currentPage = document.body.id
    const itemMenu = `menu-${currentPage}`
    const currentItem = document.querySelector(itemMenu)
    console.log(currentItem)
    itemMenu.addClassName = 'active'
    // switch (currentPage){
    //     case 'home' :

    //     break;
    //     case 'galery' :
    //     break;  
    //     case 'stories' :
    //     break;  
    //     case 'contact' :
    //     break;  
    // }
}