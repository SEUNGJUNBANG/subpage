 $(function(){
            $('.header .gnb > li').on('mouseenter', function(){
                $(this).find('.depth-02').stop().slideDown();
            })
            $('.header .gnb > li').on('mouseleave', function(){
                $(this).find('.depth-02').stop().slideUp();
            })
        });