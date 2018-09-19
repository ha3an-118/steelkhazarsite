//this variable for what pic is show in each slider
var picShowCont=[];
$(document).ready(function(){
    var sliders=$('[role="slider"]');
    var sliderImgs; //for get all images is on my slider
    var tempPush; //this is template var for push data in picShowCont
  //part one hide all pic in sliders
   var i,j;
   for(i=0;i<sliders.length;i++){
        sliderImgs=$(sliders[i]).find("[tag='image'] img");
        for(j=0;j<sliderImgs.length;j++){
            $(sliderImgs[j]).hide();
        }
        tempPush={id:$(sliders[i]).attr('id') , imgShow:0};
        picShowCont.push(tempPush);
        showImg($(sliders[i]).attr('id'),0);
    }
   $(sliders).find("li").click(function(){
       var sliderId=$(this).attr("targ");
       var imgNum=$(this).attr("targ-img");
       showImg(sliderId , imgNum);
       
       });
   $(sliders).find("[tag='control'] div").click(function(){
       var slidId=$(this).attr('targ');
       var slidAct=$(this).attr('act');
       switch(slidAct){
           case 'next':
                showNextImg(slidId);
                break;
            case 'prev':
                showPrevImg(slidId);
                break;
           
           }
       });
});
function showImg(sliderId ,imgNum ){
    var findIndex=findImgIndex(sliderId);
   var imgs=$("#"+sliderId).find("[tag='image'] img"); 
    markLiActive(sliderId,imgNum);
    $(imgs[picShowCont[findIndex].imgShow]).fadeOut(10);
    picShowCont[findIndex].imgShow=imgNum;
    $(imgs[imgNum]).fadeIn(100);
}
function showNextImg(sliderId){
    var findIndex=findImgIndex(sliderId);
    var imgNum=picShowCont[findIndex].imgShow;
    var numOfImg=$("#"+sliderId).find("[tag='image'] img").length;
    if(++imgNum<numOfImg)
        showImg(sliderId,imgNum);
    else
        showImg(sliderId,0);
    }
function findImgIndex(sliderId){
    var i=0;
    var findIndex;
    for(i=0;i<picShowCont.length;i++){
        if(picShowCont[i].id==sliderId){
            return i;
        }
    }
}
function showPrevImg(sliderId){
    var findIndex=findImgIndex(sliderId);
    var imgNum=picShowCont[findIndex].imgShow;
    var numOfImg=$("#"+sliderId).find("[tag='image'] img").length;
    if(--imgNum>=0)
        showImg(sliderId,imgNum);
    else
        showImg(sliderId,numOfImg-1);
    }
function markLiActive(sliderId,imgNum){
    var ulList=$("#"+sliderId).find("ul");
    var imgActive=findImgIndex(sliderId);
    var imgActiveNum=picShowCont[imgActive].imgShow;
    $(ulList).find("[targ-img='"+imgActiveNum+"']").removeClass('activeSlide');
    $(ulList).find("[targ-img='"+imgNum+"']").addClass('activeSlide');
    }


