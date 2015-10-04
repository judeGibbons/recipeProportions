var recipeProportionsModule = recipeProportionsModule || {};

recipeProportionsModule.init = function () {
  
  initBrowserEvents();
  //initScreen();
  //grabAjaxData(); //get json bits






}(); 

function initBrowserEvents() {

  document.addEventListener("DOMContentLoaded", function(event) {

    if (document.getElementById("saveIngredientButton").addEventListener) {
      (document.getElementById("saveIngredientButton")).addEventListener('click', recipeProportionsModule.submitParameters, false);
    } else {
    if (document.getElementById("saveIngredientButton").attachEvent) {
      (document.getElementById("saveIngredientButton")).attachEvent('onclick', recipeProportionsModule.submitParameters);
      };
    };

    recipeProportionsModule.canvas = document.getElementById("recipeBar");
    recipeProportionsModule.canvas.width = recipeProportionsModule.totalBarLength;
    recipeProportionsModule.canvas.height = recipeProportionsModule.barHeight;
      if (recipeProportionsModule.canvas.getContext) {
      recipeProportionsModule.ctx = recipeProportionsModule.canvas.getContext('2d');
    }; 

  });

  var recipeProportionsCompareProportions = new recipeProportionsModule.compareProportions();
  recipeProportionsCompareProportions.compareProportions();

};

//displayWhenFeedLoaded = function(result) {

  //set error or loading message here
//};

//recipeProportionsModule.init();

