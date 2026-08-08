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
        <div className="flex justify-center gap-4">
            <div>
                <p className="text-4xl font-bold">{days}</p>
                <span>Days</span>
            </div>

            <div>
                <p className="text-4xl font-bold">{hours}</p>
                <span>Hours</span>
            </div>

            <div>
                <p className="text-4xl font-bold">{minutes}</p>
                <span>Minutes</span>
            </div>

            <div>
                <p className="text-4xl font-bold">{seconds}</p>
                <span>Seconds</span>
            </div>
        </div>
    )
}