import React from 'react'

const Contact = () => {
  return (
    <section id="contact">
      <h1>Book Your Table</h1>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Enter your email" />
        <textarea name="" id="" cols="30" rows="10" placeholder="Your feedback is valuable to us."></textarea>
        <input type="submit" value="BOOK" />
      </form>
    </section>
  )
}

export default Contact
