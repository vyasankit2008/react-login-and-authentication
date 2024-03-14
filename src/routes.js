import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

export const Mainlayout = lazy(() => import('./pages/Mainlayout'));
export const AppPage = lazy(() => import('./pages/App'));
export const AnalyticsPage = lazy(() => import('./pages/Analytics'));
export const DashbordPage = lazy(() => import('./pages/Dashbord'));
export const ProductPage = lazy(() => import('./pages/Product'));
export const AboutPage = lazy(() => import('./pages/About'));
export const SigninPage = lazy(() => import('./pages/Signin'));
export const SignupPage = lazy(() => import('./pages/Signup'));
export const PageNotFound = lazy(() => import('./pages/PageNotFound'));

export default function Router() {
    const routes = useRoutes([
        {
            path: '/app', element: (<Mainlayout>
                <Suspense>
                    <Outlet />
                </Suspense>
            </Mainlayout>),
            children: [                
                { element: <AppPage />, index: true },
                { path: 'dashboard', element: <DashbordPage /> },
                { path: 'analytics', element: <AnalyticsPage /> },
                { path: 'product', element: <ProductPage /> },
                { path: 'about', element: <AboutPage /> },
                { path: 'not-found', element: <PageNotFound /> },
                { path: '*', element: <Navigate to="/app/not-found" replace /> },
            ]
        },        
        { path: 'login', element: <SigninPage /> },
        { path: 'register', element: <SignupPage /> },
        { path: '*', element: <Navigate to="/login" replace /> },
        { path: '/', element: <Navigate to="/login" replace /> },
    ]);

    return routes;
}