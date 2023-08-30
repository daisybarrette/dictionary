type DefinitionCardProps = {
    definition: {
        word: string,
        phonetic: string,
        // audio?: string, //// should pass like this from fetch func

        // @TODO specify structure
        phonetics: Array<object>,

        // @TODO specify structure
        meanings: Array<object>,
    },
}


// @TODO extract to separate component
function AudioPlayer({ audioSrc }: { audioSrc: string }) {
    console.log('audio src', audioSrc)
    return (
        <figure>
            <figcaption>Play audio:</figcaption>
            <audio controls src={audioSrc}>
            </audio>
        </figure>
    )
}

function formatDefinition({ definition }: DefinitionCardProps) {
    // @TODO clean up types
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const firstMeaning: { [key: string]: any } = definition.meanings[0]

    const partOfSpeech = firstMeaning['partOfSpeech']
    const def1 = firstMeaning['definitions'][0]['definition']

    // const hasAudio = !!definition.audio

    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    const phonetics = definition.phonetics[0]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    console.log(phonetics)

    //// phonetics may be undefined

    const audioSrc = phonetics ? phonetics['audio'] : null
    const hasAudio = !!audioSrc //check if valid



    // @TODO extract to presentational component
    return <div className="definition">
        <div className="word">{definition.word}</div>

        <div>{definition.phonetic}</div>

        {hasAudio ? <AudioPlayer audioSrc={audioSrc} /> : <> </>}



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
