var random_result;
var lost = 0;
var win = 0;
var counter = 0;

var game = function (){
            
            $(".crystals").empty();


            var images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKYqs5SP0A9ZZbCHlCKds4eoX2ed1lQxL9YG4YH6PjjT839oTCTA",
             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkclq_qaRJeD_bnZKVqwKZS-o8sLmUbkAB0IyppjkOX9V9qWbrXw" ,
             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCsm2XtiyDkFw7dWh9mDT9Rb6zQdOxLOx2i3XEYu2yxWpt186M" ,
             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXuFubOQxjBlTnLL9mfTs-ryqOWaLJjBgpUzK0OXuzvoqMjzMm" ,]

            random_result = Math.floor(Math.random() * 120);

            $("#result").html("Computer Guess:  " + random_result);


for (var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 12);

    var crystal = $("<div>");
    crystal.attr({
        "class": "crystal",
        "data-random": random
        

    });
        crystal.css({
         "background-image":"url('" + images[i]  + "')" ,
        })

    $(".crystals").append(crystal);



}


        }
            game();


$(document).on('click' , ".crystal", function () {

    var number = parseInt($(this).attr("data-random"));
    
            counter += number;

            $("#counter").html( "Total score: " + counter);

            console.log(counter);

             if(counter > random_result ){

                 lost++;
                 $("#loss").html(" Losses: " + lost);

                 alert( "You lost try again!");
                    
                 $("#counter").html(counter);


                 counter = 0;

                game();


             }
             else if( counter === random_result){

                 win++;
                         alert("You won! Congratulations!");
                 $("#win").html(" Win(s): " +  win);

                 $("#counter").html(counter);

                 
                 counter = 0;

                    

                 game();

             }
    


});