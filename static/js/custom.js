// $(document).ready(function () {
//     $('.portfolio_list').magnificPopup({
//         delegate: 'a',
//         type: 'image',
//         tLoading: 'Loading image #%curr%...',
//         mainClass: 'mfp-img-mobile',
//         gallery: {
//             enabled: true,
//             navigateByImgClick: true,
//             preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
//         },
//         image: {
//             tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
//             titleSrc: function (item) {
//                 return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
//             }
//         }
//     });
// });
$(document).ready(function () {
    $('.portfolio_list a').on('click', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
        var _this = $(this);
        setTimeout(function () {
            $.magnificPopup.open({
                items: {
                    src: _this.attr('href'),
                    type: 'image'
                },
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                },
                closeOnContentClick: true,
                image: {
                    verticalFit: true
                }
            })
        }, 500)

    })
});