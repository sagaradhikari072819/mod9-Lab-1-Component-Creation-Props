import type React from "react";

interface SectionProps{
    title: string;
    children: React.ReactNode
}


function Section({title, children}: SectionProps){
    return(
        <section>
            <h2>{title}</h2>
            {children}
        </section>
    )
}

export default Section;