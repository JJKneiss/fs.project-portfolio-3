document.querySelector('h2').innerHTML = 
"<strong>A La Carte </strong> Recipes";

var index = 1;
const apiKey = "572f9b42c48b46fdb51c720d96b43f5b";
var recipeIds = ["716427", "716429", "716430"];
const startURL = "https://api.spoonacular.com/recipes/";

getRecipes(index);

async function getRecipes(index){
    const endURL = recipeIds[index] + "/information?apiKey=" + apiKey;
    var url = startURL + endURL;
    const response = await fetch(url); 
    const data = await response.json();
    document.querySelector('img').width = 500;
    document.querySelector('img').height = 500;
    document.querySelector('img').src = data.image;
    document.querySelector('h3').innerHTML = data.title;
    var dd = document.querySelectorAll('dd');
    dd[0].innerHTML  = data.servings;
    dd[1].innerHTML = data.readyInMinutes;
}