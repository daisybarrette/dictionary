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
    phonetics: Phonetics[] | [];
    meanings: Meaning[];
}

export default DefinitionFromAPI
