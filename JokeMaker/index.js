function makeJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(resp =>{
        if (resp.status !== 200) {
            throw new Error ("Error")
        }
        return resp.json()
    })
    .then( json => {
        const jokeContainer = document.getElementById("joke")
        jokeContainer.innerHTML = "";
        const jokeSetup = json.setup
        const jokePunchline = json.punchline
        const setupElement = document.createElement("p")
        setupElement.textContent = jokeSetup
        jokeContainer.appendChild(setupElement)

        const punchlineElement = document.createElement("p")
        punchlineElement.textContent = jokePunchline
        jokeContainer.appendChild(punchlineElement)

    })
    .catch(error => {
        console.error(error)
    })
}

document.getElementById("button").addEventListener("click", makeJoke)