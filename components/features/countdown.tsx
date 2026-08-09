"use client"

import { useEffect, useState } from "react"

export default function Countdown() {
    const targetDate = new Date("March 4, 2027 00:00:00").getTime()

    const [timeLeft, setTimeLeft] = useState(targetDate - Date.now())

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(targetDate - Date.now())
        }, 1000)

        return () => clearInterval(timer)
    }, [targetDate])

    if (timeLeft <= 0) {
        return <div>It's time! 🎉</div>
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
        (timeLeft / (1000 * 60 * 60)) % 24
    )
    const minutes = Math.floor(
        (timeLeft / (1000 * 60)) % 60
    )
    const seconds = Math.floor(
        (timeLeft / 1000) % 60
    )

    return (
        <div className="flex justify-center md:gap-12 gap-4 regular">
            <div className="flex flex-col items-center">
                <p className="text-[clamp(2rem,3vw,5rem)]">{days}</p>
                <span>DAYS</span>
            </div>

            <div className="flex flex-col items-center">
                <p className="text-[clamp(2rem,3vw,5rem)]">{hours}</p>
                <span>HOURS</span>
            </div>

            <div className="flex flex-col items-center">
                <p className="text-[clamp(2rem,3vw,5rem)]">{minutes}</p>
                <span>MINUTES</span>
            </div>

            <div className="flex flex-col items-center">
                <p className="text-[clamp(2rem,3vw,5rem)]">{seconds}</p>
                <span>SECONDS</span>
            </div>
        </div>
    )
}