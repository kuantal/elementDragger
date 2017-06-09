
$.fn.attachDragger = function () {

    var attachment = false, lastPosition, position, difference;
    $(this).addClass('dragger-added');
    $($(this).selector).on('mousedown mousemove touchstart touchmove', function (e) {
        var clientEvent = e.type == 'touchstart' || e.type == 'touchend' || e.type == 'touchmove' ?
            [e.originalEvent.touches[0].pageX, e.originalEvent.touches[0].pageY] :
            [e.clientX, e.clientY];
        var dragStart   = e.type == 'mousedown' || e.type == 'touchstart';
        var dragEnd     = e.type == 'mouseup' || e.type == 'touchend';
        var drag        = e.type == 'mousemove' || e.type == 'touchmove';
        if (dragStart) attachment = true, lastPosition = clientEvent;
        if (dragEnd) attachment = false;
        if (drag && attachment == true) {
            position   = clientEvent;
            difference = [(position[0] - lastPosition[0]), (position[1] - lastPosition[1])];
            $(this).scrollLeft($(this).scrollLeft() - difference[0]);
            $(this).scrollTop($(this).scrollTop() - difference[1]);
            lastPosition = clientEvent;
        }
    });

    $(window).on('mouseup touchend', function () {
        attachment = false;
    });
};