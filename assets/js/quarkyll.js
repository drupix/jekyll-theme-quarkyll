jQuery(document).ready(function($){

    //Smooth scroll to top
    $('.to-top').click(function(){
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        return false;
    });

    //Smooth scroll to footnotes
    $('.footnote').click(function(){
        var header_offset = 45;
        //var footnotes_y = $('.footnotes').offset().top;
        var toId = $(this).attr("href");
        toId = toId.replace(/:/g, "\\:");
        var toTop = $(toId).offset().top;
        window.scroll({ top: toTop - header_offset, left: 0, behavior: 'smooth' });
        return false;
    });

    $('.reversefootnote').click(function(){
        var header_offset = 45;
        var toId = $(this).attr("href");
        toId = toId.replace(/:/g, "\\:");
        var toTop = $(toId).offset().top;
        window.scroll({ top: toTop - header_offset, left: 0, behavior: 'smooth' });
        return false;
    });

    // Add active class to parent menu item
    var pMenu = $('.main-menu .menu-item a.active').parent().parent().parent();
    pMenu.children('a').addClass('active');
});
