import { Paragraph } from "../shared/Paragraph";
interface InternProps{
    title:string;
    description:string;
    image:string;
}
export const Intern=({title,description,image}:InternProps)=>{
    return(
        <div className="w-65 sm:max-w-65 md:max-w-70 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow overflow-hidden">
           <div className="w-full h-40 md:h-48 lg:h-52">
                <img
                    src={image}
                    alt={title}
                    className="w-full max-h-full object-contains object-center"
                />
            </div>
            <div className="p-5 sm:p-6 lg:p-8 space-y-4">
                <h2 className="text-lg md:text-xl font-semibold text-heading-2">
                    {title}
                </h2>
                <Paragraph>{description}</Paragraph>
            </div> 
        </div>
    );
};