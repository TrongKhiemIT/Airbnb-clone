'use client';

import Image from "next/image";

interface AvatarProps{
    src?: string | null | undefined;
}

const Avartar: React.FC<AvatarProps> = ({
    src
}) => {
    return (  
        <Image
            className="rounded-full"
            height="30"
            width="30"
            alt="Avartar"
            src={src || "/img/placeholder.jpg"}
        />
    );
}
 
export default Avartar;