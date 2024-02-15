import HomeNoAuth from "../pages/outlet/home";

export const routes = {
  auth: [
    {
      path: "/",
      element: <>Home auth</>,
    },
  ],
  noAuth: [
    {
      path: "/",
      element: <HomeNoAuth />,
    },
  ],
};
