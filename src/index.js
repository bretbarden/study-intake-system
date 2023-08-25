import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './components/App';
import MainPage from './components/MainPage';
import About from './components/About';
import ParticipantList from './components/ParticipantList';
import NewParticipantForm from './components/NewParticipantForm';
import ErrorPage from './components/ErrorPage'
import ParticipantPage from './components/ParticipantPage';
import EnrollmentTrends from './components/EnrollmentTrends';


import { getParticipantsLoader, singleParticipantLoader} from './loaders'


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <MainPage />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "form",
                element: <NewParticipantForm />
            },
            {
                path: "registry",
                element: <ParticipantList />,
                loader: getParticipantsLoader
            },
            {
                path: "registry/:id",
                element: <ParticipantPage />,
                loader: singleParticipantLoader
            },
            {
                path: "enrollmenttrends",
                element: <EnrollmentTrends />,
            },
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={router} /> );
