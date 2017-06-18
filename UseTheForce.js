document.addEventListener("DOMContentLoaded", main, false);

function main() {
    var movieTitle = document.getElementById('movieTitle');
    movieTitleText = movieTitle.innerHTML;
    movieTitleTextArr = movieTitleText.split('');

    movieTitle.innerHTML="";

    console.log(movieTitleText);
    console.log(movieTitleTextArr);


    var span;
    var letters;

    for (i = 0; i < movieTitleTextArr.length; i++) {
        span = document.createElement("span");

        letter=document.createTextNode(movieTitleTextArr[i]);

        if(movieTitleTextArr[i]==" "){
            movieTitle.appendChild(letter);
        }
        else{
            span.appendChild(letter);
            movieTitle.appendChild(span);
        }


    }

}

