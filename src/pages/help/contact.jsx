function Contact() {
  return (
    <>
      <form className="grid gap-2 w-[350px]">
        <input className="px-4 py-2 border rounded-sm" type="text" name="gmail" id="gmail" placeholder="example@gmail.com" />
        <textarea className="p-2 border resize-none h-22" name="message" id="message" placeholder="Message..."></textarea>
        <button className="px-4 py-2 border" type="submit">Submit</button>
      </form>
    </>
  )
}

export default Contact;