import AnimatedText from "../components/AnimatedText"
import Container from "../components/Container"
import Image from 'next/image'
import profilePic from '../../public/anas.jpg'


const About = () => {
    return (
        <Container>
            <section id="about" className="w-full min-h-screen py-1">
                <AnimatedText text="Passion Fuels Purpose!" className="" />
                <div className="flex flex-col items-center md:items-start py-12 md:flex-row md:px-12 gap-4 md:gap-12">
                    <div className="md:w-1/4  w-[75%] order-2 md:order-1 relative">
                        <div className="absolute -bottom-5 -left-5 -z-10 w-[115%] md:w-[100%] h-[100%]  bg-dark dark:bg-light" />
                        <Image src={profilePic} alt="Irelia" className="w-auto max-h-[85vh]" /> 
                    </div>
                    <div className="md:w-2/4  order-1 md:order-2">
                        <h2 className="text-3xl text-center md:text-start hidden md:block font-bold">About</h2>
                        <p className='my-6 text-base text-center md:text-left font-medium'>
                            Hello! my name is Anas, as a fourth-year software engineering student at ISMAGI in Rabat, 
                            I am passionate about developing innovative applications that bring value to users. 
                            With experience in both front-end and back-end development, 
                            I am capable of building full-stack applications from scratch with a focus on 
                            providing the best user experience possible.
                        </p>
                        <p className='my-6 text-base text-center md:text-left font-medium'>
                            Moving forward, my goal is to work on complex applications with expert teams that will 
                            help me take my skills to the next level. I am dedicated to delivering the best possible 
                            apps to my clients and users, and I am excited about the opportunities that lie ahead.
                        </p>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default About