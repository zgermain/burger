

$(document).ready(()=>{

  //change devour state on click
  $(".devour-switch").on("click", function(event) {
    const id = $(this).data("id");
    const newDevour = $(this).data("devoured");
    console.log("devour-state: "+newDevour)

    const newDevourState = {
      devoured: newDevour
    };
  
    //AJAX call to Controller
    $.ajax("/api/burgers/"+id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log(`devour changed to, ${newDevour}`);
        location.reload();
      }
    )
  });

  $(".burger-form").on("submit",(event)=>{
    event.preventDefault();

    const newBurger = {name: $("#new-burger").val().trim()};

    //AJAX call to Controller
    $.ajax("api/burgers", {
      type:"POST",
      data: newBurger
    }).then(
      function() {
        console.log("created a burger!");
        //This reloads the page so that you can see the result
        location.reload();
      }
    );
  });
});
