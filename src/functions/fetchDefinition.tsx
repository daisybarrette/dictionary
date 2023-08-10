export default async function fetchDefinition(word: string) {
    console.log('IN FETCH FUNCTION ', word)

    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)

    const result = await response.json()

    console.log('result from api', result)

    return result[0]
}
