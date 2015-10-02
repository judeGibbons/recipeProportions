var recipeProportionsModule = recipeProportionsModule || {};

//recipeFinderModule.loadRecipes = function () {

  document.addEventListener("DOMContentLoaded", function(event) { 

    if (document.getElementById("saveIngredientButton").addEventListener) {
      (document.getElementById("saveIngredientButton")).addEventListener('click', submitParameters, false);
    } else {
    if (document.getElementById("saveIngredientButton").attachEvent) {
      (document.getElementById("saveIngredientButton")).attachEvent('onclick', submitParameters);
      };
    };

  });


  var totalBarLength = 600; //needs to match width of canvas - use variable?
  var totalAmount = 0;
  var recipeProportions = [];
  var canvas;

  function submitParameters(event) {
  //need to check for nonsense values here
    var ingredient = (document.getElementById("ingredient").value);
    var count = (document.getElementById("count").value);
    var units = (document.getElementById("units").value);
    (event.preventDefault) ? event.preventDefault() : event.returnValue = false;

    normaliseAmount(ingredient,count,units);
  }

//runs each time ingredient entered
  function normaliseAmount(ingredient,count,units) {

    var normalisedAmount = count; //do something with units here
    var ingredientObject = {};

    ingredientObject.ingredient = ingredient;
    ingredientObject.normalisedAmount = +normalisedAmount;
    ingredientObject.count = +count;
    ingredientObject.units = units;

    recipeProportions.push(ingredientObject);

    totalAmount += ingredientObject.normalisedAmount; //increases every time, maybe move?

    drawBar(ingredientObject,totalAmount);
  };

  //this is recalculated every time, 
  function drawBar(ingredientObject,totalAmount) {
    for (i=0, maxi=recipeProportions.length; i<maxi; i++) {
      var barLength;
      recipeProportions[i].barLength = Math.round((recipeProportions[i].normalisedAmount/totalAmount) * totalBarLength);
    
      console.log(recipeProportions);
  
      canvas = document.getElementById("recipeBar");
      if (canvas.getContext) {
        var ctx = canvas.getContext('2d');  
        ctx.clearRect(0, 0, 600, 20);  //do i need to redeclare these each time?
        if (i==0) {
          ctx.fillStyle = "#00ff00";
        } else if (i==1) {
          ctx.fillStyle = "#ff0000";
        } else if (i==2) {
          ctx.fillStyle = "#0000ff";
        } else if (i==3) {
          ctx.fillStyle = "#ff00ff";
        }; 
        /*
        if (i==1) {
          ctx.fillStyle = "#00ff00";
        } else {
          ctx.fillStyle = "transparent";
        };


        if (i%2==0) {
          ctx.fillStyle = "#00ff00";
        } else {
          ctx.fillStyle = "#ff0000";
        };*/
        
        ctx.fillRect(0,0,recipeProportions[i].barLength,20);
        //first 0 has to change to ...[i-1].barLength
        //needs to redraw
        console.log(recipeProportions[i].barLength);
      }
    }
  };



/*
currently, 100, 200, 300, 400
produces a line with = 
100
200, 100
300, 100, 200
400, 100, 200, 300
*/