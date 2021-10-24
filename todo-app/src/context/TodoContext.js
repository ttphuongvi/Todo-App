import { createContext, useContext, useState } from "react";
import { MyContext } from "./MyContext";
export const TodoContext = createContext({
    data: [],
    setData: () => {},
});

const initData = [
    {
        id: 1,
        newTask: "Tìm hiểu ReactJs và làm đồ án",
        isCompleted: false,
        deadline: "14/11/2021",
    },

    {
        id: 2,
        newTask: "Làm Lab OOAD",
        isCompleted: true,
        deadline: "23/10/2021",
    },
];

export const TodoContextProvider = ({ children }) => {
    const baseData = [
        //...initData,
        ...JSON.parse(localStorage.getItem("todos") ?? "[]"),
    ];
    const { count, setCount } = useContext(MyContext);
    const [myData, setMyData] = useState(baseData);
    setCount(baseData.length);
    console.log(baseData.length, count);
    return (
        <TodoContext.Provider
            value={{
                data: myData,
                setData: setMyData,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};
