import React from 'react'


interface MenuItemProps {
    label:string ;
    onClick :() => void
}

const MenuItem:React.FC<MenuItemProps> = ({onClick,label}) => {
  return (
    <div
    className='px-4 py-3 hover:bg-neutral-100 transiton '
    onClick={onClick}>
        {label}
    </div>
  )
}

export default MenuItem