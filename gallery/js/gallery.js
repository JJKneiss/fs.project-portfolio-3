document.querySelector('h2').innerHTML = "Mental Health Exercises";
var index = 1;
var gallery = {
    imageIndex: [],
    newImage: [],
    newCaption: [],
    newDescription: []
}
var xhr = new XMLHttpRequest();
xhr.onload = function(){
    var data = JSON.parse(xhr.responseText);
    var gallerySection = document.querySelector("#gallery");
    if (gallerySection){
        for (var i = 0; i < data.gallery.length; i++) {
            gallery.imageIndex.push(data.gallery[i].id);
            gallery.newCaption.push(data.gallery[i].exercise);
            gallery.newImage.push(data.gallery[i].image);         
            gallery.newDescription.push(data.gallery[i].description);
        }
    }
    document.querySelector('img').width = 500;
    document.querySelector('img').height = 500;
    document.querySelector('img').alt = gallery.newCaption[index];
    document.querySelector('img').src = gallery.newImage[index];
    document.querySelector('h3').innerHTML = gallery.newCaption[index];
    document.querySelectorAll('p')[1].innerHTML = gallery.newDescription[index];
}

xhr.open('GET', 'http://JJKneiss.github.io/exercises.JSON', true);
xhr.send(null);

const previous = document.querySelectorAll('button');
if (previous)
{
    console.log(previous[0]);
    previous[0].addEventListener("click", previousImage);
}
const next = document.querySelectorAll('button');
if (next)
{
    console.log(next[1]);
    next[1].addEventListener("click", nextImage);
}
function previousImage(event){
    event.preventDefault();
    if (!(index > 0)) return
    index -= 1;
    document.querySelector('img').alt = gallery.newCaption[index];
    document.querySelector('img').src = gallery.newImage[index];
    document.querySelector('h3').innerHTML = gallery.newCaption[index];
    document.querySelectorAll('p')[1].innerHTML = gallery.newDescription[index];
}
function nextImage(event){
    event.preventDefault();
    if (!(index < 2)) return
    index += 1;
    document.querySelector('img').alt = gallery.newCaption[index];
    document.querySelector('img').src = gallery.newImage[index];
    document.querySelector('h3').innerHTML = gallery.newCaption[index];
    document.querySelectorAll('p')[1].innerHTML = gallery.newDescription[index];
}