export const Collabration = () => {
  return (
    <section className="bg-body py-10 px-6 md:px-16 flex flex-col lg:flex-row items-center justify-center gap-8">
      {/* Text + Logos Section */}
      <div className="relative flex flex-col items-center text-center lg:text-left lg:items-start max-w-3xl lg:max-w-none lg:flex-1 lg:w-1/2 mt-8">
        {/* Gradient Heading */}
        <h2 className="text-4xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700">
          Kalpataru × Plyronest
        </h2>

        {/* Subheading */}
        <p className="mt-9 text-lg md:text-lg text-heading-2 font-medium">
          Providing personalized guidance and support for their academic and career aspirations. Plyronest is proud to partner with Kalpataru to offer our students access to this valuable resource.
        </p>

        {/* Logos Section */}
        <div className="flex flex-row  items-center justify-center gap-10 mt-10">
          {/* Kalpataru Logo Card */}
          <div className="shadow-box bg-box-bg rounded-2xl p-4 transition-transform duration-300 hover:scale-105">
            <img
              src="assets/Images/logo1.png"
              alt="Kalpataru College Logo"
              className="w-28 h-28 object-contain rounded-full"
            />
          </div>

          {/* Plyronest Logo Card */}
          <div className="shadow-box bg-box-bg rounded-2xl p-4 transition-transform duration-300 hover:scale-105">
            <img
              src="assets/Images/logo.png"
              alt="Plyronest Logo"
              className="w-40 h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex flex-1 lg:w-1/2 relative max-w-3xl lg:max-w-none">
        <img 
          src="https://www.kfgsctiptur.in/gallery/MAIN%20BLOCK%20(1).JPG"
          alt="Kalpataru College Building"
          width={2345}
          height={2350}
          className="rounded-3xl object-cover w-full h-96 max-h-full lg:max-h-none"
        />
      </div>
    </section>
  );
};
