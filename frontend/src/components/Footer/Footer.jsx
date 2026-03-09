import { FaBehance, FaInstagram, FaFacebookF } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import MarqueeText from '../Marquee/MarqueeText';

const Footer = () => {
    return (
        <section className='w-screen h-dvh px-6 mt-10'>
            <p className='text-[.7rem] text-[#eae5dd] choose-subtitle mt-10 uppercase tracking-widest'>Ready for digital transformation?<br />Deploy your AI agents with Pixoranest</p>
            <div>
                <MarqueeText />
            </div>

            <div className='flex justify-between items-center text-2xl mt-14'>
                <h3 className='text-[#b1a696]'>Pixoranest is a leading digital agency<br />
                    specializing in AI automation and<br />
                    growth products.<br /><br />
                    Want to scale your business? <a href="mailto:info@pixoranest.com" className='text-[#f4efe7] hover:text-[#c4c1b9] underline'>info@pixoranest.com</a>
                </h3>

                <div className='flex flex-col justify-center items-end'>
                    <a href="#welcome" className='text-[#f2ede5] text-2xl'>Home</a>
                    <a href="#welcome" className='text-[#f2ede5] text-2xl'>Services</a>
                    <a href="#welcome" className='text-[#f2ede5] text-2xl'>Products</a>
                    <a href="#welcome" className='text-[#f2ede5] text-2xl'>Why Pixoranest</a>
                    <a href="#welcome" className='text-[#f2ede5] text-2xl'>Process</a>
                    <a href="#welcome" className='text-[#f2ede5] text-2xl'>Success Stories</a>
                </div>
            </div>

            <div className="w-full flex justify-between items-center mt-20">
                <div className="flex justify-center items-center gap-1">
                    <div className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5] cursor-pointer hover:bg-[#f2ede5] hover:text-[#181717] transition-all transition-all duration-300'><FaBehance className="text-xl" /></div>
                    <div className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5] cursor-pointer hover:bg-[#f2ede5] hover:text-[#181717] transition-all duration-300'><FaInstagram className="text-xl" /></div>
                    <div className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5] cursor-pointer hover:bg-[#f2ede5] hover:text-[#181717] transition-all duration-300'><CiLinkedin className="text-xl" /></div>
                    <a href="https://www.facebook.com/105697072575656" target="_blank" rel="noopener noreferrer" className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5] cursor-pointer hover:bg-[#f2ede5] hover:text-[#181717] transition-all duration-300'><FaFacebookF className="text-xl" /></a>
                </div>

                <div>
                    <p className="text-[0.8rem] text-[#b1a696] text-right">
                        Next Generation AI Platform<br />
                        Scaling businesses across the globe.
                    </p>
                </div>
            </div>
        </section>


    )
}

export default Footer;
