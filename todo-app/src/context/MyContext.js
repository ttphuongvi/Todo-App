import { createContext, useState } from "react";
export const MyContext = createContext({
    count: null,
    setCount: () => {},
});

export const MyContextProvider = ({ children }) => {
    const [myCount, setMyCount] = useState(null);
    return (
        <MyContext.Provider
            value={{
                count: myCount,
                setCount: setMyCount,
            }}
        >
            {children}
        </MyContext.Provider>
    );
};
