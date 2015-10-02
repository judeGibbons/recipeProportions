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

  canvas = document.getElementById("recipeBar");
    if (canvas.getContext) {
    ctx = canvas.getContext('2d');
  }; 

});


var totalBarLength = 600; //needs to match width of canvas - use variable?
var totalAmount = 0;
var recipeProportions = [];
var canvas, ctx;

function submitParameters(event) {
//need to check for nonsense values here - one stray char will break whole array
//clear form on reload?
  var ingredient = (document.getElementById("ingredient").value);
  var count = (document.getElementById("count").value);
  var units = (document.getElementById("units").value);
  (event.preventDefault) ? event.preventDefault() : event.returnValue = false;

  normaliseAmount(ingredient,count,units);
};

//runs each time ingredient entered
function normaliseAmount(ingredient,count,units) {
  var normalisedAmount = count; //do something with units here
  createObject(ingredient,normalisedAmount,count,units);
};

function createObject(ingredient,normalisedAmount,count,units) {

  var ingredientObject = {};

  ingredientObject.ingredient = ingredient;
  ingredientObject.normalisedAmount = +normalisedAmount;
  ingredientObject.count = +count;
  ingredientObject.units = units;

  recipeProportions.push(ingredientObject);

  totalAmount += ingredientObject.normalisedAmount;

  drawBar(recipeProportions,totalAmount);
};

function drawBar(recipeProportions,totalAmount) {

  ctx.clearRect(0, 0, 600, 20);
  var barLength, barOffset=0;

  for (i=0, maxi=recipeProportions.length; i<maxi; i++) {

    recipeProportions[i].barLength = Math.round((recipeProportions[i].normalisedAmount/totalAmount) * totalBarLength);

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
    }
};