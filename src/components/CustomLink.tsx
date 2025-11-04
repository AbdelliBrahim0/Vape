import { Link, useNavigate } from 'react-router-dom';
import { usePageTransition } from '@/contexts/PageTransitionContext';

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export const CustomLink = ({ href, children, className = '', ...props }: CustomLinkProps) => {
  const { startTransition } = usePageTransition();
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Empêche la navigation par défaut
    startTransition(() => {
      navigate(href);
    });
  };

  return (
    <Link 
      to={href}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
};
