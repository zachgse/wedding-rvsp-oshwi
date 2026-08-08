import Image from "next/image"

export default function Initial() {
  return (
    <section className="relative min-h-screen overflow-hidden">
        {/* Background video */}
        <video className="absolute inset-0 h-full w-full object-cover"
            autoPlay muted loop playsInline>
            <source src="/assets/vid-web.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative z-10 flex min-h-screen items-center justify-center">
            <div className="relative mx-auto w-[60%] max-w-[500px]">
                {/* Envelope */}
                <Image src="/assets/envelope-before.png"
                    width={500} height={500}
                    className="relative z-30 h-auto w-full"
                    alt="Envelope"/>

                {/* Button */}
                <Image src="/assets/envelope-button.png"
                    width={80} height={80}
                    className="absolute left-1/2 top-1/2 z-40 h-auto w-[16%] -translate-x-1/2 -translate-y-1/2"
                    alt="Envelope button"/>

                {/* Flower */}
                <Image src="/assets/flower-01.png"
                    width={200} height={200}
                    className="absolute bottom-0 left-[-35%] z-20 h-auto w-[60%] -rotate-30"
                    alt="Flower 01"/>
            
                <Image src="/assets/flower-02.png"
                    width={200} height={200}
                    className="absolute top-[-18%] right-[-15%] z-50 h-auto w-[30%] -rotate-30"
                    alt="Flower 02"/>

                <Image src="/assets/flower-04.png"
                    width={200} height={200}
                    className="absolute bottom-[-18%] right-[-15%] z-50 h-auto w-[30%] rotate-5"
                    alt="Flower 04"/>
            </div>
        </div>

    </section>
  );
}