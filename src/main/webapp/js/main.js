
$(function(){
    function fadeElement(element,timeOne,timeTwo){
       $(element).fadeTo(timeOne,timeTwo);
    }
    function slideUpDown(element,timeOne,timeTwo){
        $(element).slideUp(timeOne).slideDown(timeTwo);
    }
    slideUpDown("h1",2000,4000);
});