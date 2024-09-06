import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-4 text-center text-sm text-white">
      <Link 
        href="https://github.com/adnjoo/text-adventure/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-gray-800 underline"
      >
        View on GitHub
      </Link>
    </footer>
  );
};

export default Footer;