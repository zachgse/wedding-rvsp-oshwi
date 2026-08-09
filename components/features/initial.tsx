"use client"

import Image from "next/image"
import { Dispatch, SetStateAction } from "react";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";

type InitialProps = {
    setIsClicked: Dispatch<SetStateAction<boolean>>
}

export default function Initial({setIsClicked}:InitialProps) {
  return (
    <section className="relative min-h-screen overflow-hidden text-center">
        <video className="absolute inset-0 h-full w-full object-cover"
            autoPlay muted loop playsInline>
            <source src="/assets/vid-web.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 flex flex-col min-h-screen items-center justify-around text-white">
            <div className="flex flex-col gap-8 justify-center items-center">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                >
                    <p className="block regular text-[clamp(1rem,1.25vw,3rem)] tracking-widest leading-none">A LOVE LETTER FROM</p>
                </motion.div>
                
                <p className="block cursive text-[clamp(5rem,8vw,10rem)] leading-none">
                    <Typewriter
                        words={["Claribel & Josh"]}
                        loop={1}
                        cursor
                        cursorStyle=""
                        typeSpeed={150}
                        delaySpeed={2000}
                    />
                </p>
            </div>
            <div className="relative mx-auto w-[60%] max-w-[800px]">
                {/* FLOWER 01 — BEHIND ENVELOPE */}
                <motion.div
                    className="absolute inset-0 z-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <Image
                        src="/assets/flower01.webp"
                        width={500}
                        height={500}
                        className="absolute bottom-0 left-[-32%] h-auto w-[60%] -rotate-15"
                        alt="Flower"
                    />
                </motion.div>

                {/* ENVELOPE */}
                <motion.div
                    className="relative z-30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    <Image
                        src="/assets/envelope-before.webp"
                        loading="eager"
                        width={1900}
                        height={1300}
                        className="relative h-auto w-full"
                        alt="Envelope"
                    />
                </motion.div>

                {/* FLOWER 02 + 03 — ABOVE ENVELOPE */}
                <motion.div
                    className="absolute inset-0 z-40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <Image
                        src="/assets/flower02.webp"
                        width={500}
                        height={500}
                        className="absolute top-[-18%] right-[-15%] h-auto w-[30%] -rotate-30"
                        alt="Flower"
                    />

                    <Image
                        src="/assets/flower03.webp"
                        width={400}
                        height={600}
                        className="absolute bottom-[-18%] right-[-15%] h-auto w-[30%] rotate-5"
                        alt="Flower"
                    />
                </motion.div>

                {/* BUTTON — ABSOLUTE TOP LAYER */}
                <motion.div
                    className="absolute inset-0 z-50 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    <Image
                        onClick={() => setIsClicked(true)}
                        src="/assets/envelope-button.webp"
                        width={500}
                        height={500}
                        className="pointer-events-auto absolute left-1/2 top-1/2 h-auto w-[30%] -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                        alt="Envelope button"
                    />
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
            >
                <p className="regular text-[clamp(1rem,1.25vw,3rem)] tracking-widest">(TAP THE ENVELOPE TO OPEN)</p>
            </motion.div>

        </div>

    </section>
  );
}