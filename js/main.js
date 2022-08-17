
$(function(){
    var num = 0;
    var connum =  $('.cont.on progress').val();
    $('.tabtit p').text($('.cont progress').val()+'%');
    
    function counton(){
        sec = setInterval(count,15);
        }
    
    function count(){
        num ++;
        if(num>connum){
            clearInterval(sec);
            
        }else{
            if(num<10){
                $('.tabtit p').text('0'+num+'%');
            }else{
                $('.tabtit p').text(num+'%');
            }
        }
    
    } 

    
//탭버튼 클릭하면 progress 게이지 차오르고 숫자 상승
    $('.tab_button .tab').on('click',function() {
        var onTab = $(this).attr('data-tab');
        $('.cont').removeClass('on');
        $(this).addClass('on').siblings().removeClass('on');
        $('#' + onTab).addClass('on');

        $(this).children('span').stop().animate({
            width:'100%'
        })
        $(this).siblings().children('span').css({width:0})

        counton();
        connum =  $('.cont.on progress').val();
        num = 0 ;

        let prog = $('.cont.on progress').val();
        let defaultV = 0;
            function tag(){ 
                if(defaultV<prog){
                   defaultV++;
                    $('.cont.on progress').val(defaultV);  
                }else{
                    clearInterval(tag);
                }

            }
            setInterval(tag,15);
        })

    
        $('.mm_slide').slick({             
            slidesToShow : 1,// 화면에 보여지는 슬라이드 개수
            slidesToScroll: 1, 
            arrows : false, 
            dots: true, 
            infinite : true, 
            autoplay:true,
            autoplaySpeed:3000,
            appendDots:$('.port04_dots')
        });
        

        /* var myModal = new jBox('Modal', {
            content: 'This is my jBox'
          });
           
          myModal.open(); */
          /* 팝업창 */

          $('.probtn a').on('click',function(){
            event.preventDefault(); 
          });
          
        
          new jBox('Modal', {
            attach: '.btn01',
            width: 400,
            height:300,
            title: '성격단어1',
            position: {x: 1600, y: 100},
            target: '#detail_about',
            outside: 'x',
            overlay: false,
            content: '<img src="img/logo_color.png"> 인냥',
            draggable: 'title',
            repositionOnOpen: false,
            repositionOnContent: false
          });

          new jBox('Modal', {
            attach: '.btn02',
            width: 400,
            height:200,
            footer:'하하',
            position: {x: 1400, y: 300},
            title: '성격단어2',
            overlay: false,
            content: $('.modal01'),
            draggable: 'title',
            repositionOnOpen: false,
            repositionOnContent: false,
            
          });
          new jBox('Modal', {
            attach: '.btn03',
            width: 400,
            height:200,
            footer:'하하',
            position: {x: 1550, y: 500},
            title: '성격단어2',
            overlay: false,
            content: $('.modal01'),
            draggable: 'title',
            repositionOnOpen: false,
            repositionOnContent: false,
            
          });
          

          $('.pro_main .btn01 a').on('click',function(){
            character01.open();
          })
          
                    
            $('.port_slide').slick({             
                slidesToShow : 1,
                slidesToScroll: 1, 
                arrows : false, 
                dots: true, 
                infinite : true, 
                autoplay:true,
                autoplaySpeed:5000,
                draggable: false,
                pauseOnHover: false
            });

            $('.play').on('click',function(){
		        $('.port_slide').slick('slickPlay')
            });
            $('.pause').on('click',function(){
		        $('.port_slide').slick('slickPause')
            })

            /* 슬라이드시 색상 변경 */
            $('.port_slide').on('afterChange',function(currentSlide,event,slick){
                if($('.port_slide').slick('slickCurrentSlide')%2==0){
                    console.log('clear')
                    $('#portfolio .gnb li').css({
                        color:'#011722'
                    });
                    $('.header .sub_tit').css({
                        color:'#00334c'
                    });
                    $('#portfolio .bot_logo p').css({
                        color:'#004667'
                    });
                    $('#portfolio .bot_logo span').css({
                        borderColor:'#004667'
                    });
                    $('#portfolio .bot_logo div').css({
                        backgroundImage:'url(../img/logo_color.png)'
                    });
                }else if($('.port_slide').slick('slickCurrentSlide')%2 == 1){
                    $('#portfolio .gnb li').css({
                        color:'#f1f4f6'
                    });
                    $('.header .sub_tit').css({
                        color:'#97a5ae'
                    });
                    $('#portfolio .bot_logo p').css({
                        color:'#f1f4f6'
                    });
                    $('#portfolio .bot_logo span').css({
                        borderColor:'#f1f4f6'
                    });
                    $('#portfolio .bot_logo div').css({
                        backgroundImage:'url(../img/logo_white.png)'
                    });
                }
            });

})