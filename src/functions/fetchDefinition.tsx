const emptyDefinition = {
    word: '',
    phonetic: '',
    meanings: [],
}

export default async function fetchDefinition(word: string) {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)

    const result = await response.json()

    if (result?.title === 'No Definitions Found') {
        return emptyDefinition
    }

    return result[0]
}
