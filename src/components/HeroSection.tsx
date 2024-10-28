import Link from "next/link"
import { Button } from "./ui/moving-border";
import { Spotlight } from "./ui/Spotlight";
const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 ">
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
        />
        <div className="p-4 relative z-10 w-full text-center">
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Your Smart, Instant, AI Assistant</h1>
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Our AI chatbot website offers instant, intelligent conversations, providing personalized assistance, quick answers, and seamless interaction, enhancing user experience effortlessly.</p>
            <div className="mt-4">
                <Link href={'/signup'}>
                    <Button
                        borderRadius='1.75rem' className='border-2 bg-white dark:bg-black text-black flex-1 dark:text-white border-neutral-200 dark:border-slate-800' duration={Math.floor(Math.random() * 10000) + 10000}
                        >
                        Generate
                    </Button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection  