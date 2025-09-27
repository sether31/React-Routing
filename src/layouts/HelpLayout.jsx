import { NavLink, Outlet } from "react-router-dom";

function HelpLayout() {
  return (
    <section>
      <h1 className="mt-4 text-3xl">Help Page</h1>
      
      <nav className="flex justify-center gap-2 mt-8">
        <NavLink 
          to="faq" 
          className={({isActive}) => {
            return isActive ? 'active' : 'px-4 py-2 border rounded-sm'
          }}
        >
          FAQ
        </NavLink> {' '}
        <NavLink 
          to="contact" 
          className={({isActive}) => {
            return isActive ? 'active' : 'px-4 py-2 border rounded-sm'
          }}
        >
          Contact
        </NavLink>
      </nav>

      <br />
      <Outlet />
    </section>
  )
}

export default HelpLayout;