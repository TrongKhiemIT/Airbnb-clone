'use client';

import Image from "next/image";

const Avartar = () => {
    return (  
        <Image
            className="rounded-full"
            height="30"
            width="30"
            alt="Avartar"
            src="/img/placeholder.jpg"
        />
    );
}
 
export default Avartar;