type DefinitionCardProps = {
    children: React.ReactNode,
}

export default function DefinitionCard({ children }: DefinitionCardProps) {
    console.log(children)

    const shouldShowPlaceholder = children === ''
        ? true
        : false

    return (
        shouldShowPlaceholder ?
            <div className="definition placeholder">
                {'Search for a word'}
            </div>
            :
            <div className="definition">
                {children}
            </div>
    )
}
