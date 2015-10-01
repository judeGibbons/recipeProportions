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
var context;



function submitParameters() {
//need to check for nonsense values here
  var ingredient = (document.getElementById("ingredient").value);
  var count = (document.getElementById("count").value);
  var units = (document.getElementById("units").value);
  (event.preventDefault) ? event.preventDefault() : event.returnValue = false;
}

//runs each time ingredient entered
function normaliseAmount(ingredient,count,units) {

  //(event.preventDefault) ? event.preventDefault() : event.returnValue = false;
  //just deals with one ingredient
  var normalisedAmount = count; //do something with units here

  var ingredientObject = {};

  //recipeArray.push(normalisedAmount);
  ingredientObject.ingredient = ingredient;
  ingredientObject.normalisedAmount = normalisedAmount;
  ingredientObject.count = count;
  ingredientObject.units = units;

  recipeProportions.push(ingredientObject);

  totalAmount += ingredientObject.normalisedAmount;

  console.log(totalAmount);


  calculateBarLength(ingredientObject,totalAmount);
};



function calculateBarLength(ingredientObject,totalAmount) {

  for (i=0, maxi=recipeProportions.length; i<maxi; i++) {

      var barLength;

  recipeProportions[i].barLength = Math.round((recipeProportions[i].normalisedAmount/totalAmount) * totalBarLength);

  console.log(recipeProportions[i]);

    };

    drawBar(ingredientObject,totalAmount);

  };

function drawBar(ingredientObject,totalAmount) {

  canvas = document.getElementById("recipeBar");
  context = canvas.getContext('2d');

}
/*
normaliseAmount("flour",400,"grammes");
//normaliseAmount("sugar",300,"grammes");
normaliseAmount("eggs",200,"grammes");
normaliseAmount("butter",100,"grammes");
*/