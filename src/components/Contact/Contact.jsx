import React, { useState } from 'react'
import "./Contact.css"

const Contact = () => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] =useState ('');
  const [ errors, setErrors ] =useState([]);

  const isValidEmail = email => {
    const regex = /^([a-zA-Z0-9_-])+@([a-z]+[.\])+([a-z]){3,18}$/
    return regex.test(String(email).toLowerCase());
  };

  const handleSubmit = () => {
    const errorsArray = [];

    if (!name) errorsArray.push('Name is required');
    if (!name) errorsArray.push('Email is required');
    if (!email && !isValidEmail(email)) errorsArray.push('Please enter a valid Email');
    if (!message) errorsArray.push('Please write something for us!');

    setErrors(errorsArray);
}


return (
  <section id="contact">
      
      <h1 className="headings">Contact Me</h1>
      
      <div className="container">
      
          <form>

              <label for="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name.." value={name} onChange={e => setName(e.target.value)} className="contact_input"/>
          
              <label for="email">Email</label>
              <input type="text" id="email" name="email" placeholder="Your email.." value={email} onChange={e => setEmail(e.target.value)} className="contact_input"/>
          
              <label for="message">Message</label>
              <textarea id="message" name="message" placeholder="Write something.." rows="10" value={message} onChange={e => setMessage(e.target.value)} className="contact_input"></textarea>
          
              <input  type="submit" value="Submit" onClick={handleSubmit} className="contact_button button"/>
              <div className={errors.length > 0 ? 'visible' : ''}>
                  <ul>
                    {errors.map((err, index) => (<li key={index}>{err}</li> ))}
                  </ul>
                </div>
          </form>
      
      </div>
      
  </section>  
  
)
}

export default Contact