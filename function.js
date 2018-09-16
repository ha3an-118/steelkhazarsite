$(document).ready(function(){
    $("#btn-nav").click(function(e){
        openSide();
        e.stopPropagation();
       });
    $("#exit").click(function(){
        closeSide();
        e.stopPropagation();
        });
    $(document.body).on('click',function(e){
        closeSide();
        });
    $("#nav-content").click(function(e){
        e.stopPropagation();
        });
   
    });

function closeSide(){
        $("body").animate({left:'0%'});
        $("#nav-content").removeClass("side-open").addClass("side-close"); 
    }
function openSide(){
        $("#nav-content").removeClass("side-close").addClass("side-open"); 
        $("body").animate({left:'80%'});
    }
