const inputEl = document.getElementById("input-el")
const searchEl = document.getElementById("search-el")
const infoEl = document.getElementById("info-el")
const container2El = document.getElementById("container2-el")
const wordEl = document.getElementById("word-el")
const suggestionEl = document.getElementById("suggestion-el")
const meaningEl = document.getElementById("meaning-el")
const audioEl = document.getElementById("audio-el")


async function fecthApi(word) {
    try {
        suggestionEl.style.display = "none";
        infoEl.style.display = "block"
        container2El.style.display = "none"
        infoEl.innerText = `Searching the meaning of "${word}"`
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const result = await fetch(url).then((res) => res.json())

        if (result.title) {
            infoEl.style.display = "none"
            container2El.style.display = "block"
            wordEl.innerText = word
            meaningEl.innerText = "N/A"
            audioEl.style.display = "none"
        }
        else
        {
            infoEl.style.display = "none"
            container2El.style.display = "block"
            wordEl.innerText = result[0].word
            meaningEl.innerText = result[0].meanings[0].definitions[0].definition
            audioEl.src = result[0].phonetics[0].audio
        }
    } catch (error) {
        console.log(error)
        infoEl.innerText = "An Error occured, try again later"
    }



}

searchEl.addEventListener("click", function () {
    if (inputEl.value != " ") {
        fecthApi(inputEl.value)
    }
})