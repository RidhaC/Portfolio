import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/projects", name: "Projects" },
    { path: "/resume", name: "Resume" },
    { path: "/blog", name: "Blog" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <nav className="bg-gray-800 px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-400">Ridha Chehime Portfolio</h1>
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`transition-all duration-200 font-medium hover:text-blue-400 ${
                  location.pathname === item.path ? "text-blue-400" : "text-gray-300"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
