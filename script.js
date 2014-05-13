$(document).ready(function () {
    
    $("#photo").css("height", $(window).height());
    $("#bio").css("height", $(window).height());
    $("#video").css("height", $(window).height());

    //GALLERY
    var picsRight = [], picsLeft = [];
    var i = 0;
    picsRight[0] = "http://i.imgur.com/s9JUl4u.jpg";
    picsRight[1] = "http://i.imgur.com/CPJcZWo.jpg";
	picsRight[2] = "http://i.imgur.com/PkBQBiR.jpg";
	picsRight[3] = "http://i.imgur.com/VtLcCtB.jpg";
	picsRight[4] = "http://i.imgur.com/11IPzJQ.jpg";
	picsRight[5] = "http://i.imgur.com/ByNF9tQ.jpg";
	
	
    picsLeft[0] = "http://i.imgur.com/jHnDSh4.jpg";
    picsLeft[1] = "http://i.imgur.com/ZtJ7j7J.jpg";
	picsLeft[2] = "http://i.imgur.com/bNVHoQL.jpg";
	picsLeft[3] = "http://i.imgur.com/5Xxi9mU.jpg";
	picsLeft[4] = "http://i.imgur.com/dwHQohl.jpg";
	picsLeft[5] = "http://i.imgur.com/dlfVjNB.jpg";
	
	

    $("#rightArrow").click(function () {

        if (navigator.product == 'Gecko') {
            for (i = 0; i <= 6; i++) {
                if ($("#rightPhoto").css("background-image") == 'url("' + picsRight[i] + '")') {
                    if (i == 5) {
                        $("#rightPhoto").css("background-image", 'url("' + picsRight[0] + '")');
                        break;
                    }
                    $("#rightPhoto").css("background-image", 'url("' + picsRight[i + 1] + '")');
                    break;
                }
            }
        }

        for (i = 0; i <= 6; i++) {  
            if ($("#rightPhoto").css("background-image") == 'url(' + picsRight[i] + ')') {
                if (i == 5) {
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
            for (i = 0; i <= 6; i++) {
                if ($("#leftPhoto").css("background-image") == 'url("' + picsLeft[i] + '")') {
                    if (i == 5) {
                        $("#leftPhoto").css("background-image", 'url("' + picsLeft[0] + '")');
                        break;
                    }
                    $("#leftPhoto").css("background-image", 'url("' + picsLeft[i + 1] + '")');
                    break;
                }
            }
        }

        for (i = 0; i <= 6; i++) {
            if ($("#leftPhoto").css("background-image") == 'url(' + picsLeft[i] + ')') {
                if (i == 5) {
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