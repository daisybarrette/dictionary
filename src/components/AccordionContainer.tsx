import { useState } from "react"


type AccordionItemProps = {
    title: string;
    content: string;
}

function AccordionItem({ title, content }: AccordionItemProps) {
    const [isExpanded, setIsExpanded] = useState(false)

    const classNameForContent = isExpanded ? 'accordion-item-content is-expanded' : 'accordion-item-content'
    const conditionalTitle = isExpanded ? 'Show less' : 'Show more'

    return (
        <li className="accordion-item">
            <button className="accordion-item-title" onClick={() => setIsExpanded(!isExpanded)}>{conditionalTitle}</button>

            <div className={classNameForContent}>
                {isExpanded && content}
            </div>
        </li>
    )
}

export default function AccordionContainer() {
    return (
        <ul className="accordion-container">
            <AccordionItem title="See more meanings" content="this is the content" />
            {/* <AccordionItem title="another item title" content="and here is the content for that second item" /> */}
        </ul>
    )
}
