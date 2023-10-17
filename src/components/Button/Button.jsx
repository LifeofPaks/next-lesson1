import Link from 'next/link'
import React from 'react'

const Button = ({url, text}) => {
  return (
    <Link href={url}>
        <button className='primaryBtn'>{text}</button>
    </Link>
  )
}

export default Button