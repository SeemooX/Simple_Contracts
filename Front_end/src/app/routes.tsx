import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { MainPage } from "./components/MainPage";
import { Exercise1 } from "./components/Exercise1";
import { ComingSoon } from "./components/ComingSoon";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: MainPage },
      { path: "exercise-1", Component: Exercise1 },
      { path: "exercise-2", element: <ComingSoon pageNumber={2} /> },
      { path: "exercise-3", element: <ComingSoon pageNumber={3} /> },
      { path: "exercise-4", element: <ComingSoon pageNumber={4} /> },
      { path: "exercise-5", element: <ComingSoon pageNumber={5} /> },
      { path: "exercise-6", element: <ComingSoon pageNumber={6} /> },
      { path: "exercise-7", element: <ComingSoon pageNumber={7} /> },
      { path: "exercise-8", element: <ComingSoon pageNumber={8} /> },
    ],
  },
]);
