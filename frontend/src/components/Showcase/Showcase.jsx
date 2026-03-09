import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import aiVoiceImg from "../../assets/ai-voice.png";
import whatsappImg from "../../assets/whatsapp-auto.png";
import socialImg from "../../assets/social-dist.png";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Showcase = () => {
    const containerRef = useRef(null);
    const imgConRef = useRef(null);

    useGSAP(() => {
        if (!imgConRef.current || !containerRef.current) return;

        const totalWidth =
            imgConRef.current.scrollWidth - containerRef.current.offsetWidth;

        gsap.to(imgConRef.current, {
            x: () => -totalWidth,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "-10% 10%",
                end: () => `+=${totalWidth}`,
                scrub: true,
                pin: true,
            }
        });
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className='relative w-full h-dvh overflow-hidden'
        >
            <div
                ref={imgConRef}
                className="absolute top-0 left-0 h-full flex items-center justify-start gap-2 p-2 overflow-hidden"
            >
                {/* Product 1 */}
                <div className="relative flex-shrink-0 w-[80vw] h-full overflow-hidden">
                    <div className="w-[77vw] absolute top-10 left-10 flex justify-between items-start text-[#f4efe7] z-20">
                        <h1 className="text-4xl font-bold drop-shadow-lg">CallOrbit AI<br />Voice Agents</h1>
                        <p className="border-[1px] border-[#f4efe7] rounded-3xl px-3 py-1 text-center text-[0.7rem] bg-black/30 backdrop-blur-sm">Voice AI</p>
                    </div>
                    <img
                        src={aiVoiceImg}
                        alt="CallOrbit AI"
                        className="image-item w-full h-full object-cover rounded-[2.5rem]"
                    />
                    <div className="w-[77vw] absolute bottom-10 left-10 flex justify-between items-start z-20">
                        <p className="text-[0.9rem] font-bold text-[#f4efe7] drop-shadow-md">Ultra-realistic AI voice agents for cold calling and support.<br />Zero latency, 100% emotional intelligence.</p>
                        <div className="flex justify-center items-center gap-2">
                            <p className="text-[#f4efe7] border-[1px] border-[#f4efe7] rounded-3xl px-4 py-1 text-center text-[0.7rem] bg-black/30 backdrop-blur-sm">01</p>
                            <p className="text-[#aaa] border-[1px] border-[#aaa] rounded-3xl px-4 py-1 text-center text-[0.7rem]">03</p>
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none"></div>
                </div>

                {/* Product 2 */}
                <div className="relative flex-shrink-0 w-[80vw] h-full overflow-hidden">
                    <div className="w-[77vw] absolute top-10 left-10 flex justify-between items-start text-[#f4efe7] z-20">
                        <h1 className="text-4xl font-bold drop-shadow-lg">LeadNest<br />Automation</h1>
                        <p className="border-[1px] border-[#f4efe7] rounded-3xl px-3 py-1 text-center text-[0.7rem] bg-black/30 backdrop-blur-sm">WhatsApp AI</p>
                    </div>
                    <img
                        src={whatsappImg}
                        alt="LeadNest Automation"
                        className="image-item w-full h-full object-cover rounded-[2.5rem]"
                    />
                    <div className="w-[77vw] absolute bottom-10 left-10 flex justify-between items-start z-20">
                        <p className="text-[0.9rem] font-bold text-[#f4efe7] drop-shadow-md">Automate your entire WhatsApp marketing funnel.<br />Official API, visual flow builder, and smart triggers.</p>
                        <div className="flex justify-center items-center gap-2">
                            <p className="text-[#f4efe7] border-[1px] border-[#f4efe7] rounded-3xl px-4 py-1 text-center text-[0.7rem] bg-black/30 backdrop-blur-sm">02</p>
                            <p className="text-[#aaa] border-[1px] border-[#aaa] rounded-3xl px-4 py-1 text-center text-[0.7rem]">03</p>
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none"></div>
                </div>

                {/* Product 3 */}
                <div className="relative flex-shrink-0 w-[80vw] h-full overflow-hidden">
                    <div className="w-[77vw] absolute top-10 left-10 flex justify-between items-start text-[#f4efe7] z-20">
                        <h1 className="text-4xl font-bold drop-shadow-lg">EcoConnect<br />Marketing Hub</h1>
                        <p className="border-[1px] border-[#f4efe7] rounded-3xl px-3 py-1 text-center text-[0.7rem] bg-black/30 backdrop-blur-sm">Omni-Channel</p>
                    </div>
                    <img
                        src={socialImg}
                        alt="EcoConnect Hub"
                        className="image-item w-full h-full object-cover rounded-[2.5rem]"
                    />
                    <div className="w-[77vw] absolute bottom-10 left-10 flex justify-between items-start z-20">
                        <p className="text-[0.9rem] font-bold text-[#f4efe7] drop-shadow-md">Scale your brand across all social platforms.<br />AI-optimized scheduling and caption generation.</p>
                        <div className="flex justify-center items-center gap-2">
                            <p className="text-[#f4efe7] border-[1px] border-[#f4efe7] rounded-3xl px-4 py-1 text-center text-[0.7rem] bg-black/30 backdrop-blur-sm">03</p>
                            <p className="text-[#aaa] border-[1px] border-[#aaa] rounded-3xl px-4 py-1 text-center text-[0.7rem]">03</p>
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
};

export default Showcase;
