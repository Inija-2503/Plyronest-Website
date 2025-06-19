interface SuccessStoryCardProps {
  name: string;
  college:string;
  story: string;
}

export const SuccessStoryCard = ({ name,college, story }: SuccessStoryCardProps) => (
  <div className="flex-shrink-0 w-80 bg--color-bg shadow-lg rounded-xl p-6 mx-3">
    <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
    <p className="text-green-600 text-sm">{college}</p>
    <p className="text-gray-600 text-sm mt-8">{story}</p>
  </div>
);
