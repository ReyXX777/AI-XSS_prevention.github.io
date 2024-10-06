// Wait for DOM content to load
document.addEventListener("DOMContentLoaded", function() {

    // Initialize PhotoSwipe
    const photoswipeElements = document.querySelectorAll('.photoswipe');
    photoswipeElements.forEach(function (element) {
        element.addEventListener('click', function (event) {
            event.preventDefault();
            const items = [{ src: this.href, w: 600, h: 400 }];
            const pswpElement = document.querySelectorAll('.pswp')[0];
            const gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items);
            gallery.init();
        });
    });

    // Initialize Magnific Popup
    $('.magnific').magnificPopup({ type: 'image' });

    // Initialize Swipebox
    $('.swipebox').swipebox();

    // Initialize VenoBox
    $('.venobox').venobox();

    // Initialize lightGallery
    lightGallery(document.querySelector('.lightgallery'), {
        mode: 'lg-fade',
        cssEasing: 'ease'
    });

    // Button hover animations
    const buttons = document.querySelectorAll('.button-group button');
    buttons.forEach(function(button) {
        button.addEventListener('mouseenter', function() {
            button.style.transform = 'scale(1.1)';
        });
        button.addEventListener('mouseleave', function() {
            button.style.transform = 'scale(1)';
        });
    });

    // Icon button (trash icon) click functionality
    const iconButton = document.querySelector('.icon-button');
    iconButton.addEventListener('click', function() {
        alert('Icon button clicked! Performing delete action...');
    });

});
