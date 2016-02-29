$(document).ready(function(){
    $('.slider4').bxSlider({
        slideWidth: 300,
        minSlides: 2,
        maxSlides: 5,
        moveSlides: 1,
        slideMargin: 10
    });
    $('#btn').click(function() {
        var a = $('#email').val();
        var b = JSON.stringify(a);
        alert( b );
    });
});

//Share
var Share = {
    vkontakte: function(purl, ptitle, pimg, text) {
        var url  = 'http://vk.com/share.php?';
        url += 'url='          + encodeURIComponent(purl);
        url += '&title='       + encodeURIComponent(ptitle);
        url += '&description=' + encodeURIComponent(text);
        url += '&image='       + encodeURIComponent(pimg);
        url += '&noparse=true';
        Share.popup(url);
    },
    facebook: function(purl, ptitle, pimg, text) {
        var url  = 'http://www.facebook.com/sharer.php?s=100';
        url += '&p[title]='     + encodeURIComponent(ptitle);
        url += '&p[summary]='   + encodeURIComponent(text);
        url += '&p[url]='       + encodeURIComponent(purl);
        url += '&p[images][0]=' + encodeURIComponent(pimg);
        Share.popup(url);
    },
    googlePlus: function(purl, ptitle, pimg, text) {
        var url  = 'https://plus.google.com/share?';
        url += '&p[title]='     + encodeURIComponent(ptitle);
        url += '&p[summary]='   + encodeURIComponent(text);
        url += '&p[url]='       + encodeURIComponent(purl);
        url += '&p[images][0]=' + encodeURIComponent(pimg);
        Share.popup(url);
    },

    popup: function(url) {
        window.open(url,'','toolbar=0,status=0,width=626,height=436');
    }
};