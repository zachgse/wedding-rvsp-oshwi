import Image from "next/image"
import Countdown from "./countdown"

export default function Rvsp() {
    return (
        <section className="relative min-h-screen overflow-hidden px-12">
            <Image src="/assets/bg.jpg" alt="bg" width={1920} height={1080} loading="eager" className="absolute inset-0 h-full w-full object-cover"/>

            <div className="relative z-10 min-h-screen
                            flex flex-col justify-center z-50 mx-auto gap-12 mt-24">
                <div className="relative"> 
                    <Image alt="Flower" src="/assets/flower01.webp" width={500} height={500} 
                            className="h-auto absolute z-40 rotate-28 
                            xl:w-[20%] md:w-[30%] w-[60%] 
                            xl:left-[16%] lg:-left-[2%] md:-left-[5%] -left-[20%] 
                            xl:-top-48 lg:-top-40 -top-20"/> 
                    <Image alt="Flower" src="/assets/flower04.webp" width={270} height={600} 
                            className="h-auto absolute -translate-x-1/2 z-40 -rotate-16 
                            xl:w-[10%] md:w-[20%] w-[35%]
                            xl:left-[26%] lg:left-[21%] md:left-[17%] left-[10%]
                            xl:-top-24 lg:-top-24 md:-top-14 -top-11"/> 
                    <Image alt="Envelope open" src="/assets/envelope-open.webp" width={1900} height={1300} 
                            className="h-auto absolute -translate-x-1/2 -rotate-10 z-40 
                            xl:w-[30%] lg:w-[40%] md:w-[50%] w-[80%] 
                            left-[36%] top-2"/> 
                    <Image alt="Envelope button" src="/assets/envelope-button.webp" width={500} height={500} 
                            className="h-auto absolute -translate-x-1/2 -rotate-10 z-40 
                            lg:w-[10%] md:w-[15%] w-[20%] 
                            left-[37%] md:top-28 top-16"/> 
                    <Image alt="Couple pic" src="/assets/couple-pic.webp" width={1200} height={1500} 
                            className="h-auto absolute -translate-x-1/2 rotate-8 z-30
                            xl:w-[20%] lg:w-[30%] md:w-[40%] w-[60%] 
                            md:left-[38%] left-[42%]
                            xl:-top-36 md:-top-40 -top-26"/> 
                </div>
                <div className="flex items-end md:gap-8 gap-0 z-50">
                    <a target="_blank" href="https://forms.gle/QuqXwLep8NJVQvZbA" className="w-1/2 flex justify-end">
                        <Image alt="RSVP" src="/assets/rsvp.webp" width={700} height={500}
                            className="h-auto -rotate-15 
                                    xl:w-[40%] lg:w-[60%] md:w-[80%] w-full"/>
                    </a>
                    <div className="w-1/2 flex justify-start mb-12">
                        <Image alt="Details" src="/assets/details.webp" width={1200} height={1800}
                            className="h-auto rotate-10
                                    xl:w-[40%] lg:w-[60%] md:w-[80%] w-full"/>
                    </div>
                </div>
                <div className="w-full h-40 mx-auto flex flex-col items-center p-4 text-white">
                    <p className="cursive text-[clamp(2rem,3vw,5rem)]">See you in</p>
                    <Countdown/>
                </div>
            </div>
        </section>
    )
}