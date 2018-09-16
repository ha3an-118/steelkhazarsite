$(document).ready(function(){
    var slideElm=$('[slide="slider"]');
    var i=0;
    var j=0;
    var imageArray;
    for(i=0;i<slideElm.length;i++) {
        imageArray=$(slideElm[i]).find("[tag='image'] img");
        for(j=0;j<imageArray.length;j++){
            $(imageArray[j]).hide();
            }
        $(slideElm[i]).find("[tag='image'] img.show").show();
    }
    var sliderName;
    var slideNum;
    var temp;
    $(slideElm).find("li").click(function(){
        sliderName=$(this).attr("targ");
        slideNum=$(this).attr("targ-img");
        temp= $(sliderName).find("[tag='image'] img ");
        for(i=0;i<temp.length;i++){
            $(temp[i]).hide();
            }
        $(temp[slideNum]).show();
        });
});

