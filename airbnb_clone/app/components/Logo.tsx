'use client'

import Image from "next/image"
import Airbnb from "@/public/images/svgexport-1.png"

const Logo = () => {
  return (
    <div>
        <Image
         alt="Airbnb Logo"
         height={100}
         width={100}
         src={Airbnb}
        />
    </div>
  )
}

export default Logo