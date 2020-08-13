document.querySelector("#blog h2").innerHTML = "Recent <strong>Exercises</strong>";
var xhr = new XMLHttpRequest();
xhr.onload = function() {
    var data = JSON.parse(xhr.responseText);
    var blogSection = document.querySelector("#blog");
    if (blogSection) {
        var blog = '';
        for (var i = 0; i < data.blog.length; i++) {
            blog += '<article>';
            blog += '<p class = "thumbnail"> <img src = "' + data.blog[i].image + '" alt="' + data.blog[i].exercise + '" width="50" height="60"></p>';
            blog += '<h3>' + data.blog[i].exercise +'</h3>';
            //blog += '<h4 class="blog">'+ data.blog[i].link + '</h4>';
            blog += '<br><p><a href="'+data.blog[i].link+'">Source</a></p>';
            blog += '<p>' + data.blog[i].description + '</p>';
            blog += '<dl>';
                blog += '<dt> Estimated Time</dt>';
                blog += '<dd>' + data.blog[i].time + ' minutes</dd>';

                blog += '<dt> Repetitions</dt>';
                blog += '<dd>' + data.blog[i].repetitions + ' sets</dd>';
                
                blog += '<dt> Uploaded</dt>';
                blog += '<dd>' + data.blog[i].upload + ', 2020</dd>';
            blog += '</dl>';
            blog+= '</article>';
        }
        blogSection.querySelector('h2').insertAdjacentHTML('afterend', blog);
        //document.querySelector("a").innerHTML = blog;
    }
}

xhr.open('GET', 'http://JJKneiss.github.io/exercises.JSON', true);
xhr.send(null);