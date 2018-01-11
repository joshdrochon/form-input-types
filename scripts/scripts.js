$(document).ready(function(){

    $("button#hello").click(function(){
      $("ul#user").prepend("<li>Hello!</li>");
      $("ul#web-page").prepend("<li>Hey, how are you?</li>");
      $("ul#user").children("li").first().click(function(){
        $(this).remove();
      });

      $("ul#web-page").children("li").first().click(function(){
        $(this).remove();
      });
    });

  $("button#goodbye").click(function(){
    $("ul#user").prepend("<li>Goodbye</li>");
    $("ul#web-page").prepend("<li>See ya!</li>");
    $("ul#user").children("li").first().click(function(){
      $(this).remove();
    });

    $("ul#web-page").children("li").first().click(function(){
      $(this).remove();
    });
  });

  $("button#stop").click(function(){
    $("ul#user").prepend("<li>Hey, stop bugging me!</li>");
    $("ul#web-page").prepend("<li>Sure thing, partner</li>");
    $("ul#user").children("li").first().click(function(){
      $(this).remove();
    });

    $("ul#web-page").children("li").first().click(function(){
      $(this).remove();
    });
  });



});
