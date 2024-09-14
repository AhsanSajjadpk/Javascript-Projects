// All Dom Elements

const sourceLanguage = document.getElementById('source-language')
const targetLanguage = document.getElementById('target-language')
const swapButton = document.getElementById('swap')
const copyToClipboard = document.getElementById('copy-to-clipboard')
const sourceLanguageText = document.getElementById('source-language-text')
const targetLanguageText = document.getElementById('target-language-text')



// All Variables

let apiDelayTime = 3000;
let timer;



// All functions

// function to translate source language into target language   

const translateAfter3Sec = async () => {
    

    clearTimeout(timer)
    timer = await setTimeout( async () => {

       await translate()
        
    }, apiDelayTime)
    
}

// function to translate without any delay

const translate = async () => {
    // verify if source language text is provided or not
    const sourceText = sourceLanguageText.value.trim();
    if(sourceText === '') {
        targetLanguageText.value = '';
        return;
    };
    
    // Get Data
    const sourceLang = sourceLanguage.value;
    const targetLang = targetLanguage.value;
    
    // API Params
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", sourceText);
    encodedParams.append("target", targetLang);
    encodedParams.append("source", sourceLang);
    const options = {
        method: 'POST',
    	headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '32c46c27f2mshbeb5e974f89bfddp1c56d6jsn6a1a54633de7',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    	},
    	body: encodedParams
    };
    
    try {
        // Get Translation
        const res = await fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options);
        const data = await res.json();
        // console.log(data)
        // console.log(data.message)
        // console.log(message)
        
        if(!data.message) {
            targetLanguageText.value = data.data.translations[0].translatedText;
        } else {
            alert(data.message);
        }
    } catch (err) {
        // Error
        alert('Sorry, Something went wrong.');
        console.log("ERROR >> ", err);
    }
}


// function to Swap Tect and Language

const swapLanguage = ()=>{

    let temp = sourceLanguage.value
    const sourceLang = targetLanguage.value;
    const targetLang = temp;
    
    let tempText = sourceLanguageText.value
    const sourceLangText = targetLanguageText.value;
    const targetLangText = tempText;


    sourceLanguage.value = sourceLang
    targetLanguage.value = targetLang
    sourceLanguageText.value = sourceLangText
    targetLanguageText.value = targetLangText

}

// function to Copy Text to ClipBoard

const copyToClipBoard = async ()=>{

const text =   targetLanguageText.value
// alert(text)
try {
    await navigator.clipboard.writeText(text);
    // console.log("Text copied to clipboard:", text);
} catch (err) {
    console.error("Failed to copy text: ", err);
}
}


// All Event Listener

// Event Listener to track source language
sourceLanguage.addEventListener('change', ()=>{
    sourceLanguageText.value = ''
    targetLanguageText.value = ''
    
});


// // Event Listener to translate source language into target language
targetLanguage.addEventListener('change', translate);


// // Event Listener to translate source language into target language afetr 3 second
sourceLanguageText.addEventListener('input', translateAfter3Sec);



// // Event Listener to swap text between source and target language
swapButton.addEventListener('click', swapLanguage);



// // Event Listener to copy target language

copyToClipboard.addEventListener('click',copyToClipBoard);



// init

// translateAfter3Sec()