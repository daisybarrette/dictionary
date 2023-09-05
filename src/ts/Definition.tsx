type Phonetics = {
    text: string;
    audio: string;
}

type InnerDefinition = {
    definition: string;
    synonyms: string[] | [];
    antonyms: string[] | [];
}

type Meaning = {
    partOfSpeech: string;
    definitions: InnerDefinition[];
}

type DefinitionFromAPI = {
    word: string;
    phonetic?: string;
    // phonetics: Array<object> | []; // check this syntax

    phonetics: Phonetics[] | [];


    meanings: Meaning[];


    // [key: string]: any, // 👈️ index signature
    // [index: string]: string | object,
}


export default DefinitionFromAPI
