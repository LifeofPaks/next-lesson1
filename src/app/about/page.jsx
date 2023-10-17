import React from 'react'
import './About.scss'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const About = () => {
  return (
    <div className='container about'>

      <div className="imgWraps">

      <Image className='aboutImg' src='/Tech-2.avif' width={1200} height={300} alt='about-images'/>
      <div className="ImgCaps">
        <h1>Digital Storytellers</h1>
        <h2>Handcrafting award winning digital experiences</h2>
      </div>
      </div>

      <div className="content">
      <div className="item">
          <h2>Who are we?</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, unde. Animi, quo quos soluta quas repellat autem cupiditate temporibus eius laborum, vel commodi voluptatibus, ratione fuga esse ipsa sit? Tempore.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, unde. Animi, quo quos soluta quas repellat autem cupiditate temporibus eius laborum, vel commodi voluptatibus, ratione fuga esse ipsa sit? Tempore.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, unde. Animi, quo quos soluta quas repellat autem cupiditate temporibus eius laborum, vel commodi voluptatibus, ratione fuga esse ipsa sit? Tempore.</p>

        </div>

        <div className="item">
          <h2>What we do</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea deserunt vero iste architecto at, sed natus? Quos officiis necessitatibus sed, voluptates laudantium odit, odio mollitia sapiente, magni ea illo eos.</p>
          
          <ul>
            <li>- Creative illustrations</li>
            <li>- Dynamic Websites</li>
            <li>- Fast and Handy Mobile Apps</li>
          </ul>

          <Button url='/contact' text='Contact'/>
        </div>
      </div>
    </div>
  )
}

export default About