type DefinitionCardProps = {
    definition: {
        word: string;
        phonetic?: string;
        phonetics?: [];
        meanings?: [];
        audioSrc?: string;
        firstMeaning?: string;
        partOfSpeech?: string;
        firstDef?: string;
    }
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
    const partOfSpeech = definition.partOfSpeech
    const def1 = definition.firstDef
    const audioSrc = definition.audioSrc
    const hasAudio = !!audioSrc //check if audio available

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
