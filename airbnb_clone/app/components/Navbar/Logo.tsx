'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

import Airbnb from "@/public/images/svgexport-1.png"

const Logo = () => {
  const router = useRouter();
  return (
    <div>
        <Image
         alt="Airbnb Logo"
         height={100}
         width={100}
         src={Airbnb}
        className="hidden md:block "
        />
    </div>
  )
}

export default Logo