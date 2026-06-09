import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { MainPage } from "./components/MainPage";
import { Exercise1 } from "./components/Exercise1";
import { Exercise2 } from "./components/Exercise2";
import { Exercise3 } from "./components/Exercise3";
import { Exercise4 } from "./components/Exercise4";
import { Exercise5 } from "./components/Exercise5";
import { Exercise6 } from "./components/Exercise6";
import { Exercise8 } from "./components/Exercise8";
import { ComingSoon } from "./components/ComingSoon";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: MainPage },
      { path: "exercise-1", Component: Exercise1 },
      { path: "exercise-2", Component: Exercise2 },
      { path: "exercise-3", Component: Exercise3 },
      { path: "exercise-4", Component: Exercise4 },
      { path: "exercise-5", Component: Exercise5 },
      { path: "exercise-6", Component: Exercise6 },
      { path: "exercise-7", element: <ComingSoon pageNumber={7} /> },
      { path: "exercise-8", Component: Exercise8 },
    ],
  },
]);
