import { createContext, useContext, useState } from "react";
import { MyContext } from "./MyContext";
export const TodoContext = createContext({
    data: [],
    setData: () => {},
});

const initData = [
    {
        id: 1,
        newTask: "Hoc ReactJs va lam do an",
        isCompleted: false,
        deadline: "23/10/2021",
    },

    {
        id: 2,
        newTask: "Hoc ReactJs",
        isCompleted: true,
        deadline: "23/10/2021",
    },
];

export const TodoContextProvider = ({ children }) => {
    const baseData = [
        ...initData,
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
