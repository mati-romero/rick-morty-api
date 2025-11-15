import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <nav className="flex flex-col items-center justify-center py-6 text-white">
      {/* Logo */}
      <img
        src="/img/titulo.svg"
        alt="Logo"
        className="max-w-[400px] w-full mx-auto mb-6"
      />

      {/* Links */}
      <div className="flex gap-6 text-blue-500 font-semibold">
        <Link to="/">Home</Link>
        <Link to="/character">Character</Link>
        <Link to="/episode">Episode</Link>
        <Link to="/location">Location</Link>
      </div>
    </nav>
  );
}
