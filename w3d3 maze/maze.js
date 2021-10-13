$(function() {
    let start=false;
    let lost=false;
    let count=0;
    $("#start").click(function(){
      start=true;
      lost=false;
      $(".boundary").removeClass("youlose");
      $(".boundary").mouseenter(function(){
          count=1;
            lost=true;
            $(".boundary").addClass("youlose");
            console.log(lost);
            // preventDefault();
      })
      $("#maze").mouseleave(function(){
          $(".boundary").addClass("youlose");      
      })
      $("#end").mouseover(function(){
          console.log(start +" "+ lost);
          if(start && !lost){
          location.reload(true);
          alert("you won the game!");
          preventDefault();
          location.reload(true);
          }
    })
    $("#end").mouseleave(function(){
        
    })
    })   
})
