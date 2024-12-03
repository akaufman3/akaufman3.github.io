import React from 'react';
import {RouterProvider, createBrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import './App.css';
import Notebooks from './Notebooks';
import ReactDOM from 'react-dom/client';


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <AppLayout />,
      },
      {
        path: "/about",
        element: <Notebooks />,
      },
    ],
  },
]);

const AppLayout = () => {
  return (
      <div className="App">
        <nav className="App-toolbar">
          <NavLink
              className="App-link"
              to="https://github.com/akaufman3"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
          </NavLink>
          <NavLink
                className="App-link"
                to="https://www.linkedin.com/in/kaufmanamelia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin
          </NavLink>
          <NavLink
                className="App-link"
                to="/notebooks"
                target="_blank"
                rel="noopener noreferrer"
              >
                notebooks
          </NavLink>
        </nav>
        <Routes>
          <Route path="/notebooks" element={<Notebooks />}></Route>
        </Routes>
        <header className="App-header">
          <p>
            hey, i'm <span className="Key-word">amelia kaufman</span>.
          </p>
          <p> i am a <span><b>software engineering manager</b></span> for my day job.
          </p>
          <p>
            at night, i am currently a <span><b>masters degree candidate</b></span> in <span><b>computer science</b></span> at <span><b><a
              className="App-link"
              href="https://omscs.gatech.edu/"
              target="_blank"
              rel="noopener noreferrer"
              >
                georgia tech 
              </a></b></span> with a specialiation in <span><b>computational perception & robotics</b></span> focusing on <span><b>ml/ai</b></span>.
          </p>
          <p>reach out @ <span><b>
            <a
              className="App-link"
              href="mailto:amelia.kaufman@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              >
                email 
              </a>
          </b></span></p>
        </header>
    </div>
  )
}

const app = ReactDOM.createRoot(document.getElementById('AppLayout'));
app.render(
  <React.StrictMode>
    <main>
      <div className="App">
        <nav className="App-toolbar">
          <NavLink
              className="App-link"
              to="https://github.com/akaufman3"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
          </NavLink>
          <NavLink
                className="App-link"
                to="https://www.linkedin.com/in/kaufmanamelia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin
          </NavLink>
          <NavLink
                className="App-link"
                to="/notebooks"
                target="_blank"
                rel="noopener noreferrer"
              >
                notebooks
          </NavLink>
        </nav>
        <Routes>
          <Route path="/notebooks" element={<Notebooks />}></Route>
        </Routes>
        <header className="App-header">
          <p>
            hey, i'm <span className="Key-word">amelia kaufman</span>.
          </p>
          <p> i am a <span><b>software engineering manager</b></span> for my day job.
          </p>
          <p>
            at night, i am currently a <span><b>masters degree candidate</b></span> in <span><b>computer science</b></span> at <span><b><a
              className="App-link"
              href="https://omscs.gatech.edu/"
              target="_blank"
              rel="noopener noreferrer"
              >
                georgia tech 
              </a></b></span> with a specialiation in <span><b>computational perception & robotics</b></span> focusing on <span><b>ml/ai</b></span>.
          </p>
          <p>reach out @ <span><b>
            <a
              className="App-link"
              href="mailto:amelia.kaufman@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              >
                email 
              </a>
          </b></span></p>
        </header>
      </div>
    </main>
    <RouterProvider router={router} />
  </React.StrictMode>
);