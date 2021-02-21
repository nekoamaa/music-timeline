import timelineData from "../data/timelinedata"
import TimelineItem from "../components/timelineitem"

function timeline() {
    return(
        <div className="col-10 timeline">
            <div className="timeline-container">
                {timelineData.map((data, idx) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div>
        </div>
    )
}

export default timeline