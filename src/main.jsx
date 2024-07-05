import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./pages/Navbar";
import App from "./App";
import About from "./pages/About";
import ViewAllBlogs from "./pages/viewAllBlogs";
import BlogDetail from "./pages/detailBlog";
import {
  GstBenefitsPage,
  BlogPage,
  DigitalRevolutionPage,
  TheMightyKiranaPage,
  RevolutionizingKiranaStoresPage,
  StrategiesForMSMEsPage,
} from "./pages/blogPageOne";

// Assuming you have a variable 'blogs' imported or defined somewhere for BlogDetail
const blogs = []; // Replace with your actual data

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    {/* <Navbar /> */}

    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/about' element={<About />} />
      <Route path='/blog' element={<BlogPage />} />
      <Route path='/GstBenefitsPage' element={<GstBenefitsPage />} />
      <Route
        path='/DigitalRevolutionPage'
        element={<DigitalRevolutionPage />}
      />
      <Route path='/TheMightyKiranaPage' element={<TheMightyKiranaPage />} />
      <Route
        path='/RevolutionizingKiranaStoresPage'
        element={<RevolutionizingKiranaStoresPage />}
      />
      <Route
        path='/StrategiesForMSMEsPage'
        element={<StrategiesForMSMEsPage />}
      />
      <Route
        path='/RevolutionizingKiranaStoresPage'
        element={<RevolutionizingKiranaStoresPage />}
      />
      <Route path='/ViewAllBlogs' element={<ViewAllBlogs />} />
      <Route path='/blog/:id' element={<BlogDetail blogs={blogs} />} />
    </Routes>
  </Router>
);
