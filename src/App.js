import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { Navigation } from "./components/Navigation";
import './App.css';
import './App_media_320.css';
function App() {
    return (_jsxs(_Fragment, { children: [_jsx(Navigation, {}), _jsx(Routes, { children: _jsx(Route, { path: "/", element: _jsx(MainPage, {}) }) })] }));
}
export default App;
