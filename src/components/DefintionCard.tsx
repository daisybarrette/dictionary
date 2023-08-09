type DefinitionCardProps = {
    definition: {
        word?: string,
        origin?: string,
        meanings?: Array<object>,
    },
}

export default function DefinitionCard({ definition }: DefinitionCardProps) {
    console.log('my def in the card comp is... ',definition)

    const shouldShowPlaceholder = Object.keys(definition).length !== 0
        ? false
        : true

    return (
        shouldShowPlaceholder ?
            <div className="definition placeholder">
                {'Search for a word'}
            </div>
            :
            <div className="definition">
                <div>{definition.word}</div>
                <div>{definition.origin}</div>

                <ul>
                    {/* Object.keys(definition.meanings).map(key => <li>{`${key}: definition.meanings[key]`}</li>) */}
                </ul>

            </div>
    )
}
