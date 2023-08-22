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
        <div className="word">{definition.word}</div>

        <div>{definition.phonetic}</div>

        <div>{partOfSpeech}</div>

        <div>{def1}</div>
    </div>
}


export default function DefinitionCard({ definition }: DefinitionCardProps) {
    const shouldShowPlaceholder = definition.word === ''
        ? true
        : false

    return (
        shouldShowPlaceholder ?
            <></>
            :
            <div>{formatDefinition({ definition: definition })}</div>
    )
}
