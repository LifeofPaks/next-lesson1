import Button from '@/components/Button/Button'
import Image from 'next/image'
import React from 'react'
import "../folio.scss";

const Category = ({params}) => {
  return (
    <div>
      <h1 className='catTitle'>{params.category}</h1>

<div className="catWrapps">
<div className="catContents">
        <div className="catItem">
          <h2>Test</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore repudiandae maxime est magnam rerum impedit ad, incidunt animi vero explicabo expedita eos. Sequi possimus quis nam fugiat labore, eum adipisci?</p>
          <Button url='#' text='See More'/>
        </div>  

        <Image width={600} height={400} src='/illustration.avif' alt='cat-Img'/>
      </div>

      
</div>
      
    </div>
  )
}

export default Category