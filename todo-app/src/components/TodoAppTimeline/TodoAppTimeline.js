import React, { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { MyContext } from '../../context/MyContext'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";

export function TodoAppTimeline() {
    const { data } = useContext(TodoContext);
    const {count} = useContext(MyContext);
    return (
        <div style={{ backgroundColor: '#3da3d5' }}>
        <div>Số lượng: {count}</div>  
            <VerticalTimeline>
                {data.map((item) => {
                    return (
                        <VerticalTimelineElement
                            key={item.id}
                            date={item.deadline}
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                            contentStyle={{ color: "rgb(33, 150, 243)", background: "#fff" }}
                            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                            icon={item.isCompleted ? <SchoolIcon /> : <WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {item.newTask}
                            </h3>
                            <h5 className="vertical-timeline-element-subtitle">
                                {item.deadline}
                            </h5>
                            {!item.isCompleted && (
                                <button style={{ padding: 9, margin: 3, backgroundColor: '#06d6a0', color: 'white' }}>
                                    Complete
                                </button>
                            )}
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </div>
    );
};
export default TodoAppTimeline;
// import React, { useContext, Component } from 'react'
// import { MyContext } from '../../context/MyContext'
// import {TodoContext} from '../../context/TodoContext'

// import Timeline from 'react-timeline-semantic-ui';

// const TodoAppTimeline = () => {
//     const {count} = useContext(MyContext);
//     const {data} = useContext(TodoContext)
//     return (
//         <>
//           <div>Số lượng: {count}</div>  
//           <Timeline
//   direction="left"
//   icon="user"
//   time="Time"
//   description="Description."
//   color="red"
//   tags={['tag1', 'tag2']}
//   lineHeight={4}
// />
// <Timeline
//   direction="right"
//   icon="user"
//   time="Time"
//   description="Description."
//   color="red"
//   tags={['tag1', 'tag2']}
//   lineHeight={4}
// />
//         </>
//     )
// }

// export default TodoAppTimeline;

