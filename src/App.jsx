import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Main from "./routes/Main";
import About from "./routes/About";
import Way from "./routes/Way";
import { Icon } from '@iconify/react';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="w-full bg-slate-400 flex flex-row items-center justify-between z-40">
          <div  className={`text-xl ml-2`}>
            <NavLink to="/" key="pomodoro timer" className="flex flex-row items-center">
            <Icon icon="fluent:timer-20-regular" className="h-8 w-8"/>
              pomodoro timer
            </NavLink>
          </div>
          <div className="mr-4 flex felx-row gap-4">
            <div>
            <NavLink to="about" key="about">
              about
            </NavLink>
            </div>
            <div>
              <NavLink to="way" key="way">
                way
              </NavLink>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="way" element={<Way />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
