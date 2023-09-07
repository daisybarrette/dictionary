import CollapsibleContainer from "./CollapsibleContainer";

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
        formattedMeanings?: [];
    }
}

type FormattedMeanings = {
    partOfSpeech: string;
    defs: string[];
}

// @TODO extract to separate component
function AudioPlayer({ audioSrc }: { audioSrc: string }) {
    return (
        <figure className="audio-player">
            <audio controls src={audioSrc} />
        </figure>
    )
}

function formatMeanings({ meanings }: { meanings: any }) {
    console.log(meanings)
    return (
        <div className="formattedMeanings">
            {meanings.map(
                (meaning: FormattedMeanings, index: number) => (
                    <div key={`${index}-${meaning.partOfSpeech}`}>
                        <div>{meaning.partOfSpeech}</div>

                        <ul>
                            {meaning.defs.map(def => (<li key={def}>{def}</li>))}
                        </ul>
                    </div>
                )
            )}
        </div>
    )
}

function formatDefinition({ definition }: DefinitionCardProps) {
    const partOfSpeech = definition.partOfSpeech
    const def1 = definition.firstDef
    const audioSrc = definition.audioSrc
    const hasAudio = !!audioSrc //check if audio available

    const hasOtherMeanings = definition?.formattedMeanings
        ? definition?.formattedMeanings.length > 1
        : false

    console.log(hasOtherMeanings)

    console.log('definition.formattedMeanings', definition.formattedMeanings)
    // @TODO extract to presentational component
    return <div className="definition">
        <div className="word">{definition.word}</div>

        <div>{definition.phonetic}</div>

        {hasAudio ? <AudioPlayer audioSrc={audioSrc} /> : <> </>}

        <div>{partOfSpeech}</div>

        <div>{def1}</div>

        <div>
            {hasOtherMeanings ?
                <CollapsibleContainer>
                    {formatMeanings({ meanings: definition.formattedMeanings })}
                </CollapsibleContainer> : <></>}
        </div>
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
