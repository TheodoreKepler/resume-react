export default function SectionEntry({entry}) {
    const {id, date = '', subtitle = '', position = '', skills = '', description} = entry;
    const listItems = description ? description.map(elm => <div className="text" key={elm.id}>{elm.text}</div>) : undefined;

    return (
        <div className="entry" key={id}>
            <div className="child-left">
                <div className="date">
                    {date}
                </div>
            </div>
            <div className="child-right">
                <div className="subtitle">
                    <b>{subtitle}</b>
                </div>
                <div className="position">
                    <i>{position}</i>
                </div>
                <div className="description">
                    {listItems}
                </div>
                <br />
                <div className="skills">
                    {skills ? <u>Skills:</u> : ''}
                    {' '+skills}
                </div>
            </div>
        </div>
    );
}
