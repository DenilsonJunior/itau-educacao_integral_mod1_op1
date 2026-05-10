events.on('ready', function () {
    $('.topicos').each(function() {
        var $parent = $(this);
        var $buttons = $parent.find('[class^="tp"]');
        var $boxes = $parent.find('.box');

        $buttons.click(function() {
            var classList = $(this).attr('class').split(/\s+/);
            var targetNumber = "";
            
            $.each(classList, function(index, item) {
                if (item.startsWith('tp')) {
                    targetNumber = item.replace('tp', '');
                }
            });

            $buttons.removeClass('active');
            $boxes.hide().removeClass('active');

            $(this).addClass('active');
            $parent.find('.boxtp' + targetNumber).fadeIn().addClass('active');
        });
    });

    $('.card-container').click(function() {
        $(this).toggleClass('flipped');
    });
});