
function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
            <div>
                <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
                <p className="mb-4">
                UtkarshGPT is an advanced AI chatbot designed to provide personalized, insightful, and efficient solutions, transforming conversations into meaningful experiences.
                </p>
            </div>
            <div>
                <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
                <ul>
                    <li>
                    <a
                        href="#"
                        className="hover:text-white transition-colors duration-300"
                    >
                        Home
                    </a>
                    </li>
                    <li>
                    <a
                        href="https://final-portfolio-three-gray.vercel.app/"
                        className="hover:text-white transition-colors duration-300"
                    >
                        About
                    </a>
                    </li>
                    <li>
                    <a
                        href="#Footer"
                        className="hover:text-white transition-colors duration-300"
                    >
                        Contact
                    </a>
                    </li>
                    
                </ul>
            </div>
            <div>
                <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
                <div className="flex flex-col">
                    <a
                    href="https://github.com/Utkarsh-123github"
                    className="hover:text-white transition-colors duration-300"
                    >
                    Github
                    </a>
                    <a
                    href="https://x.com/UtkarshTiwari90"
                    className="hover:text-white transition-colors duration-300"
                    >
                    Twitter
                    </a>
                    <a
                    href="https://leetcode.com/u/utk0703/"
                    className="hover:text-white transition-colors duration-300"
                    >
                    Leetcode
                    </a>
                    <a
                    href="https://www.linkedin.com/in/utkarsh-tiwari-b5b034250/"
                    className="hover:text-white transition-colors duration-300"
                    >
                    LinkedIn
                    </a>
                </div>
            </div>
            <div>
                <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
                <p>Varanasi, India</p>
                <p>221002</p>
                <p>Email: utk0703@gmail.com</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer