const TimelineItem = ({data}) => {
    return (
        <div className="timeline-item">
            <div className="timeline-item-content">
                <time>{data.date}</time>
                <p>{data.text}</p>
                {data.link && (
                    <a href={data.link.url}target="_blank" rel="noopener noreferrer">
                        {data.link.text}
                    </a>
                )}
                <span className="circle" />
            </div>
        </div>
    )
}

export default TimelineItem