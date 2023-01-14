import React, {useState} from 'react';

import './ContactPage.css';

// const ContactPage = () => (
//     <>
//     <h1>Contact Us</h1>
//     </>
    
// );
const ContactPage = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Sending...");
      const { name, email, message } = e.target.elements;
      let details = {
        name: name.value,
        email: email.value,
        message: message.value,
      };
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      setStatus("Submit");
      let result = await response.json();
      alert(result.status);
    };
    return (
        <form class="contact-from-codematra" action="" method="get" autocomplete="off" >
        <h3 class="fheading">Contact Form</h3>              

        <label>Name <span class="required">*</span></label>
        <input type="text" name="name" placeholder="Enter your name." required="required"  />
  
         <label>Email <span class="required">*</span></label>
         <input type="email" name="email" placeholder="Enter your email." required="required" />
  
        <label>Contact Number (Optional)</label>
        <input type="text" name="contact" placeholder="Enter your contact number."  />

         <label>Message <span class="required">*</span></label>
        <textarea name="message" rows="4" placeholder="Enter your message." required="required"></textarea>
  
         <p class="submit-wr"><input type="submit" name="submit" value="Submit" /> </p>
        </form>
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label htmlFor="name">Name:</label>
    //       <input type="text" id="name" required />
    //     </div>
    //     <div>
    //       <label htmlFor="email">Email:</label>
    //       <input type="email" id="email" required />
    //     </div>
    //     <div>
    //       <label htmlFor="message">Message:</label>
    //       <textarea id="message" required />
    //     </div>
    //     <button type="submit">{status}</button>
    //   </form>
    );
  };
  
export default ContactPage;