const AboutUs = () => {
  return (
    <section id="about" className="py-20">
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-16 items-center">
                <div className="order-1 md:order-2">
                    <h3 className="uppercase">About Us</h3>
                    <h2>Software House</h2>
                    <p className="mt-2 md:mt-4 text-sm md:text-base leading-6 md:leading-7 text-justify text-[#34364A]"><span className="text-primary">DevSolve</span> - software house that provides various services in software development. <span className="text-primary">DevSolve</span> was established on August 14, 2023, and has served more than 200 clients. Our clients come from both domestic and international backgrounds.</p>
                    <p className="mt-2 md:mt-4 text-sm md:text-base leading-6 md:leading-7 text-justify text-[#34364A]">At <span className="text-primary">DevSolve</span>, we're more than just website developers; we are creative partners who understand the power of captivating design, advanced functionality, and enchanting user experiences. With our expert team comprising web developers, graphic designers, and UX/UI specialists, we craft websites that not only reflect your unique corporate identity but also enhance your online allure and credibility.</p>
                </div>
                <div className="order-2 md:order-1">
                    <img className="rounded-xl" src="https://images.unsplash.com/photo-1612296727716-d6c69d2a2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs