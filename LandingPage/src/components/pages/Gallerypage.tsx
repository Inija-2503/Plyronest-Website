// pages/GalleryPage.tsx (or wherever you’re displaying the gallery)

import { Navbar } from "../elements/Navbar"; // adjust path as needed
import { Gallery } from "../elements/Gallery";
import { Footer } from "../elements/Footer";

const Gallerypage = () => {
  return (
    <>
      <Navbar />  Navbar on top
      <Gallery /> {/* Your gallery section */}
      <Footer />
    </>
  );
};

export default Gallerypage;
