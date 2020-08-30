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

const previous = document.querySelectorAll('button');
if (previous)
{
    console.log(previous[0]);
    previous[0].addEventListener("click", previousRecipe);
}
const next = document.querySelectorAll('button');
if (next)
{
    console.log(next[1]);
    next[1].addEventListener("click", nextRecipe);
}
function previousRecipe(event){
    event.preventDefault();
    if (!(index > 0)) return
    index -= 1;
    getRecipes(index);
}
function nextRecipe(event){
    event.preventDefault();
    if (!(index < 2)) return
    index += 1;
    getRecipes(index);
}
