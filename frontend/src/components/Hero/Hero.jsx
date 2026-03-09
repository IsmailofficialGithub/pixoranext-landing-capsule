import gsap from "gsap/all";
import heroBg from "../../assets/hero-pixoranest.png"
import mobileHeroBg from "../../assets/hero-pixoranest.png"
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {

    const isMobHero = useMediaQuery({
        query: "(max-width:768px)",
    });


    useGSAP(() => {
        if (!isMobHero) {
            gsap.to(".hero-section .hero-img", {
                yPercent: "-5",
                stagger: 0.02,
                scale: 1.2,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: ".hero-section",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1.5,
                }
            });
        }

        gsap.from(".hero-section .logo-overlay", {
            scale: 0,
            opacity: 0,
            duration: 1.2,
            delay: 1.5,
            ease: "elastic.out(1, 0.5)",
        });
    }, [isMobHero]);


    return (
        <section className="hero-section w-dvw md:h-dvh h-[100vh] md:p-2 p-2.5 mb-20">
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
                <div className="responsive-mobile">
                    {/* Background image */}
                    <div 
                        className="hero-img absolute inset-0 bg-no-repeat bg-cover bg-center z-0 md:block hidden" 
                        style={{ backgroundImage: `url(${heroBg})` }}
                    />

                    {/* Mobile image fallback */}
                    <div className="block lg:hidden mt-6 mb-6">
                        <img
                            src={mobileHeroBg}
                            alt="mobile bg"
                            className="w-full rounded-[2rem] object-cover shadow-[0_-25px_45px_-10px_rgba(0,0,0,0.3)]"
                        />
                    </div>
                </div>
                <div className="p-4 flex flex-col md:justify-center">
                    <div className="relative h-dvh">
                        <h1
                            className="text-[#f4efe7] text-start text-6xl md:text-9xl font-bold tracking-wider lg:absolute lg:left-2 flex items-center"
                            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}
                        >
                            <span className="relative flex items-center">
                                <span className="relative inline-block">
                                    P
                                </span>
                                ixora<span className="text-[#023ebf]">nest</span>
                            </span>
                        </h1>


                        <div className="w-full h-auto absolute top-24 md:bottom-[8%] lg:bottom-[9%] flex md:flex-row flex-col md:justify-between md:items-end">

                            <h2
                                className="text-start lg:mt-0 md:text-[#f4efe7] text-[#f4efe7] text-2xl font-bold md:tracking-wider leading-5 flex flex-col gap-1"
                                style={{ textShadow: '2px 2px 4px #000' }}
                            >
                                <span>Scale Without</span>
                                <span>Limits or Human</span>
                                <span>Intervention.</span>
                            </h2>

                            <p
                                className="md:w-[30%] w-[80%] text-[#f4efe7] text-[0.8rem] font-bold  md:font-medium tracking-wide lg:text-end mt-2 text-justify"
                                style={{ textShadow: '2px 2px 4px #000' }}
                            >
                                Deploy autonomous AI voice agents and WhatsApp automation that works 24/7 to capture, nurture, and close leads on autopilot.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Hero;

