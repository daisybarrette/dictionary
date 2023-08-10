const emptyDefinition = {
    word: '',
    phonetic: '',
    meanings: [],
}

export default async function fetchDefinition(word: string) {
    console.log('IN FETCH FUNCTION ', word)

    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)

    const result = await response.json()

    console.log('result from api', result)

    if (result?.title === 'No Definitions Found') {
        // @TODO should display error message for user
        return emptyDefinition
    }

    return result[0]
}
