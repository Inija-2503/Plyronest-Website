import { Link } from "react-router-dom";

interface NavItemProps {
  href: string;
  text: string;
  target?: string;
}

export const NavItem = ({ href, text, target }: NavItemProps) => {
  const isExternal = target === "_blank" || href.startsWith("http");

  return (
    <li>
      {isExternal ? (
        <a
          href={href}
          target={target}
          rel="noopener noreferrer"
          className="px-3 py-1 text-heading-1 hover:text-green-600 transition-colors duration-300"
        >
          {text}
        </a>
      ) : (
        <Link
          to={href}
          className="px-3 py-1 text-heading-1 hover:text-green-600 transition-colors duration-300"
        >
          {text}
        </Link>
      )}
    </li>
  );
};
