import { useState } from "react"


type AccordionItemProps = {
    title: string;
    content: string;
}

function AccordionItem({ title, content }: AccordionItemProps) {
    return (
        <li className="accordion-item">
            <div className="accordion-item-title">{title}</div>
            <div className="accordion-item-content">{content}</div>
        </li>
    )
}


export default function AccordionContainer() {

    return (
        <ul className="accordion-container">
            <AccordionItem title="my cool item title" content="this is the content" />
            <AccordionItem title="another item title" content="and here is the content for that second item" />

            {/* <li className="accordion-item"><div className="accordion-item-title">my cool item title</div> <div className="accordion-item-content">this is the content</div></li> */}
            {/* <li className="accordion-item"><div className="accordion-item-title">another item title</div> <div className="accordion-item-content">and here is the content for that second item</div></li> */}
        </ul>
    )
}
