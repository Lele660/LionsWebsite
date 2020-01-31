var slideIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    
    //Carousel init
    let carousels = document.querySelectorAll('.carousel')
    M.Carousel.init(carousels, {
        fullWidth:true,
        duration:100,
        onCycleTo: function (data) {
            slideIndex = data.getAttribute('data-index')
            console.log(slideIndex)
        }
    })

    //Disable manual dragging to slide by removing event listeners for mouse actions
    for(let i = 0; i < carousels.length; i++) {
        let carouselInstance = M.Carousel.getInstance(carousels[i])

        carousels[i].removeEventListener('mousedown', carouselInstance._handleCarouselTapBound)
        carousels[i].removeEventListener('mousemove', carouselInstance._handleCarouselDragBound)
        carousels[i].removeEventListener('mouseup', carouselInstance._handleCarouselReleaseBound)
        carousels[i].removeEventListener('mouseleave', carouselInstance._handleCarouselReleaseBound)
        carousels[i].removeEventListener('click', carouselInstance._handleCarouselClickBound)
    }

    //Dropdown init
    let dropdown = document.querySelectorAll('.dropdown-trigger')
    M.Dropdown.init(dropdown, {
        hover:true
    });

    //sidenav init
    let mobile = document.querySelectorAll('.sidenav')
    M.Sidenav.init(mobile, {

    })

    //material box init
    let materialBox = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(materialBox, {

    })

    //collapsible init
    let collapsible = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsible, {
        inDuration: 1000,
        accordion: false
    });

    //modal init
    let modal = document.querySelectorAll('.modal')
    M.Modal.init(modal, {

    })
})