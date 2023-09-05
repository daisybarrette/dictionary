import DefinitionFromAPI from "../ts/Definition"


const emptyDefinition = {
    word: '',
    phonetic: '',
    phonetics: [],
    meanings: [],
    audioSrc: '',
}

function formatDefinition(definition: DefinitionFromAPI) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const firstMeaning: { [key: string]: any } = definition.meanings[0]

    const audioSrc = definition.phonetics[0]?.audio

    // Reshape API response into just the data we care about
    const formattedDef = {
        word: definition.word,
        phonetic: definition.phonetic ?? '',
        phonetics: definition.phonetics, // API will return at least empty array
        meanings: [firstMeaning], // @TODO probably actually want the original Meanings array here? or reformat inside

        firstMeaning: firstMeaning,
        partOfSpeech: firstMeaning['partOfSpeech'],
        firstDef: firstMeaning['definitions'][0]['definition'],

        audioSrc: audioSrc ?? '',
    }

    return formattedDef
}


export default async function fetchDefinition(word: string) {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)

    const result = await response.json()

    if (result?.title === 'No Definitions Found') {
        return emptyDefinition
    }

    return formatDefinition(result[0])
}
