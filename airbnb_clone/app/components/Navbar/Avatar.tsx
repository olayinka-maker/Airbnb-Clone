import Image from 'next/image'
import React from 'react'
import Lummy from  '@/public/images/test.png'

const Avatar = () => {
  return (
    <Image
    className='rounded-full'
    height={30}
    width={30}
    alt='Avatar'
    src={Lummy}
    
    />
  )
}

export default Avatar