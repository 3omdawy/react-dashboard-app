import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { Tooltip } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import { useStateContext } from './contexts/ContextProvider';
import Navbar from './components/Navbar';
import Ecommerce from './pages/Ecommerce';
import Orders from './pages/Orders';
import Employees from './pages/Employees';
import Customers from './pages/Customers';
import Calendar from './pages/Calendar';
import Kanban from './pages/Kanban';
import EditorComp from './pages/EditorComp';
import ColorPicker from './pages/ColorPicker';
import ThemeSettings from './components/ThemeSettings';

function App() {
    const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();
    return (
        <div className={currentMode === "Dark" ? 'dark' : ''}>
            <BrowserRouter>
                <div className='flex relative dark: bg-main-dark-bg bg-main-bg'>
                    <div className='fixed right-4 bottom-4' style={{ zIndex: 1000 }}>
                        <Tooltip label="Settings" placement='top-start'>
                            <button className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{ backgroundColor: currentColor, borderRadius: "50%" }}
                                onClick={() => setThemeSettings(true)}>
                                <FiSettings />
                            </button>
                        </Tooltip>
                    </div>
                    {activeMenu ? <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                        <Sidebar />
                    </div> :
                        <div className='w-0 dark:bg-secondary-dark-bg'>
                            <Sidebar />
                        </div>}
                    <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
                        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                            <Navbar />
                        </div>
                        {themeSettings && <ThemeSettings />}
                        <Routes>
                            {/* Dashbaord */}
                            <Route path='/' element={<Ecommerce />} />
                            <Route path='/ecommerce' element={<Ecommerce />} />

                            {/* Pages */}
                            <Route path='/orders' element={<Orders />} />
                            <Route path='/employees' element={<Employees />} />
                            <Route path='/customers' element={<Customers />} />

                            {/* Apps */}
                            <Route path='/kanban' element={<Kanban />} />
                            <Route path='/editor' element={<EditorComp />} />
                            <Route path='/calendar' element={<Calendar />} />
                            <Route path='/color-picker' element={<ColorPicker />} />

                            {/* Charts */}
                            <Route path='/line' element="Line" />
                            <Route path='/area' element="Area" />
                            <Route path='/bar' element="Bar" />
                            <Route path='/pie' element="Pie" />
                            <Route path='/financial' element="Financial" />
                            <Route path='/color-mapping' element="ColorMapping" />
                            <Route path='/pyramid' element="Pyramid" />
                            <Route path='/stacked' element="Stacked" />

                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App