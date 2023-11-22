import { Link } from "react-router-dom";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

const Header = () => {
  return (
    <nav>
      <Link to="/" style={{ margin: 10 }}>Home</Link>
      <Link to="/pokemon">Pokemon</Link>
    </nav>
  );
};
