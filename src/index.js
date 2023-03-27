import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AddVehiclePage from "./components/pages/AddVehiclePage";
import FleetVehiclesPage from "./components/pages/FleetVehiclesPage";
import {
    createBrowserRouter,
    RouterProvider,
    Route
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/AddVehicle",
        element: <AddVehiclePage/>
    },
    {
        path: "/Fleet",
        element: <FleetVehiclesPage/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
