import { PdfCard } from "../cards/PdfCard";
import { SuccessStories } from "../sections/SuccessStories";

const images = Array.from({ length: 6 }, (_, i) => `/assets/Images/img${i + 1}.jpg` || `/assets/Images/img${i + 1}.png` );

export const Gallery = () => {
  return (
    
    <section className="py-25 px-6 bg-body text-center mt-7">
      <h2 className="text-3xl md:text-4xl font-bold text-heading-1 mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-900">
            Our Success Stories
          </span>
        </h2>
      <SuccessStories />
      <h2 className="text-3xl md:text-4xl font-bold text-heading-2 text-center mb-10">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-900 ml-2">
          Our Moments Captured
        </span>
        
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transform transition duration-300">
            <img
              src={src}
              alt={`Gallery image ${idx + 1}`}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
        {/* <p className="text-lg text-gray-600">Coming Soon...</p> */}
      {/* Achievements and Success Stories Section */}
      <section className="mt-20 text-center">
        
        {/* <p className="text-lg text-heading-2">Coming Soon...</p> */}
        
        <PdfCard
          title="Annual Year Book 2025"
          para="A glimpse into our proudest achievements and unforgettable memories from the year.
                Each moment captured reflects our growth, teamwork, and dedication.
                From joyful celebrations to milestones reached, every photo tells a story.
                These highlights remind us of how far we’ve come and how much more lies ahead.
                Together, we’ve built something truly special."
          image="assets/Images/book.png"
          pdfUrl="/assets/Images/Empowering Student Entrepreneurs.pdf"
/>

      </section>
    </section>
    
  );
};
