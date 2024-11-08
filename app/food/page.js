"use client";

import Image from 'next/image';

const FoodPage = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <Image
                src="/assets/images/logos/logo.png"
                alt="Logo"
                width={200} // Imposta la larghezza desiderata per il logo
                height={200} // Imposta l'altezza desiderata per il logo
            />
        </div>
    );
};

export default FoodPage;
