import React from "react";
import FrameFortyEight from "pages/FrameFortyEight";
import DesktopFive from "pages/DesktopFive";
import DesktopFour from "pages/DesktopFour";
import DesktopThree from "pages/DesktopThree";
import DesktopTwo from "pages/DesktopTwo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/desktoptwo" element={<DesktopTwo />} />
        <Route path="/desktopthree" element={<DesktopThree />} />
        <Route path="/desktopfour" element={<DesktopFour />} />
        <Route path="/desktopfive" element={<DesktopFive />} />
        <Route path="/framefortyeight" element={<FrameFortyEight />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
