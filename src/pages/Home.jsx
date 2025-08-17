import React from "react";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

const skills = [
  {
    title: "CATIA",
    description:
      "Expertise in designing complex mechanical components and assemblies with precision.",
    icon: "⚙️",
  },
  {
    title: "Fusion 360",
    description:
      "Skilled in 3D modeling, simulation, and manufacturing workflows for mechanical projects.",
    icon: "🛠️",
  },
  {
    title: "AutoCAD",
    description:
      "Proficient in 2D drafting and technical drawings for engineering designs.",
    icon: "📐",
  },
  {
    title: "Programming",
    description:
      "C++, C, Python, HTML, CSS — building both functional and visually appealing projects.",
    icon: "💻",
  },
];

// Projects data - easily expandable for future projects
const projects = [
  {
    id: 1,
    title: "CATIA V5 Mechanical Design",
    category: "Mechanical Engineering",
    description: "A comprehensive mechanical design project showcasing advanced CAD modeling techniques, assembly design, and engineering analysis using CATIA V5. This project demonstrates precision engineering and innovative problem-solving approaches in mechanical design.",
    image: "/catia.png",
    icon: "⚙️",
    features: [
      "Complex component modeling and assembly design",
      "Engineering analysis and simulation",
      "Manufacturing workflow optimization",
      "Technical documentation and drawings"
    ],
    technologies: ["CATIA V5", "3D Modeling", "Assembly Design", "Engineering Analysis"],
    links: {
      view: "#",
      download: "/catia_design.CATPart"
    },
    featured: true
  },
  {
    id: 2,
    title: "Fusion 360",
    category: "Mechanical Engineering",
    description: "Fusion 360 is a powerful CAD/CAM/CAE software that allows you to design, simulate, and manufacture products. It is a versatile tool that can be used for a variety of applications, from simple to complex.",
    image: "/catia.png",
    icon: "🛠️",
    features: [
      "Complex component modeling and assembly design",
      "Engineering analysis and simulation",
      "Manufacturing workflow optimization",
      "Technical documentation and drawings"
    ],
    technologies: ["CATIA V5", "3D Modeling", "Assembly Design", "Engineering Analysis"],
    links: {
      view: "#",
      download: "/catia_design.CATPart"
    },
    featured: true
  },
];

const Home = () => {
  const { scrollToSection } = useSmoothScroll();

  const handleViewWork = (e) => {
    e.preventDefault();
    scrollToSection('projects');
  };

  return (
    <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen">
      {/* Hero Section */}
      <section id="home" className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-32 xl:px-40 text-center md:text-left gap-10 py-16">
        {/* Text Section */}
        <div className="flex-1 space-y-6 mt-10 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text leading-tight animate-slideUp">
            Hi, I'm Aditya Markad
          </h1>
          <p className="text-gray-700 text-lg text-justify md:text-xl max-w-md mx-auto md:mx-0">
            A passionate <b>Mechanical Engineer</b> with strong expertise in CAD tools, product design, and programming. My work focuses on connecting the worlds of engineering and technology to create practical, innovative, and efficient solutions. With a keen eye for detail and a problem-solving mindset, I strive to design products that are both functional and impactful. I believe in turning ideas into reality and collaborating to build solutions that make a difference.
            <br /> <br />
            Let's build something amazing together!
          </p>
          <button
            onClick={handleViewWork}
            className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-110 hover:shadow-xl transition-transform duration-500 ease-in-out cursor-pointer"
          >
            View My Work
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <div className="relative rounded-full p-1 bg-gradient-to-r from-blue-400 to-blue-700 shadow-lg hover:shadow-2xl transition duration-500 animate-popIn">
            <img
              src="src/pages/m.png"
              alt="Aditya Markad"
              className="rounded-full h-[300px] md:h-[450px] lg:h-[500px] w-[300px] md:w-[450px] lg:w-[500px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-16">
        <div className="bg-blue-100 hover:scale-105 hover:shadow-2xl transition transform duration-500 rounded-xl shadow-lg p-10 text-center max-w-4xl mx-auto space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg text-justify">
            I am a Mechanical Engineer with a strong foundation in design tools like CATIA, Fusion 360,
            and AutoCAD. Alongside engineering, I code in C++, Java, Python, and build modern web
            applications using React, HTML, and CSS. I aim to create designs that are both functional
            and innovative, bridging the gap between technical precision and creative problem-solving.
          </p>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="bg-blue-100 hover:scale-105 hover:shadow-2xl transition transform duration-500 rounded-xl shadow-lg p-10 text-center max-w-4xl mx-auto space-y-4">
        <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          Career Highlights
        </h3>
        <p className="text-gray-600 text-lg">
          Mechanical Engineering Graduate with experience in CAD design and
          programming, blending creativity with technical expertise.
        </p>
        <p className="text-gray-600">
          Worked on projects involving product modeling, simulation, and
          automation. Always eager to learn and take on new challenges 🚀.
        </p>
      </section>

      {/* Skills Section */}
      <section className="text-center space-y-10 py-16">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          My Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 space-y-4 border border-blue-100 cursor-default
                         transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-blue-50"
            >
              <div className="text-4xl">{skill.icon}</div>
              <h4 className="text-xl font-semibold text-blue-700">
                {skill.title}
              </h4>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects & Work */}
      <section className="py-16" id="projects">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text mb-4">
              Projects & Work
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              From mechanical product designs to modern web applications, I take pride in
              delivering high-quality work that solves real-world problems.
            </p>
          </div>

          {/* All Projects in Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl p-6 border border-blue-100 cursor-default transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-blue-50 group">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="text-center p-4">
                      <div className="text-5xl mb-2">{project.icon}</div>
                      <p className="text-blue-600 font-medium text-sm">{project.title}</p>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="space-y-3">
                  <div className="flex items-center mb-2">
                    <div className="text-2xl mr-2">{project.icon}</div>
                    <h4 className="text-lg font-semibold text-blue-700">{project.title}</h4>
                  </div>

                  <p className="text-gray-600 text-sm line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 2).map((tech, index) => (
                      <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                        +{project.technologies.length - 2} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <a
                      href={project.links.view}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium hover:underline flex items-center"
                    >
                      View Project
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                    <a
                      href={project.links.download}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium hover:underline flex items-center"
                    >
                      Download
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div id="contact" className="text-center mt-12">
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
            >
              <span>Let's Work Together</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="text-gray-600 mt-4 text-sm">
              Ready to bring your ideas to life? Let's collaborate on amazing projects!
            </p>
          </div>
        </div>
      </section>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes popIn {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-fadeIn {
            animation: fadeIn 1.2s ease-in-out forwards;
          }
          .animate-slideUp {
            animation: slideUp 1s ease-out forwards;
          }
          .animate-popIn {
            animation: popIn 1s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
