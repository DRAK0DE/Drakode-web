import "../styles/components/button.css";

export default function Button({ children, href }) {
  const handleClick = () => {
    window.location.href = href;
  };
  return (
    <a className="button" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
