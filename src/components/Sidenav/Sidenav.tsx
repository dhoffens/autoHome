import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './Sidenav.scss';

interface RouteConfig {
    path: string;
    exact?: boolean;
    name: string;
    // sidebar: () => JSX.Element;
    main: () => JSX.Element;
  }

const routes: RouteConfig[] = [
    {
        path: "/",
        exact: true,
        name: "Home",
        main: () => <h2>Home</h2>
    },
    {
        path: "/maintenance-schedule",
        name: "Maintenance Schedule",
        main: () => <h2>Maintenance Schedule</h2>
    },
    {
        path: "/expense-tracker",
        name: "Expense Tracker",
        main: () => <h2>Expense Tracker</h2>
    },
    {
        path: "/project-planner",
        name: "Project Planner",
        main: () => <h2>Project Planner</h2>
    },
    {
        path: "/emergency-preparedness",
        name: "Emergency Preparedness",
        main: () => <h2>Emergency Preparedness</h2>
    },
    {
        path: "/utlity-management",
        name: "Utility Management",
        main: () => <h2>Utility Management</h2>
    },
    {
        path: "/document-storage",
        name: "Document Storage",
        main: () => <h2>Document Storage</h2>
    }
  ];

const Sidenav: React.FC = () => {
    return (
        <Router>
            <div style={{ display: "flex" }}>
                <div className='sidenav'>
                    <ul className='list'>
                        {routes.map((route, index) => (
                            <li className="listItem" key={index}>
                                <Link className='routerLink' to={route.path}>{route.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div style={{ flex: 1, padding: "10px" }}>
                    <Routes>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                element={<route.main />}
                            />
                        ))}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default Sidenav;