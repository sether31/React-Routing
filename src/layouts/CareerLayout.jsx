import { Outlet } from "react-router-dom";

function CareerLayout() {
  return (
    <section>
      <h1 className="mt-22 text-3xl">Career Page</h1>

      <br/>
      <Outlet />
    </section>
  )
}

export default CareerLayout;