import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Layout } from "./components/Layout";
// import { AboutUs } from "./components/sections/AboutUs";
// import { CTA } from "./components/sections/CallToAction";
// import { Collabration } from "./components/sections/Collabration";
// import { Hero } from "./components/sections/Hero";
// import { Internship } from "./components/sections/Internship";
// import { Services } from "./components/sections/Services";
import Gallerypage from "./components/pages/Gallerypage"; // ✅ Import gallery
import { Homepage } from "./components/pages/Homepage";
import InternPage from "./components/pages/InternPage";
import ConnectPage from "./components/pages/ConnectPage"
import AboutPage from "./components/pages/AboutPage";

// function Home() {
//   return (
//     <>
//       <Hero />
//       <Collabration />
//       <AboutUs />
//       <Services />
//       <Internship />
//       <CTA />
//     </>
//   );
// }

function App() {
  return (
    <Router>
      {/* <Layout title="PLYRoNeST"> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/gallery" element={<Gallerypage />} /> {/* ✅ Add this route */}
          <Route path="/internship" element={<InternPage />} />
          <Route path="/connect" element={<ConnectPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      {/* </Layout> */}
    </Router>
  );
}

export default App;
