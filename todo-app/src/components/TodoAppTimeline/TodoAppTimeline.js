import React, { useContext } from 'react';
import './Timeline.css'
import { TodoContext } from '../../context/TodoContext';
import { MyContext } from '../../context/MyContext'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {IoCheckmarkDoneSharp} from 'react-icons/io5'
import { SiWheniwork} from "react-icons/si";
import { FaTrashAlt } from "react-icons/fa"

export function TodoAppTimeline() {
    const { data, setData } = useContext(TodoContext);
    const {count, setCount} = useContext(MyContext);
    const onClickDeleted = (e) => {
        if(e<0) return;
        const newValue = data;
        newValue.splice(e,1);
        setData([...newValue]);
        setCount(count - 1)
    }
    const completeClick = (e) => {
        const newValue = data;
        newValue[e].isCompleted=true;
        setData([...newValue]);
    }
    const unCompleteClick = (e) => {
        const newValue = data;
        newValue[e].isCompleted=false;
        setData([...newValue]);
    }
    return (
        <div className="container-vertical-timeline">
            <VerticalTimeline>
                {data.map((item, index) => {
                    return (
                        <VerticalTimelineElement
                            key={item.id}
                            date={item.deadline}
                            // className="vertical-timeline-element--work"
                            iconStyle={item.isCompleted ? { background: "#0fca0f" } : {background: "#FF7600"}}
                            contentStyle={{ color: "#fff", background: "#fff" }}
                            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
                            icon={item.isCompleted ? <IoCheckmarkDoneSharp/> : <SiWheniwork/>}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {item.newTask}
                            </h3>
                            <h5 className="vertical-timeline-element-subtitle">
                                {item.deadline}
                            </h5>
                            <h2>{item.isCompleted ? 'Complete' : 'Uncomplete'}</h2>
                            {!item.isCompleted ? (
                                <button onClick={() => completeClick(index)} className={item.isCompleted ? 'completed' : 'uncompleted'}
                                ><SiWheniwork/>     UnComplete</button>
                            ) :
                            (
                                <button onClick={ () => unCompleteClick(index)} className={item.isCompleted ? 'completed' : 'uncompleted'}
                                 ><IoCheckmarkDoneSharp></IoCheckmarkDoneSharp>     Complete</button>
                            )}
                            <button className="delete" onClick= {() => onClickDeleted(index)}><FaTrashAlt/>     Delete</button>
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

