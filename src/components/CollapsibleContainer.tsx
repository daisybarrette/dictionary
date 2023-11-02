import { useState } from "react"
import '../styles/collapsible.css'


export default function CollapsibleContainer({ children }: { children: React.ReactNode }) {
    const [isExpanded, setIsExpanded] = useState(false)

    const classNameForContent = isExpanded ? 'collapsible-content is-expanded' : 'collapsible-content'
    const conditionalTitle = isExpanded ? 'Show less' : 'Show more'

    return (
        <div className="collapsible-container">
            <button className="glass collapsible-title" onClick={() => setIsExpanded(!isExpanded)}>{conditionalTitle}</button>

            <div className={classNameForContent}>
                {isExpanded && children}
            </div>
        </div>
    )
}
