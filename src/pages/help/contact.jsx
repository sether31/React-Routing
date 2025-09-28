import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact() {
  const data = useActionData();
  console.log({data})
  return (
    <>
      <Form 
        method="POST"
        action="/help/contact"
        className="grid gap-2 w-[350px]"
      >
        <input className="px-4 py-2 border rounded-sm" type="text" name="gmail" id="gmail" placeholder="example@gmail.com" required />
        <textarea className="p-2 border resize-none h-22" name="message" id="message" placeholder="Message..." required></textarea>
        <p className="italic text-red-500 text-sm">
          {data && data.error}
        </p>
        <button className="px-4 py-2 border" type="submit">Submit</button>
      </Form>
    </>
  )
}

export const contactAction = async ({ request }) => {
  console.log(request);
  const data = await request.formData();

  const submission = {
    gmail: data.get('gmail'),
    message: data.get('message')
  }

  if(submission.message.length < 10) return { error:'Message must be atleast 10 characters long.' }

  console.log(submission);
  
  return redirect('/');
}