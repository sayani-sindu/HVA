const searchButton = document.getElementById('searchingWord');

const wordInput = document.getElementById('searchWord');

const dictionary = document.getElementById('wordInformation');

const wordInfo = document.getElementById('info');

const getWord = () =>{
    const word = wordInput.value.trim();
    wordInput.value = "";

    if(word === ""){
        alert("Enter the word");
        return;
    }

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,{
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if(!response.ok){
            throw new Error('Word not found, Try another word');
        }
        return response.json();
    })

    .then(dict =>{
        console.log(dict);
        displayInfo(dict[0]);
    })
    .catch((error) =>{
        dictionary.innerHTML = `<p>${error.message}</p>`;
    })
}
const defineWord = (define) =>{
    const definition = document.createElement('p');
    definition.classList.add('definition');
    definition.innerText = `Definition: ${define.definition}`;

    const example = document.createElement('p');
    example.classList.add('example');
    example.innerText = `Example: ${define.example || 'No Example Available'}`;

    const synonyms = document.createElement('p');
    synonyms.classList.add('synonyms');
    synonyms.innerText = `Synonyms: ${define.synonyms.length > 0 ? define.synonyms.join(', ') : 'No Synonyms Available'}`;

    const antonyms = document.createElement('p');
    antonyms.classList.add('antonyms');
    antonyms.innerText = `Antonyms: ${define.antonyms.length > 0 ? define.antonyms.join(', ') : 'No Antonyms Available'}`;

    wordInfo.appendChild(definition);
    wordInfo.appendChild(example);
    wordInfo.appendChild(synonyms);
    wordInfo.appendChild(antonyms);

    antonyms.style.paddingBottom = '10px';
    antonyms.style.borderBottom = '1px dashed black';

}

const wordMeaning = (meaning) =>{
    const partsOfSpeech = document.createElement('p');
    partsOfSpeech.classList.add('partsOfSpeech');
    partsOfSpeech.innerText = `Part of Speech: ${meaning.partOfSpeech}`;
    wordInfo.appendChild(partsOfSpeech);
    const definitions = meaning.definitions;
    definitions.forEach(defineWord);

}

const displayInfo = (data) => {
    const {meanings} = data;
    const originWord = document.getElementById('origin');
    originWord.innerText =  `Origin: ${data.origin || 'No Origin Available'}`;
    const phoneticsWord = document.getElementById('phonetic');
    phoneticsWord.innerText = `Phonetic : ${data.phonetic || 'No Phonetics Available'}`;
    meanings.forEach(wordMeaning);


}

searchButton.addEventListener('click', getWord);