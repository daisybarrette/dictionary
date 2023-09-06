import { useState } from "react"


export default function CollapsibleContainer({ content }: { content: string }) {
    const [isExpanded, setIsExpanded] = useState(false)

    const classNameForContent = isExpanded ? 'collapsible-content is-expanded' : 'collapsible-content'
    const conditionalTitle = isExpanded ? 'Show less' : 'Show more'

    return (
        <div className="collapsible-container">
            <button className="collapsible-title" onClick={() => setIsExpanded(!isExpanded)}>{conditionalTitle}</button>

            <div className={classNameForContent}>
                {isExpanded && content}
            </div>
        </div>
    )
}
