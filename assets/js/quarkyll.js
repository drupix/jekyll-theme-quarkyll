
function scrollToLink(el){
    var header_offset = 45;
    var toId = el.attr("href");
    toId = toId.replace(/:/g, "\\:");
    var toTop = $(toId).offset().top;
    window.scroll({ top: toTop - header_offset, left: 0, behavior: 'smooth' });
    return false;
}


jQuery(document).ready(function($){

    // Smooth scroll to top
    $('.to-top').click(function(){
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        return false;
    });

    // Smooth scroll to link
    $('a.scroll-to-link').click(function(){
        scrollToLink($(this));
        return false;
    });

    // Smooth scroll to footnotes
    $('.footnote').click(function(){
        scrollToLink($(this));
        return false;
    });

    // Smooth scroll to notes
    $('.reversefootnote').click(function(){
        scrollToLink($(this));
        return false;
    });

    // Add active class to parent menu item
    var pMenu = $('.main-menu .menu-item a.active').parent().parent().parent();
    pMenu.children('a').addClass('active');
});
