import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout.jsx";
import AnalyticsTracker from "./components/common/AnalyticsTracker.jsx";
import ScrollToTop from "./components/common/ScrollToTop.jsx";
import routes from "./routes/routes.jsx";

const App = () => {
  return (
    <>
      <AnalyticsTracker />
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          {routes.map(({ path, Component }, i) => (
            <Route
              key={i}
              path={path}
              element={
                <Suspense fallback={<div className="container">Loading...</div>}>
                  <Component />
                </Suspense>
              }
            />
          ))}
        </Route>
      </Routes>
    </>
  );
};

export default App;
