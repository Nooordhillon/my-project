import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./pages/Users";
import Karan from "./pages/karan";
import InstaProfile from "./pages/InstaProfile";
import Topusers from "./pages/Topusers";
import Cars from "./pages/Cars";
import CarInfo from "./pages/CarInfo";
import StateManagement from "./pages/concepts/StateManagement";
import Cta from "./pages/tailwind/Cta";
// import Events from "./pages/concepts/Events";
import HomeWork from "./pages/HomeWork";
import MyLayout from "./components/MyLayout";
import HomePage from "./pages/HomePage";
import DataDisplay from "./pages/DataDisplay";
import DataFetching from "./pages/DataFetching";
import PostData from "./components/MyLayout/PostData";
import UserRefHook from "./pages/hooks/UserRefHook";
import Exercise1 from "./pages/Exercise1";
import PropsDrilling from "./pages/PropsDrilling";
import AnimeData from "./pages/AnimeData";
import AntdPractice from "./pages/AntdPractice";
import TypographyPractice from "./pages/TypographyPractice";
import WebE from "./pages/WebE";
// import UsersEffectHook from "./pages/hooks/UsersEffectHook";

const router = createBrowserRouter([
  {
    element: <MyLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/karan", element: <Karan /> },
      { path: "/insta-profile", element: <InstaProfile /> },
      { path: "/topusers", element: <Topusers /> },
      { path: "/cars", element: <Cars /> },
      { path: "/car-info", element: <CarInfo /> },
      { path: "/state-management", element: <StateManagement /> },
      { path: "/cta", element: <Cta /> },
      // { path: "/events", element: <Events /> },

      { path: "/data-display", element: <DataDisplay /> },
      { path: "/data-fetching", element: <DataFetching /> },
      // { path: "/post-data", element: <PostData /> },
      // { path: "concept/custom-data-hook", element: <CustomDataHooks/> },

      // { path: "/users-effect-hook", element: <UsersEffectHook /> },
    ],
  },
  { path: "/post-data", element: <PostData /> },
  { path: "/hook", element: <UserRefHook /> },
  { path: "/input", element: <Exercise1 /> },
  { path: "/props-drilling", element: <PropsDrilling /> },
  { path: "/anime-data", element: <AnimeData /> },
  { path: "/antd-button", element: <AntdPractice/> },
  { path: "/typography", element: <TypographyPractice/> },
  { path: "/web", element: <WebE/> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
