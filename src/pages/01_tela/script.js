events.on('ready', function () {

    $(".completeScorm").isInViewportComplete({
      container: $(".mr-full"),
      call: function () {
        console.log("complete one-page");
        scorm.setCompleted();
      },
    });

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

    $('.boxMap .btn').click(function() {
        var $btnClicado = $(this);
        
        $btnClicado.removeClass('infinite');

        var match = $btnClicado.attr('class').match(/btn([A-E])/);
        if (!match) return;
        
        var letraAtual = match[1];
        
        $('.boxInfos' + letraAtual).removeClass('hide').fadeIn();

        var proximaLetra = String.fromCharCode(letraAtual.charCodeAt(0) + 1);
        var $proximoBtn = $('.btn' + proximaLetra);
        
        if ($proximoBtn.length) {
            $proximoBtn.removeClass('hide').addClass('pulse').fadeIn();
        }
    });
});