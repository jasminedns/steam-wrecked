'use client';
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";

const BackArrow = () => {
    const router = useRouter ();

    return (
        <div onClick={() => router.back()}
      className="cursor-pointer inline-flex items-center justify-center p-0 ml-4 mt-2">
        <IoArrowBack color="white" className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] hover:bg-black/50 rounded-full cursor-pointer z-50"/> 
    </div>
    );
};

export default BackArrow