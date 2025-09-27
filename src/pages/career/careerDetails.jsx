import { Link, useLoaderData } from "react-router-dom"

export default function CareerDetails() {
  const career = useLoaderData();
  return (
    <>
      <Link to="/careers">
        <p className="underline mb-8">Go back</p>
      </Link>
      
      <div className="grid gap-2 p-4 rounded-sm bg-slate-200">
        <h2 className="text-2xl font-bold">Career Details for {career.title}</h2>
        <p>Starting salary: ₱{career.salary.toLocaleString()}</p>
        <p>Location: {career.location}</p>
        <p>
          Details: <br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dicta iste earum quas autem, adipisci placeat, voluptate dolor ratione vitae nam corrupti veritatis non! Quaerat earum labore quibusdam consectetur voluptatem.
        </p>
      </div>
    </>
  )
}

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch('http://localhost:4000/careers/' + id);

  if(!res.ok){
    throw Error('Could not find career')
  }
  return res.json();

}