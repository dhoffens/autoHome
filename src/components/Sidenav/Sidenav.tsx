import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './Sidenav.scss';
import { Home } from "../Home/Home";
import { MaintenanceSchedule } from "../MaintenanceSchedule/MaintenanceSchedule";
import { ExpenseTracker } from "../ExpenseTracker/ExpenseTracker";
import { ProjectPlanner } from "../ProjectPlanner/ProjectPlanner";
import { UtilityManagement } from "../UtilityManagement/UtilityManagement";
// import { DocumentStorage } from "../DocumentStorage/DocumentStorage";
// import { EmergencyPreparedness } from "../EmergencyPreparedness/EmergencyPreparedness";

interface RouteConfig {
    path: string;
    exact?: boolean;
    name: string;
    main: () => JSX.Element;
  }

const routes: RouteConfig[] = [
    {
        path: "/",
        exact: true,
        name: "Home",
        main: () => <Home />
    },
    {
        path: "/maintenance-schedule",
        name: "Maintenance Schedule",
        main: () => <MaintenanceSchedule />
    },
    {
        path: "/expense-tracker",
        name: "Expense Tracker",
        main: () => <ExpenseTracker />
    },
    {
        path: "/project-planner",
        name: "Project Planner",
        main: () => <ProjectPlanner />
    },
    {
        path: "/utility-management",
        name: "Utility Management",
        main: () => <UtilityManagement />
    },
    // coming soon ...
    // {
    //     path: "/emergency-preparedness",
    //     name: "Emergency Preparedness",
    //     main: () => <EmergencyPreparedness />
    // },
    // {
    //     path: "/document-storage",
    //     name: "Document Storage",
    //     main: () => <DocumentStorage />
    // }
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