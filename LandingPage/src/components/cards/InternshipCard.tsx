interface InternshipCardProps {
  title: string;
  para: string;
  image: string;
  pdfUrl: string;
}

export const InternshipCard = ({ title, image, pdfUrl,para}: InternshipCardProps) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-4 py-5 bg--color-bg">
      
      {/* Left: Info + Actions */}
      <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-heading-2 text-center mb-10">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-900 ml-2">
            Internship Year Book 2025
          </span>
        </h2>
        <p className="space-y-4 text-heading-2 text-base leading-relaxed">{para}</p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:gap-4 gap-3 justify-center md:justify-start">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg--color-bg text-heading-1 px-5 py-3 rounded hover:text-blue-700 transition"
          >
            Preview
          </a>
          <a
            href="https://online.flippingbook.com/view/382228020/"
            className="fbo-embed bg--color-bg text-heading-1 px-5 py-3 rounded hover:text-green-700 transition text-center block"
            data-fbo-id="942a53c1e3"
            data-fbo-ratio="3:2"
            data-fbo-lightbox="yes"
            data-fbo-width="100%"
            data-fbo-height="auto"
            data-fbo-version="1"
            style={{ maxWidth: "100%" }}
            target="_blank"
          >
            Read
          </a>
          <a
            href={pdfUrl}
            download
            className="bg--color-bg text-heading-1 px-5 py-3 rounded hover:text-purple-700 transition"
          >
            Download
          </a>
        </div>
      </div>
      {/* Right: Book/Image */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <img
          src={image}
          alt={title}
          className="w-[800px] h-[650px] object-cover "
        />
      </div>

    </section>
    
  );
};
