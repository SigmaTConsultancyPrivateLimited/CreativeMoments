import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const SignUpSuplier = React.lazy(() => import("pages/signup_supplier"));
const SignUp = React.lazy(() => import("pages/signuppage"));
const SignUpUser = React.lazy(() => import("pages/signup_user"));
const SignIn = React.lazy(() => import("pages/signinpage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signinpage" element={<SignIn />} />
          <Route path="/signup_supplier" element={<SignUpSuplier />} />
          <Route path="/signup_user" element={<SignUpUser />} />
          <Route path="/signuppage" element={<SignUp />} />         
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
