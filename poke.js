
function searchPokemon(){
    
    var query=$('#pokeName').val();
    //incase if user types in caps
    var str = query.toLowerCase();
    
    var pokeDataURL = "http://pokeapi.co/api/v2/pokemon/" + str +"/" ;
    
    $.ajax({
        url: pokeDataURL,
        type: "GET",
        dataType: "json",
        success: function(data){
           
              var pName = data.name;
              var pHeight = data.height;
              var pokePic = data.sprites.front_default;
              var pWeight = data.weight;
  
              
              $(".out").html(pName);
              $(".normalForm").attr("src", pokePic);
              $(".stats").html("<p> Height: " + pHeight + " feet </p>" + "<p> Weight: " + pWeight + " lbs </p>");
              $(".types").html("Type(s): ");
              //loop through all types
              for (var i = 0; i < data.types.length; i++){
                var thisType = data.types[i].type.name;
                if( i == data.types.length - 1){
                  $(".types").append(" " + thisType + " ");
                }
                else{
                  $(".types").append(" " + thisType + ", ");
                }
              }
              //loop through all abilities
              $(".abilities").html("Abilities: ");
              for (var i = 0; i < data.abilities.length; i++){
                var thisAbility = data.abilities[i].ability.name;
                if(i == data.abilities.length - 1){
                  $(".abilities").append(" " + thisAbility + " ");
                }
                else{
                  $(".abilities").append(" " + thisAbility + ", ");
                }
              }
          
        }
        
              
            
        
    })
    
}
$('#inputForm').submit(function() {
  searchPokemon();
  return false;
  //stop submit button from refreshing the page
});




  






