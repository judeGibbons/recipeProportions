var recipeProportionsModule = recipeProportionsModule || {};

recipeProportionsModule.compareProportions = function () {

  //add event listener to button; set up canvas

  document.addEventListener("DOMContentLoaded", function(event) {

    if (document.getElementById("saveIngredientButton").addEventListener) {
      (document.getElementById("saveIngredientButton")).addEventListener('click', submitParameters, false);
    } else {
    if (document.getElementById("saveIngredientButton").attachEvent) {
      (document.getElementById("saveIngredientButton")).attachEvent('onclick', submitParameters);
      };
    };

    canvas = document.getElementById("recipeBar");
      if (canvas.getContext) {
      ctx = canvas.getContext('2d');
    }; 

  });

  var totalBarLength = 600; //needs to match width of canvas - use variable?
  var totalAmount = 0;
  var recipeProportions = [];
  var enteredIngredients = [];
  var canvas, ctx;

  //submit form data, check it's not repeated

  function submitParameters(event) {
  //need check for nonsense/blank values - one stray char will break whole array, blank form gives NaN
    var ingredient = (document.getElementById("ingredient").value);
    var count = (document.getElementById("count").value);
    var units = (document.getElementById("units").value);
    (event.preventDefault) ? event.preventDefault() : event.returnValue = false;

    var entered = false;
    
    function checkEntered() {
    //checkEntered = function() {
      for (var i=0, maxi=enteredIngredients.length; !entered && i<maxi; i++) {
        if (enteredIngredients.indexOf(ingredient) > -1) {
          entered = true;
        };
      };
    };
    
    checkEntered(); //global here if I use "checkEntered = function()"
    // not if I use "function checkEntered()"

    if (entered == true) {
      console.log("You have already listed this ingredient.");
    } else {
      console.log("not listed");
      enteredIngredients.push(ingredient); 
      normaliseAmount(ingredient,count,units);
    }; 

  };

  //make units comparable
  function normaliseAmount(ingredient,count,units) {
    var normalisedAmount = count; //do something with units here
    createObject(ingredient,normalisedAmount,count,units);
  };

  //create the ingredients object
  function createObject(ingredient,normalisedAmount,count,units) {

    var ingredientObject = {};

    ingredientObject.ingredient = ingredient;
    ingredientObject.normalisedAmount = +normalisedAmount;
    ingredientObject.count = +count;
    ingredientObject.units = units;

    recipeProportions.push(ingredientObject);

    totalAmount += ingredientObject.normalisedAmount;

    //recipeProportionsModule.displayBar.drawBar(recipeProportions,totalAmount);
  };


/*
  //draw the canvas bar display
  function drawBar(recipeProportions,totalAmount) {

    ctx.clearRect(0, 0, 600, 20);
    var barLength, barOffset=0;

    for (var i=0, maxi=recipeProportions.length; i<maxi; i++) {

      recipeProportions[i].barLength = Math.round((recipeProportions[i].normalisedAmount/totalAmount) * totalBarLength);
      //temporary colours - should be colourcoded by ingredient
      if (i==0) {
        ctx.fillStyle = "#00ff00";
      } else if (i==1) {
        ctx.fillStyle = "#ff0000";
      } else if (i==2) {
        ctx.fillStyle = "#0000ff";
      } else if (i==3) {
        ctx.fillStyle = "#ff00ff";
      }; 

      ctx.fillRect(barOffset,0,recipeProportions[i].barLength,20);

      barOffset += recipeProportions[i].barLength;

      //console.log(recipeProportions);
    }
  };*/

  console.log(canvas);

  //displayWhenFeedLoaded = function(result) {
  recipeProportionsDisplay = new recipeProportionsModule.displayBar();
  recipeProportionsDisplay.drawBar(recipeProportions,totalAmount,canvas,ctx);
  //set error or loading message here
//};


}();