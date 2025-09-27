// layouts/RootLayout.jsx
import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header className="fixed top-0 w-full p-4 text-white bg-black">
        <nav className="flex gap-2 container-xl">
          <h1 className="mr-auto text-xl">LOGO</h1>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : 'border border-black px-4 py-2'}>
            Home
          </NavLink>
          <NavLink to="about" className={({ isActive }) => isActive ? 'active' : 'border border-black px-4 py-2'}>
            About
          </NavLink>
          <NavLink to="help" className={({ isActive }) => isActive ? 'active' : 'border border-black px-4 py-2'}>
            Help
          </NavLink>
           <NavLink to="careers" className={({ isActive }) => isActive ? 'active' : 'border border-black px-4 py-2'}>
            Career
          </NavLink>
        </nav>
      </header>
      <main className="container-xl">
        <Outlet />
      </main>
    </>
  );
}
