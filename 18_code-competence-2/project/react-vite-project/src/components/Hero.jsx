// import heroImage from '../assets/'
const Hero = () => {
    return (
        <section className="h-screen flex justify-center items-center">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center">
                    <div className="order-2 lg:order-1">
                        <h3 className="uppercase text-primary text-center lg:text-left">Learn From Expert</h3>
                        <h1 className="text-center lg:text-left mt-4 lg:mt-6">Turning Your Ideas Into Software</h1>
                        <p className="mt-4 text-sm md:text-lg leading-6 md:leading-8 max-w-lg mx-auto lg:mx-0 text-center lg:text-left text-[#34364A]">Embark on your coding journey today! Explore new knowledge, bring brilliant ideas to life, and become a digital visionary.</p>
                        <div className="mt-4 flex flex-col lg:flex-row gap-2 justify-center lg:justify-start max-w-md mx-auto lg:mx-0">
                            <button type="button" className="border border-primary text-primary rounded-xl">Get Started</button>
                            <button type="button" className="bg-primary text-white rounded-xl">Contact Us</button>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <img className="rounded-xl w-full md:w-[80%] lg:w-full mx-auto" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="hero-image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero