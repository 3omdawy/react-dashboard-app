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
    const initialColor = localStorage.getItem('themeColor') || "#03C907";
    const [currentColor, setCurrentColor] = useState(initialColor);
    const initialMode = localStorage.getItem('themeMode') || "Light";
    const [currentMode, setCurrentMode] = useState(initialMode);
    const [themeSettings, setThemeSettings] = useState(false); // opened or closed

    const setMode = mode => {
        setCurrentMode(mode);
        localStorage.setItem('themeMode', mode);
    }
    const setColor = color => {
        setCurrentColor(color);
        localStorage.setItem('themeColor', color);
    }

    const handleClick = (elementClicked) => {
        let newState = { ...isClicked };
        newState[elementClicked] = !newState[elementClicked];
        setisClicked(newState);
    };

    return <StateContext.Provider value={{
        activeMenu, setActiveMenu, isClicked, handleClick, screenSize, setScreenSize,
        setColor, setMode, currentColor, currentMode, themeSettings, setThemeSettings
    }}>{children}</StateContext.Provider>
})

export const useStateContext = () => useContext(StateContext);