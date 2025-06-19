import { Layout } from "../Layout"
import { Collabration } from "../sections/Collabration"
import { Hero } from "../sections/Hero"
// import { AboutUs } from "../sections/AboutUs"    
import { Services } from "../sections/Services"
// import { CTA } from "../sections/CallToAction"

export const Homepage=()=>{
    return(
        <Layout title="PLYRoNeST">
            <Hero />
            <Collabration />
            {/* <AboutUs /> */}
            <Services />
            {/* <CTA /> */}
        </Layout>
    )
}