import { Link } from 'react-router-dom';

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export const CustomLink = ({ href, children, className = '', ...props }: CustomLinkProps) => {
  return (
    <Link 
      to={href}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
};
