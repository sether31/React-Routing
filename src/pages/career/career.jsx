import { Link, useLoaderData } from "react-router-dom";

export default function Career() {
  const careers = useLoaderData();
  console.log(careers)

  return (
    <div className="mb-20">
      {careers.map((career) => (
        <Link 
          className="grid gap-2 p-4 mb-4 rounded-sm bg-slate-200" 
          to={career.id}
          key={career.id}
        >
          <p className="text-xl hover:text-blue-500 font-medium">
            {career.title}
          </p>
          <p className="italic">
            Based in {career.location}
          </p>
        </Link>
      ))}
    </div>
  )
}

// loaders
export const careerLoader = async () => {
  const res = await fetch('http://localhost:4000/careers')

  if(!res.ok) {
    throw Error('Could not fetch the careers')
  }

  return res.json();
}
