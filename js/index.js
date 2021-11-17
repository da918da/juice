// DOM 載入完成後執行
$(function(){
  
    // 點擊按鈕，頁面滑到最上方
    $("#go_top").on("click", function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
    });
    
  });



  //slick輪播

  $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });