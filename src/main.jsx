import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./pages/Navbar";
import App from "./App";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import ViewAllBlogs from "./pages/viewAllBlogs";
// import BlogDetail from "./pages/detailBlog";
import {
  GstBenefitsPage,
  BlogPage,
  DigitalRevolutionPage,
  TheMightyKiranaPage,
  RevolutionizingKiranaStoresPage,
  StrategiesForMSMEsPage,
} from "./pages/blogPageOne"; // Adjust paths as per your actual file structure
import { Features } from "./pages/Features";

import {
  BestAffordableScannersPage,
  FundingOptionsPage,
  TaxGuidePage,
  GovernmentSchemesPage,
  BusinessRegistrationGuidePage,
} from "./pages/allBlogPage";
// const blogs = [];
import CareerPage from "./pages/career";
import ContactPage from "./pages/contact";
import { Footer } from "./pages/Footer";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Navbar /> {/* Assuming you pass t and logo as props */}
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/about' element={<About />} />
      <Route path='/blogs' element={<ViewAllBlogs />} />
      <Route path='/features' element={<Features />} />
      <Route path='/carees-page' element={<CareerPage />} />
      <Route path='/contact-page' element={<ContactPage />} />
      <Route path='/gst-benifit-page' element={<GstBenefitsPage />} />
      <Route path='/blog-page' element={<BlogPage />} />
      <Route
        path='/digital-revolution-page'
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
      <Route
        path='/best-affordable-scanners-page'
        element={<BestAffordableScannersPage />}
      />
      <Route path='/funding-option' element={<FundingOptionsPage />} />
      <Route path='/tax-guide' element={<TaxGuidePage />} />
      <Route path='/government-schemes' element={<GovernmentSchemesPage />} />
      <Route
        path='/business-registration'
        element={<BusinessRegistrationGuidePage />}
      />
    </Routes>
    <Footer />
  </Router>
);
