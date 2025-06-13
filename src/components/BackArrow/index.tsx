'use client';
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";

const BackArrow = () => {
    const router = useRouter ();

    return (
        <div className="absolute items-center justify-center hover:bg-black rounded-full ml-4 mt-2 z-50">
        <IoArrowBack color="white" onClick={router.back} size={32} cursor="pointer"/> 
    </div>
    );
};

export default BackArrow