// Slider
let slideCounter = 0

var isAutoSlide = true

var countElement = $('#container > img').length

const windowLoad = setInterval(function(){

    if(isAutoSlide){

        slideCounter++
        $('#container').css({transform: "translateX("+ -slideCounter * 100 +"%)"})
        $('#container').css({transition: "all 1s"})

        if(slideCounter==countElement){
            window.location.reload()
        }
    }

      
}, 5000)


$('#next').click(function(){
   
    isAutoSlide = false
  
    if(slideCounter>=(countElement - 2)){
        $('#next').prop("disabled", true);
      
    }

    if(slideCounter <= (countElement - 2)){
        slideCounter++
        $('#container').css({transform: "translateX("+ -slideCounter * 100 +"%)"})
        $('#container').css({transition: "all 1s"})

    }
   
    console.log("Next " + slideCounter)
    $('#prev').prop("disabled", false);

})

$('#next').mouseleave(function(){
    isAutoSlide = true
})

$('#prev').click(function(){
   
    isAutoSlide = false
    if(slideCounter==0){
        $('#prev').prop("disabled", true);
        slideCounter=1
    }

    slideCounter--
    $('#container').css({transform: "translateX("+ -slideCounter * 100 +"%)"})
    $('#container').css({transition: "all 1s"})
    $('#next').prop("disabled", false);
    
   
    console.log("Prev " + slideCounter)

})

$('#prev').mouseleave(function(){
    isAutoSlide = true
})










