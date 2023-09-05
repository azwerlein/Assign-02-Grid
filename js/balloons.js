$(function () {
    $('#birthday').pickadate({ format: 'mmmm, d' });
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
            $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });

    // Add a random attention seeker for the header
    $('#birthdayHeader').addClass('animate__'+ pickRandomAttentionSeeker());

    // Show and hide toast when no boxes are checked
    $('#submit').click(function () {
        if ($('.form-check-input:checked').length == 0) {
            $('#liveToast').toast({ autohide: false }).toast('show');
        }
    });

    // Hide toast on escape
    $(document).on('keydown', function (e) {
        if (e.key == 'Escape') {
            $('#liveToast').toast('hide');
        }
    });

    // Check/uncheck all
    $('#checkAll').click(function () {
        $('.form-check-input').each(function () {
            $(this).prop('checked', true);
        });
    });
    $('#uncheckAll').click(function () {
        $('.form-check-input').each(function () {
            $(this).prop('checked', false);
        });
    });

    //Hovering over the labels should change the color of the happy birthday
    $('[for=red]').hover(function () {
        $('#birthdayHeader').css('color', 'red');
    }, function () {
        $('h1').css('color', 'slategray');
    });

    $('[for=green]').hover(function () {
        $('h1').css('color', 'green');
    }, function () {
        $('h1').css('color', 'slategray');
    });

    $('[for=blue]').hover(function () {
        $('h1').css('color', 'blue');
    }, function () {
        $('h1').css('color', 'slategray');
    });

});

function pickRandomAttentionSeeker() {
    let num = Math.floor(Math.random() * 12);
    switch (num) {
        case 0:
            return 'bounce';
        case 1:
            return 'flash';
        case 2:
            return 'pulse';
        case 3:
            return 'rubberBand';
        case 4:
            return 'shakeX';
        case 5:
            return 'shakeY';
        case 6:
            return 'headShake';
        case 7:
            return 'swing';
        case 8:
            return 'tada';
        case 9:
            return 'wobble';
        case 10:
            return 'jello';
        case 11:
        default:
            return 'heartBeat';
    }
}