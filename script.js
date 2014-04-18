$(document).ready(function () {
    
    $("#photo").css("height", $(window).height());
    $("#bio").css("height", $(window).height());
    $("#video").css("height", $(window).height());

    //GALLERY
    var picsRight = [], picsLeft = [];
    var i = 0;
    picsRight[0] = "http://dentistfingersbird.kset.org/images/img02.jpg";
    picsRight[1] = "http://dentistfingersbird.kset.org/images/img04.jpg";
    picsLeft[0] = "http://dentistfingersbird.kset.org/images/img01.jpg";
    picsLeft[1] = "http://dentistfingersbird.kset.org/images/img03.jpg";

    $("#rightArrow").click(function () {

        if (navigator.product == 'Gecko') {
            for (i = 0; i <= 2; i++) {
                if ($("#rightPhoto").css("background-image") == 'url("' + picsRight[i] + '")') {
                    if (i == 1) {
                        $("#rightPhoto").css("background-image", 'url("' + picsRight[0] + '")');
                        break;
                    }
                    $("#rightPhoto").css("background-image", 'url("' + picsRight[i + 1] + '")');
                    break;
                }
            }
        }

        for (i = 0; i <= 2; i++) {  
            if ($("#rightPhoto").css("background-image") == 'url(' + picsRight[i] + ')') {
                if (i == 1) {
                    $("#rightPhoto").css("background-image", 'url(' + picsRight[0] + ')');
                    break;
                }
                $("#rightPhoto").css("background-image", 'url(' + picsRight[i + 1] + ')');
                break;
            }
        }
    });


    $("#leftArrow").click(function () {

        if (navigator.product == 'Gecko') {
            for (i = 0; i <= 2; i++) {
                if ($("#leftPhoto").css("background-image") == 'url("' + picsLeft[i] + '")') {
                    if (i == 1) {
                        $("#leftPhoto").css("background-image", 'url("' + picsLeft[0] + '")');
                        break;
                    }
                    $("#leftPhoto").css("background-image", 'url("' + picsLeft[i + 1] + '")');
                    break;
                }
            }
        }

        for (i = 0; i <= 2; i++) {
            if ($("#leftPhoto").css("background-image") == 'url(' + picsLeft[i] + ')') {
                if (i == 1) {
                    $("#leftPhoto").css("background-image", 'url(' + picsLeft[0] + ')');
                    break;
                }
                $("#leftPhoto").css("background-image", 'url(' + picsLeft[i + 1] + ')');
                break;
            }
        }
    });

});

$(window).resize(function () {

    $("#photo").css("height", $(window).height());
    $("#bio").css("height", $(window).height());
    $("#video").css("height", $(window).height());

});

function gotovideo() {
    $("html, body").animate({
        scrollTop: $("#video").offset().top
    }, 1500);
};

function gotophoto() {
    $("html, body").animate({
        scrollTop: $("#photo").offset().top
    }, 1500);
};

function gotobio() {
    $("html, body").animate({
        scrollTop: $("#bio").offset().top
    }, 1500);
};