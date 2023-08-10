type DefinitionCardProps = {
    definition: {
        word: string,
        phonetic: string,

        // @TODO specify structure
        meanings: Array<object>,
    },
}


function formatDefinition({ definition }: DefinitionCardProps) {
    // @TODO clean up types
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const firstMeaning: { [key: string]: any } = definition.meanings[0]

    const partOfSpeech = firstMeaning['partOfSpeech']
    const def1 = firstMeaning['definitions'][0]['definition']

    // @TODO extract to presentational component
    return <div className="definition">
        <div>{definition.word}</div>

        <div>{definition.phonetic}</div>

        <div>{partOfSpeech}</div>

        <div>{def1}</div>
    </div>
}


export default function DefinitionCard({ definition }: DefinitionCardProps) {
    //@TODO rework loading state logic
    const shouldShowPlaceholder = definition.word === ''
        ? true
        : false

    return (
        shouldShowPlaceholder ?
            <div className="definition placeholder">
                {'Search for a word'}
            </div>
            :
            <div>{formatDefinition({ definition: definition })}</div>
    )
}
