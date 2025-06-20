import { internes } from "../../utils/interns-data"
import { Intern } from "../cards/Intern"
import { Container } from "../shared/Container"
import { Paragraph } from "../shared/Paragraph"
import { Title } from "../shared/Title"
export const Internship=()=>{
    return(
        <section id="internship">
            {" "}
            <Container className="space-y-10 md:space-y-12 py-30 px-8 bg-body mt-20">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <Title>
                        Internship Opportunities
                    </Title>
                    <Paragraph>
                        Explore our internship opportunities designed to provide hands-on experience and professional growth. Join us to enhance your skills and contribute to real-world projects.
                    </Paragraph>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-center ">
                    {internes.map((intern,key)=>(
                        <Intern 
                            key={key}
                            title={intern.title}
                            description={intern.description}
                            image={intern.image}
                        />
                    ))}
                </div>
            </Container>
        </section>
    )
}