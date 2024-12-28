import React from 'react'

const Contact = () => {
  return (
    <>
    <section className='contact' id='contact'>
        <h1 className="heading">
            <span>Contact </span>us
        </h1>
        <div className="row">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509437!2d-122.42184228468123!3d37.77492977975869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085814f4e8d6eaf%3A0x0!2z0KHQsNGI0LAgMjQ1!5e0!3m2!1sen!2sus!4v1693123456789"
           width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
       ></iframe>

          <form >
             <h3>Get in Touch</h3>
             <div className="inputBox">
                <span className='fas fa-user'></span>
                <input type="text" placeholder='Name'/>

             </div>
             <div class="inputBox">
              <span class="fas fa-envelope"></span>
              <input type="email" placeholder="email" />
            </div>
            <div class="inputBox">
              <span class="fas fa-phone"></span>
              <input type="number" placeholder="number" />
            </div>
            <input type="submit" value="contact now" class="btn" />
          </form>
        </div>
    </section>
      
    </>
  )
}

export default Contact
