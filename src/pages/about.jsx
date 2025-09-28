import { useState } from "react";
import { Navigate } from "react-router-dom";
function About() {
  const [user, setUser] = useState('sether')

  if(!user){
    return <Navigate to="/" replace={true} />
  }

  return(
    <section>
      <h2 className="text-3xl">About Page</h2>
      <p className="my-8">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis ducimus minus, itaque repellendus aut est fuga dolor non, molestias laborum nihil asperiores nam unde magnam odit voluptatem dicta quod, eaque esse mollitia nulla repellat qui? Cumque quidem, dolorem molestiae, doloribus harum ipsum enim nobis facilis, hic fugiat illum cupiditate perferendis.
      </p>
      <button 
        className="px-4 py-2 text-white bg-blue-500 rounded-sm hover:bg-blue-700"
        onClick={() => setUser(null)}
      >
        Logout
      </button>
    </section>
  )
}

export default About;