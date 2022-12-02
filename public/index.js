//hover for social networks
$(document).ready(
    function(){

$("#svg-f").hover(
function(){
    $("#svg-f").css("background", "#4267B2")
    $("#svg-f").find("path").css("fill", "#FFFFFF")
    },
function(){
    $("#svg-f").css("background", "none")
    $("#svg-f").find("path").css("fill", "#4267B2")
    }
)
$("#svg-s").hover(
function(){
    $("#svg-s").css("background", "#C13584")
    $("#svg-s").find("path").css("fill", "#FFFFFF")
    },
function(){
    $("#svg-s").css("background", "none")
    $("#svg-s").find("path").css("fill", "#4267B2")
    }
)
$("#svg-t").hover(
function(){
    $("#svg-t").css("background", "#1DA1F2")
    $("#svg-t").find("path").css("fill", "#FFFFFF")

    },
function(){
    $("#svg-t").css("background", "none")
    $("#svg-t").find("path").css("fill", "#4267B2")
    }
)
$("#svg-fo").hover(
function(){
    $("#svg-fo").css("background", "#FF0000")
    $("#svg-fo").find("path").css("fill", "#FFFFFF")
    },
function(){
    $("#svg-fo").css("background", "none")
    $("#svg-fo").find("path").css("fill", "#4267B2")
    }
)

//active for social networks
$("#svg-f").click(
function(){
    $("#svg-f").css("background", "#2F4A80")
  
    }
)
$("#svg-s").click(
function(){
    $("#svg-s").css("background", "#8F2762")

    }
)
$("#svg-t").click(
function(){
    $("#svg-t").css("background", "#177FBF")

}
)
$("#svg-fo").click(
function(){
    $("#svg-fo").css("background", "#CC0000")

}
)
//input focus
$("input").focus(
    function(){
$("#input").css("box-shadow", " 0px 30px 40px rgba(19, 24, 33, 0.06)")
    }
)
$("#input").hover(
    function(){
      $("#input").css("border-top", "2px solid #4066A5")
         $("#input").css("border-bottom", "2px solid #4066A5")
            $("#input").css("border-right", "2px solid #4066A5")
            $("#input").find("path").css("fill", "#4066A5")
            $("#input").find("path").css("opacity", "10")
    },
      function(){
      $("#input").css("border-top", "2px solid #FFFFFF")
         $("#input").css("border-bottom", "2px solid #FFFFFF")
            $("#input").css("border-right", "2px solid #FFFFFF")
            $("#input").find("path").css("fill", "black")
            $("#input").find("path").css("opacity", "0.3")
    }
)
var mailformat = "@gmail.com"
$("#input").find("svg").click(
    function(){
      
       if($("input").val().match(mailformat) && $("input:checkbox").is(":checked")){
     $("#input").css("border-top", "2px solid #FFFFFF")
         $("#input").css("border-bottom", "2px solid #FFFFFF")
            $("#input").css("border-right", "2px solid #FFFFFF")
            $("#input").find("path").css("fill", "black")
            $("#input").find("path").css("opacity", "0.3")
             $("#input").css("border-left", "5px solid #4066A5")
            $("#err").css("display", "none");
           window.open("thanks.html")
       }
       else{
      

                $("#input").css("border-top", "2px solid red")
         $("#input").css("border-bottom", "2px solid red")
            $("#input").css("border-right", "2px solid red")
             $("#input").css("border-left", "5px solid red")
                         $("#err").css("display", "block");
       }
       
    }
)




       
       
    
      

    })