import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoadingOverlay from "../components/LoadingOverlay";

// ✅ Lazy Imports
const MainLayout = lazy(() => import("../layout/MainLayout"));
const Home = lazy(() => import("../pages/Home"));
const QnhHistory = lazy(() => import("../pages/QnhHistory"));
const MssionVsion = lazy(() => import("../pages/MssionVsion"));
const PatientsRights = lazy(() => import("../pages/PatientsRights"));
const HospitalAccreditations = lazy(() =>
  import("../pages/HospitalAccreditations")
);
const ErrorPage = lazy(() => import("../pages/ErrorPage"));

// ✅ Wrapper for Suspense fallback
const withSuspense = (Component) => (
  <Suspense fallback={<LoadingOverlay />}>
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: withSuspense(MainLayout),
    errorElement: withSuspense(ErrorPage),
    children: [
      {
        index: true,
        element: withSuspense(Home),
      },
      {
        path: "qnh-history",
        element: withSuspense(QnhHistory),
      },
      {
        path: "mission-vision",
        element: withSuspense(MssionVsion),
      },
      {
        path: "patients-rights",
        element: withSuspense(PatientsRights),
      },
      {
        path: "hospital-accreditations",
        element: withSuspense(HospitalAccreditations),
      },
    ],
  },
]);

export default router;
