import React from 'react'
import './Contact.scss'

import Image from 'next/image'
const Contact = () => {
  return (
    <div className='contact container'>
      <h1>Let's Keep In Touch</h1>

      <div className="content">
        <Image className='img' src='/contact.svg' width={600} height={600} alt='contact-img'/>
        <form>
          <input type="text" placeholder='Name' />
          <input type="text" placeholder='Email' />
          <textarea  placeholder='Message'/>
          <button className='primaryBtn'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact