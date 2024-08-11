import { createContext, useContext, useState } from "react";

const StateContext = createContext();
const initialState = {
    chat: false, // chat window
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = (({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setisClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);

    const handleClick = (elementClicked) => {
        let newState = { ...isClicked };
        newState[elementClicked] = !newState[elementClicked];
        setisClicked(newState);
    };

    return <StateContext.Provider value={{ activeMenu, setActiveMenu, isClicked, handleClick, screenSize, setScreenSize }}>{children}</StateContext.Provider>
})

export const useStateContext = () => useContext(StateContext);