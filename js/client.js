$(function () {
    // preload audio
    var toast = new Audio('toast.wav');
    $('.code').on('click', function (e) {
        e.preventDefault();
        toast.pause();
        toast.currentTime = 0;
        // play audio
        toast.play();
        $('#liveToast').toast({ autohide: false }).toast('show');
    });
    // Hide toast on escape
    $(document).on('keydown', function (e) {
        if (e.key == 'Escape') {
            $('#liveToast').toast('hide');
        }
    });
});