
function searchPokemon(){
    
    var query=$('#pokeName').val();
    //$("#this").html(query);
    var pokeDataURL = "http://pokeapi.co/api/v2/pokemon/" + query +"/" ;
    //$("#this").html(pokeDataURL);
    $.ajax({
        url: pokeDataURL,
        type: "GET",
        dataType: "json",
        success: function(data){
            var pName = data.name;
            var pHeight = data.height;
            var pokePic = data.sprites.front_default;
            var pWeight = data.weight;
            var pType = data.types;
            $(".out").html(pName);
            //$(".this").html("Height: " + pHeight + "\n" + "Weight: " + pWeight + "\n");
            $(".pimageForm").attr("src", pokePic);
            $(".stats").html("<p> Height: " + pHeight + " feet </p>" + "<p> Weight: " + pWeight + " lbs </p>");
            for (var i = 0; i < data.types.length; i++)
              $(".types").html(data.types[i].name);
        }
    })
    
}
$('#inputForm').submit(function() {
  searchPokemon();
  return false;
  //stop submit button from refreshing the damn page
});




  






