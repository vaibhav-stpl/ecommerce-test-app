import React from "react";

const ProductsPage = React.lazy(() => import("./Container/Prducts"));
const Page404 = React.lazy(() => import("./Container/page404"));
const checkout = React.lazy(() => import("./Component/Common/thankyouPage"));
const Routes = [
  {
    path: "/",
    exact: true,
    name: "Products",
    component: ProductsPage,
  },
  {
    path: "/checkout",
    exact: false,
    name: "Checkout",
    component: checkout,
  },
  {
    exact: true,
    path: "*",
    name: "Page 404",
    component: Page404,
  },
];

export default Routes;
