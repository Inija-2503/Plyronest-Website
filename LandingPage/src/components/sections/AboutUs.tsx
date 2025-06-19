import { Info } from "../cards/Info";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import { Team } from "../cards/Team";

export const AboutUs = () => {
  return (
    <section id="about-us">
      {" "}
      <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center py-28 px-6 bg-body">
        <div className="w-full md:w-5/12 lg:w-1/2">
          <div className="w-full h-80 sm:h-96 relative">
            <img
              src="assets/Images/freepik__the-style-is-candid-image-photography-with-natural__46174.png"
              className="w-full h-full object-cover rounded-3xl shadow-lg relative z-10"
              alt="About Our Mission"
            />
          </div>
        </div>

        <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col ">
          <Title> About Plyronest </Title>
          <Paragraph>
            Plyronest is on a mission to empower researchers, 
            institutions, and innovators with intelligent tools, 
            expertled training, and collaborative environments that 
            simplify the research journey from concept to publication. 
            By merging cutting-edge technology with real-world mentorship, 
            we help individuals and organizations accelerate discovery, 
            upskill teams, and transform bold ideas into meaningful impact
             making research and innovation more accessible, efficient, 
             and impactful for all.
          </Paragraph>

          <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            <Info
              title="Mission"
              description="To empower researchers and institutions with intelligent tools and expert training that accelerate innovation and real-world impact."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </Info>
            <Info
              title="Vision"
              description="To be the leading platform driving global research excellence and inclusive knowledge advancement."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </Info>
          </div>
        </div>
        

      </Container>
      <h1 className="text-3xl md:text-4xl font-bold text-black-700 mb-7 text-heading-2 text-center ">Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-900 ml-2">Leaders</span></h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center mb-20 ">

        <Team name="Lohith T D" role="Founder & CEO" />
        <Team name="Puneeth" role="CO-Founder & Head of Outreach Team" />
        <Team name="Nitish" role="CO-Founder & CTO" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-black-700 mb-7 text-heading-2 text-center mt-5 ">Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-900 ml-2">Core Team</span></h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center mb-25">
        <Team name="Sumeet Hibare" role="Software Developer" />
        <Team name="Somesh Hotkar" role="Technical Team" />
        <Team name="Sanni Kumar" role="Technical Team" />
        <Team name="Vinay Buddhi" role="Technical Team" />
        <Team name="Shivraj" role="Technical Team" />
        <Team name="Pooja" role="CO-Founder & Finance Head" />
        <Team name="Thosif Bapu Saheb Naikwadi" role="CO-Founder & CMO" />
        <Team name="Ruchita" role="CO-Founder & HR" />
        <Team name="Darshan" role="Events Manager" />
        <Team name="Harshit Kumar" role="Curriculum Manager" />
        <Team name="Shreyas" role="Events Manager" />
        <Team name="Inija" role="Technical Trainer" />
      </div>
    </section>
  );
};
