var offset1 = 0;
var offset2 = 0;
var offset3 = 0;

$("h1").blast({
    delimiter: "character"
});

setTimeout(function() {

    var $spans = $("#top").find('span');

    $spans.each(function() {

        offset1 += 40;

        $(this).velocity({
            translateY: -100,
            opacity: 1
        }, {
            delay: offset1,
            duration: 800,
            easing: "easeOutBack"
        });
    });
}, 0);

setTimeout(function() {

    var $spans = $("#middle").find('span');

    $spans.each(function() {

        offset2 += 40;

        $(this).velocity({
            translateY: -100,
            opacity: 0.8
        }, {
            delay: offset2,
            duration: 800,
            easing: "easeOutBack"
        });
    });
}, 100);

setTimeout(function() {

    var $spans = $("#bottom").find('span');

    $spans.each(function() {

        offset3 += 40;

        $(this).velocity({
            translateY: -100,
            opacity: 0.8
        }, {
            delay: offset3,
            duration: 800,
            easing: "easeOutBack"
        });
    });
}, 150);