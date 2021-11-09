$("a.move").on("click", function(e){
    e.preventDefault();
  
    let page_item_offset_top = $("#" + $(this).attr("data-id")).get(0).offsetTop;
  
    console.log(page_item_offset_top);
  
    $(".scroll-container").animate({
      scrollTop: page_item_offset_top
    }, 500);
  
  });