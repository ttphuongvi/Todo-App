import {createContext, useState} from 'react'

export const TodoContext = createContext({
    data: [],
    setData: () => { },
});
 
const initData = [
    {
        "id": 1,
        "newTask": "Hoc ReactJs va lam do an",
        "isCompleted": false,
        "deadline": "23/10/2021"
    },

    {
        "id": 2,
        "newTask": "Hoc ReactJs",
        "isCompleted": true,
        "deadline": "23/10/2021"
    }
]

export const TodoContextProvider = ({ children }) => {
    const [myData, setMyData] = useState(initData);
    return (
        <TodoContext.Provider value={{
            data: myData,
            setData: setMyData,
        }}>
            {children}
        </TodoContext.Provider>
    )
};
