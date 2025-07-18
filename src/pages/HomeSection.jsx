const HomeSection = ({ id }) => {
  return (
    <section id={id} className="pt-10 flex items-center">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 md:pl-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hi, I'm <span className="text-accent">Evans</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-600">
              Frontend Developer
            </h2>
            <p className="text-lg mb-8 text-gray-700">
              I build exceptional digital experiences with modern web technologies.
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="bg-accent text-white px-6 py-3 rounded-md font-medium hover:bg-accent/90 transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border border-accent text-accent px-6 py-3 rounded-md font-medium hover:bg-accent/10 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          {/*
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-accent/10 overflow-hidden border-8 border-accent/20">
              <img
                src="https://via.placeholder.com/400"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  )
}

export default HomeSection