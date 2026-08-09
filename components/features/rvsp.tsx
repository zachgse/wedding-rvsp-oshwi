"use client"
import Image from "next/image"
import Countdown from "./countdown"
import { motion } from "motion/react";

export default function Rvsp() {
    return (
        <section className="relative min-h-screen overflow-hidden px-12">
            <Image src="/assets/bg.jpg" alt="bg" width={1920} height={1080} loading="eager" className="absolute inset-0 h-full w-full object-cover"/>

            <div className="relative z-10 min-h-screen
                            flex flex-col justify-center z-50 mx-auto gap-12 mt-24">
                <div className="relative"> 
                    {/* FLOWER 02 */}
                    <motion.div
                        className="relative z-30"
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay:1.5 }}
                    >
                        <Image alt="Flower" src="/assets/flower04.webp" width={270} height={600} 
                                className="h-auto absolute -translate-x-1/2 z-40 -rotate-16 
                                xl:w-[10%] md:w-[20%] w-[35%]
                                xl:left-[28%] lg:left-[21%] md:left-[17%] left-[10%]
                                xl:-top-24 lg:-top-24 md:-top-14 -top-11"/> 
                    </motion.div>   
                    {/* ENVELOPE */}
                    <motion.div
                        className="relative z-40"
                        initial={{ opacity: 0, y: 20, x:-20}}
                        animate={{ opacity: 1, y: 0, x:0}}
                        transition={{ duration: 1, delay:0.5 }}
                    >
                        <Image alt="Envelope open" src="/assets/envelope-open.webp" width={1900} height={1300} 
                                className="h-auto absolute -translate-x-1/2 -rotate-10
                                xl:w-[30%] md:w-[50%] w-[80%] 
                                left-[36%] top-2"/> 
                        <Image alt="Envelope button" src="/assets/envelope-button.webp" width={500} height={500} 
                                className="h-auto absolute -translate-x-1/2 -rotate-10
                                lg:w-[10%] md:w-[15%] w-[20%] 
                                left-[37%] md:top-28 top-16"/> 
                    </motion.div>
                    {/* COUPLE PIC */}
                    <motion.div
                        className="relative z-30"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Image alt="Couple pic" src="/assets/couple-pic.webp" width={1200} height={1500} 
                                className="h-auto absolute -translate-x-1/2 rotate-8 
                                xl:w-[20%] lg:w-[30%] md:w-[40%] w-[60%] 
                                md:left-[38%] left-[42%]
                                xl:-top-36 md:-top-40 -top-26"/> 
                        <Image alt="Flower" src="/assets/flower01.webp" width={500} height={500} 
                            className="h-auto absolute rotate-28 
                            xl:w-[20%] md:w-[30%] w-[60%] 
                            xl:left-[16%] lg:left-[2%] md:-left-[0%] -left-[20%] 
                            xl:-top-44 lg:-top-40 -top-20"/> 
                    </motion.div>
                </div>
                <div className="flex items-end md:gap-8 gap-0 z-50">

                    {/* RSVP — slides in from LEFT */}
                    <motion.div
                        className="w-1/2 flex justify-end"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1,delay:0.5 }}
                    >
                        <a
                            target="_blank"
                            href="https://forms.gle/QuqXwLep8NJVQvZbA"
                            className="w-full flex justify-end"
                        >
                            <Image
                                alt="RSVP"
                                src="/assets/rsvp.webp"
                                width={700}
                                height={500}
                                className="h-auto -rotate-15
                                        xl:w-[40%] lg:w-[60%] md:w-[80%] w-full"
                            />
                        </a>
                    </motion.div>

                    {/* DETAILS — slides in from RIGHT */}
                    <motion.div
                        className="w-1/2 flex justify-start mb-12"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1,delay:0.5 }}
                    >
                        <Image
                            alt="Details"
                            src="/assets/details.webp"
                            width={1200}
                            height={1800}
                            className="h-auto rotate-10
                                    xl:w-[40%] lg:w-[60%] md:w-[80%] w-full"
                        />
                    </motion.div>
                </div>
                <motion.div className="w-full h-40 mx-auto flex flex-col items-center p-4 text-white -mt-12"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1,delay:0.5 }}>
                    <p className="cursive text-[clamp(2rem,3vw,5rem)]">See you in</p>
                    <Countdown/>
                </motion.div>
            </div>
        </section>
    )
}