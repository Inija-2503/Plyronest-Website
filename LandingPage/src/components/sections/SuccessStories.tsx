import { useEffect, useRef } from "react";

interface Story {
  name: string;
  college:string;
  info: string;
}

const stories: Story[] = [
  {
    name: " Harish Reddy Team",
    college:"Shetty Institute of Technology, Kalaburagi",
    info: "Harish Reddy, backed by Plyronest, won two Golds at INEX Goa for innovations in elderly care and electrical safety. His journey reflects our drive to turn student ideas into impact.",
  },
  {
    name: "Vinayakumar P Zingade",
    college:" PES College of Engineering, Mandya",
    info: "We’re proud to support Vinayakumar P Zingade, whose gratitude for our mentorship reflects PLYRoNeST’s commitment to nurturing student entrepreneurs.",
  },
  {
    name: "Vrinda K. S.",
    college:"RV College of Engineering, Bengaluru",
    info: "Vrinda K. S. and her team, backed by PLYRoNeST, earned 3rd place at the IEEE Conference and advanced to INEX 2024 for their smart urban water solution. With mentorship and 50% sponsorship, they built a strong prototype.",
  },
  {
    name: " Nimet, Shiva Rampure, Brinda",
    college:"INEX 2024 Participants",
    info: "Team Smart Sparkhad a transformational journey at INEX 2024, gaining expert mentorship, nationwide connections, and real-world insight. Thanks to PLYRoNeST, they focused fully on innovation and walked away inspired to build for lasting impact.",
  },
  {
    name: " Harish Reddy Team",
    college:"Shetty Institute of Technology, Kalaburagi",
    info: "Harish Reddy, backed by Plyronest, won two Golds at INEX Goa for innovations in elderly care and electrical safety. His journey reflects our drive to turn student ideas into impact.",
  },
  {
    name: "Vinayakumar P Zingade",
    college:" PES College of Engineering, Mandya",
    info: "We’re proud to support Vinayakumar P Zingade, whose gratitude for our mentorship reflects Plyronest’s commitment to nurturing student entrepreneurs.",
  },
  {
    name: "Vrinda K. S.",
    college:"RV College of Engineering, Bengaluru",
    info: "Vrinda K. S. and her team, backed by Plyronest, earned 3rd place at the IEEE Conference and advanced to INEX 2024 for their smart urban water solution. With mentorship and 50% sponsorship, they built a strong prototype.",
  },
  {
    name: " Nimet, Shiva Rampure, Brinda",
    college:"INEX 2024 Participants",
    info: "Team Smart Sparkhad a transformational journey at INEX 2024, gaining expert mentorship, nationwide connections, and real-world insight. Thanks to Plyronest, they focused fully on innovation and walked away inspired to build for lasting impact.",
  },
  
];

export const SuccessStories = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollAmount = 1; // pixels per step
    let interval: ReturnType<typeof setInterval>;

    const startAutoScroll = () => {
      interval = setInterval(() => {
        if (scrollContainer) {
          scrollContainer.scrollLeft += scrollAmount;

          // If end reached, loop back to start
          if (
            scrollContainer.scrollLeft + scrollContainer.clientWidth >=
            scrollContainer.scrollWidth - 1
          ) {
            scrollContainer.scrollLeft = 0;
          }
        }
      }, 10); // Smaller interval = smoother scroll
    };

    startAutoScroll();

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg--color-bg">
      {/* <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
         Success Stories
      </h2> */}

      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-9 px-25 py-3 scroll-smooth scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {stories.map((story, idx) => (
          <div
            key={idx}
            className="min-w-[280px] max-w-[500px] bg-gradient-to-r from-green-100 to-green-200 p-6 rounded-xl shadow-md flex-shrink-0"
          >
            <h3 className="text-xl font-semibold text-black mb-2">
              {story.name}
            </h3>
             <p className="text-gray-900 text-sm leading-relaxed">
              {story.college}
            </p>
            <p className="text-gray-800 text-sm leading-relaxed mt-4">
              {story.info}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
