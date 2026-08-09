import Image from "next/image"
import React, { Dispatch, SetStateAction } from "react";

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
            <div className="flex flex-col items-center justify-center gap-4">
                <p>A LOVE LETTER FROM</p>
                <p className="text-6xl">Claribel and Josh</p>
            </div>
            
            <div className="relative mx-auto w-[60%] max-w-[500px]">
                <Image src="/assets/envelope-before.webp"
                    loading="eager"
                    width={1900} height={1300}
                    className="relative z-30 h-auto w-full"
                    alt="Envelope"/>
                <Image onClick={() => setIsClicked(true)}
                    src="/assets/envelope-button.webp"
                    width={500} height={500}
                    className="absolute left-1/2 top-1/2 z-40 h-auto w-[16%] -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    alt="Envelope button"/>
                <Image src="/assets/flower01.webp" width={500} height={500}
                    className="absolute bottom-0 left-[-35%] z-20 h-auto w-[60%] -rotate-30"
                    alt="Flower"/>
                <Image src="/assets/flower02.webp" width={500} height={500}
                    className="absolute top-[-18%] right-[-15%] z-50 h-auto w-[30%] -rotate-30"
                    alt="Flower"/>
                <Image src="/assets/flower03.webp" width={400} height={600}
                    className="absolute bottom-[-18%] right-[-15%] z-50 h-auto w-[30%] rotate-5"
                    alt="Flower"/>
            </div>

            <p className="text-3xl">(TAP THE ENVELOPE TO OPEN)</p>
        </div>

    </section>
  );
}