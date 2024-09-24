const loadJokeBtn = document.getElementById('loadJokeBtn');

const loadJoke = async () => {
    try{
        const chuckNorrisFetch = await fetch('https://api.chucknorris.io/jokes/random',{
            headers:{
                Accept: "application/json"
            }
        });

        const jokeData = await chuckNorrisFetch.json();
        document.getElementById('loadingJoke').innerHTML = jokeData.value;
    }
    catch(error){
        console.log(error);
    }
}

loadJokeBtn.addEventListener('click', loadJoke);