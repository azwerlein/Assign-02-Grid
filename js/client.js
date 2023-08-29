$(function () {
    // preload audio
    var toast = new Audio('toast.wav');
    $('.code').on('click', function (e) {
        let name = $(this).data('product');
        let code = $(this).data('code');
        e.preventDefault();
        toast.pause();
        toast.currentTime = 0;
        // play audio
        toast.play();

        $('#productName').text(name);
        $('#code').text(code);
        $('#liveToast').toast({ autohide: false }).toast('show');
    });
    // Hide toast on escape
    $(document).on('keydown', function (e) {
        if (e.key == 'Escape') {
            $('#liveToast').toast('hide');
        }
    });
});