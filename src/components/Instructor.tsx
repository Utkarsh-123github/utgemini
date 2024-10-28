
import Link from "next/link"
import { AnimatedTooltip } from "./ui/animated-tooltip"
import { WavyBackground } from "./ui/wavy-background"
const people = [
  {
    id: 1,
    name: "Utkarsh Tiwari",
    designation: "Software Engineer",
    image: "https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?auto=compress&cs=tinysrgb&w=600"
      
  }
]

function Instructor() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
          <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Developer</h2>
          <p className="text-base md:text-lg text-white text-center mb-4">Utkarsh, a skilled developer with expertise in coding, problem-solving, and building efficient, innovative software solutions.</p>
          <div className="flex flex-row items-center justify-center mb-10 w-full">
            <Link href={"https://final-portfolio-three-gray.vercel.app"}> 
              <AnimatedTooltip items={people} />
            </Link>
          </div>
      </WavyBackground>
    </div>
  )
}

export default Instructor