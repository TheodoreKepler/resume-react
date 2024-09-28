import SectionEntry from './entry.js';

export default function ResumeSection(props) {
    return (
        <div className="section">
            <SectionTitle title={props.title}/>
            {
                props.entries.map(
                    (entry) => (
                        <SectionEntry entry={entry}/>
                    )
                )
            }
        </div>
    );
}

function SectionTitle({title}) {
    return (
        <div className="title">
            <b>{title}</b>
        </div>
    );
}
