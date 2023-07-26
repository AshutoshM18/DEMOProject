'use Client'
interface AvatarProps{
  src?: string | null | undefined;
}

import Image from "next/image"

function Avatar({src}: AvatarProps){
  return (
   <Image className='rounded-full' height={30} width={30} alt="Avatar" src={src ||"/images/placeholder.jpg"}/>
  )
}
export default Avatar;