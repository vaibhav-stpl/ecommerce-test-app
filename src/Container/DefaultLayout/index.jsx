import React, { Suspense } from "react";
import Loader from "../../Component/Common/spinner";
import DeafaultHeader from "../DefaultHeader";
import Routes from "../../routes";
import { Route, Switch } from "react-router-dom";

const DefaultLayout = (props) => {
  return (
    <>
      <DeafaultHeader />
      <>
        <div className={""}>
          <div className={""}>
            <div className={"mt-4"}>
              <Suspense fallback={<Loader />}>
                <Switch>
                  {Routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={(props) => (
                          <route.component {...props} {...props} />
                        )}
                      />
                    ) : null;
                  })}
                </Switch>
              </Suspense>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default DefaultLayout;
