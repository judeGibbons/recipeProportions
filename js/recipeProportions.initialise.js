var recipeProportionsModule = recipeProportionsModule || {};

if (window.addEventListener) {
  window.addEventListener('DOMContentLoaded', init, false);
} else if (window.attachEvent) {
  if ( document.documentElement.doScroll && !isFrame ) {
    function tryScroll(){
      if (called) return
      try {
        document.documentElement.doScroll("left")
        ready()
      } catch(e) {
        setTimeout(tryScroll, 10)
      }
    }
    tryScroll()
  }
};

function init() {
  console.log("init");
  initBrowserEvents();

};



//recipeProportionsModule.init = function () {


  //initScreen();
  //grabAjaxData(); //get json bits


//}; 

function initBrowserEvents() {
console.log("initBrowserEvents");

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

  //var recipeProportionsCompareProportions = new recipeProportionsModule.compareProportions();
  //recipeProportionsModule.somethingElse();

};

  recipeProportionsModule.compareProportions();

//displayWhenFeedLoaded = function(result) {

  //set error or loading message here
//};

//recipeProportionsModule.init();

