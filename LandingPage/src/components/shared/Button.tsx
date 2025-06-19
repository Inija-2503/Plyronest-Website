interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ onClick, children, className = "" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-4 text-lg rounded-full outline-none cursor-pointer
                 relative overflow-hidden border border-transparent bg-green-600 ${className}`}
    >
      {children}
    </button>
  );
};
