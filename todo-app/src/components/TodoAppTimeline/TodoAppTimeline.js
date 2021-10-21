import React, { useContext } from 'react'
import { MyContext } from '../../context/MyContext'
const TodoAppTimeline = () => {
    const {count} = useContext(MyContext);
    return (
        <div>
          <div>Số lượng: {count}</div>   
        </div>
    )
}

export default TodoAppTimeline
