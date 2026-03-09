import { MdArrowOutward } from "react-icons/md";
import AnimateBtn from "./AnimateBtn";

const ReserveBtn = () => {
    return (
        <a href="mailto:info@pixoranest.com" className="relative z-[100] cursor-pointer group">
            <div className="absolute right-6 top-[2vw] w-fit bg-[#f4efe7] px-4 py-1 flex justify-end items-center rounded-4xl gap-2 hover:scale-105 transition-all duration-300">
                <AnimateBtn btnName="Contact" href="mailto:info@pixoranest.com"/>

                <MdArrowOutward className="bg-[#2a2725] text-[#b3a694] w-[2.5vw] h-auto rounded-full p-1" />
            </div>
        </a>

    )
}

export default ReserveBtn;