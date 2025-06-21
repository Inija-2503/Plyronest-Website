// import { useState } from "react";

// interface TeamProps {
//   name: string;
//   role: string;
//   image: string;
//   bio: string;
// }

// export const Team = ({ name, role, image, bio }: TeamProps) => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       className={`transition-all duration-300 rounded-xl shadow-md border bg-white overflow-hidden
//         ${hovered ? "h-auto" : "h-40"} cursor-pointer`}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <img
//         src={image}
//         alt={name}
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-4">
        

//         {hovered && (
//           <>
//             <h3 className="text-lg font-semibold">{name}</h3>
//             <p className="text-sm text-gray-500">{role}</p>
//             <p className="mt-3 text-sm text-gray-700">
//               {bio}
//             </p>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

interface TeamProps {
  name: string;
  role: string;
}

export const Team = ({ name, role }: TeamProps) => {
  return (
    <div className="max-w-xs w-[300px]  text-center p-5 sm:p-6 lg:p-8 rounded-3xl  bg-box-bg shadow-lg
                    shadow-box-shadow relative overflow-hidden hover:scale-105 transform transition duration-300 hover:shadow-[0_0_10px_4px_rgba(34,197,94,0.6)] ">
      <h3 className="text-lg font-semibold text-heading-1 ">{name}</h3>
      <p className="text-sm text-heading-2">{role}</p>
    </div>
  );
};
