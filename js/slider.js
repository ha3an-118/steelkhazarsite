$(document).ready(function(){
    var slideElm=$('[slide="slider"]');
    var i=0;
    var j=0;
    var imageArray;
    for(i=0;i<slideElm.length;i++) {
        imageArray=$(slideElm[i]).find("[tag='image'] img");
            alert(imageArray.length);
        for(j=0;j<imageArray.length;j++){
            console.log(imageArray[j]);
            $(imageArray[j]).hide();
            }
        console.log("echo find");
        $(slideElm[i]).find("[tag='image'] img.show").show();
        }
    




});
