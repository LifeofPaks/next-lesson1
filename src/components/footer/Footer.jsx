import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <p>&copy;<span>Paks</span> 2023. All rights reserved.</p>
      <div className="socialIcons">
        <Image width={20} height={20} src='/facebook.png' alt='social-icon' className='icon'/>        
        <Image width={20} height={20} src='/instagram.png' alt='social-icon' className='icon'/>        
        <Image width={20} height={20} src='/twitter.png' alt='social-icon' className='icon'/>        
        <Image width={20} height={20} src='/youtube.png' alt='social-icon' className='icon'/>        
        <Image width={17} height={17} src="https://img.icons8.com/color/48/skype--v1.png" alt='social-icon' className='icon'/>        
      </div>
    </div>
  )
}

export default Footer