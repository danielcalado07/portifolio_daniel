import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  Code,
  Database,
  TestTube,
  Menu,
  X,
  Home,
  User,
  Briefcase,
  GraduationCap,
  FolderOpen,
  Sun,
  Moon,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  React.useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = [
    {
      name: "ReactJS",
      level: "Experiente",
      icon: <Code className="w-5 h-5" />,
    },
    { name: "NodeJS", level: "Hábil", icon: <Database className="w-5 h-5" /> },
    { name: "NestJS", level: "Hábil", icon: <Code className="w-5 h-5" /> },
    { name: "NextJs", level: "Hábil", icon: <Code className="w-5 h-5" /> },
    {
      name: "Cypress",
      level: "Experiente",
      icon: <TestTube className="w-5 h-5" />,
    },
    {
      name: "Selenium",
      level: "Experiente",
      icon: <TestTube className="w-5 h-5" />,
    },
  ];

  const projects = [
    {
      title: "Tiketei",
      description:
        "Plataforma de vendas de ingressos desenvolvida com Next.js e TypeScript. Interface responsiva com foco na experiência do usuário.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "/images/bannerTiketei.png",
      liveUrl: "www.tiketei.com",
      status: "Em Produção",
    },
    {
      title: "Leiloame",
      description:
        "Site de leilões para ONGs desenvolvido com React e TypeScript. Interface intuitiva e responsiva para diferentes dispositivos.",
      technologies: ["React", "TypeScript", "CSS3"],
      image: "/images/leiloame.png",
      liveUrl: "leiloame2.netlify.app",
      status: "Em Desenvolvimento",
    },
    {
      title: "Suprema Charque",
      description:
        "Plataforma de vendas de carne premium desenvolvida com Next.js e TypeScript. Interface responsiva e otimizada para conversão.",
      technologies: ["Next", "Tailwind CSS", "TypeScript"],
      image: "/images/suprema.png",
      liveUrl: "supremacharque.netlify.app/",
      status: "Em Desenvolvimento",
    },
    {
      title: "Projeto Liga Labs",
      description:
        "Projeto vinculado ao programa de aceleração Liga Labs, focado em soluções inovadoras.",
      technologies: ["Next", "Tailwind CSS", "TypeScript"],
      image: "/images/sds.png",
      liveUrl: "#",
      status: "Em Desenvolvimento",
    },
  ];

  const experiences = [
    {
      period: "Fev 2025 - Presente",
      role: "Desenvolvedor Front-End",
      company: "Freelancer",
      location: "Remoto",
      description:
        "Desenvolvo e mantenho o front-end da Tiketei, uma plataforma de vendas de ingressos, utilizando Next.js e TypeScript. Trabalho na criação de interfaces responsivas, integração com APIs e otimização de desempenho para melhorar a experiência do usuário.",
    },
    {
      period: "Fev 2024 - Presente",
      role: "Desenvolvedor Front-End",
      company: "Instituto Federal de Pernambuco",
      location: "Remoto",
      description:
        "Trabalho no front-end do Leiloame, um site de leilões para ONGs, usando React e TypeScript. Meu foco é criar uma interface fácil de usar e responsiva, que funcione bem em diferentes dispositivos.",
    },
    {
      period: "Mar 2024 - Ago 2024",
      role: "Analista de Qualidade",
      company: "Show tecnologia",
      location: "Garanhuns, PE, Brasil",
      description:
        "Atuação como analista de qualidade, com foco em testes automatizados e manuais. Utilização das ferramentas Cypress e Postman para garantir a qualidade do software, identificando e corrigindo bugs e problemas de usabilidade.",
    },
    {
      period: "Fev 2024 - Jan 2025",
      role: "Desenvolvedor Front-End",
      company: "Compass UOL",
      location: "Remoto",
      description:
        "Atuação como desenvolvedor, com foco em React e MongoDB. Desenvolvimento de aplicações web modernas e escaláveis, utilizando React para a criação de interfaces dinâmicas e MongoDB para gerenciamento de banco de dados.",
    },
  ];

  const education = [
    {
      period: "Fev 2021 - Presente",
      degree: "Tecnologia em Análise e Desenvolvimento de Sistemas",
      institution: "Instituto Federal de Pernambuco",
      location: "Garanhuns, PE, Brasil",
    },
    {
      period: "Fev 2016 - Dez 2018",
      degree: "Diploma Técnico em Informática",
      institution: "Instituto Federal de Pernambuco",
      location: "Garanhuns, PE, Brasil",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                Daniel Calado
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <Home className="w-4 h-4" />
                Início
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <User className="w-4 h-4" />
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <FolderOpen className="w-4 h-4" />
                Projetos
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <Briefcase className="w-4 h-4" />
                Experiência
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <GraduationCap className="w-4 h-4" />
                Educação
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-700 hover:to-purple-800 transition-all duration-300 shadow-lg"
              >
                Contato
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <div className="px-6 py-4 space-y-4">
              <button
                onClick={() => {
                  scrollToSection("home");
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-3 w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <Home className="w-5 h-5" />
                Início
              </button>
              <button
                onClick={() => {
                  scrollToSection("about");
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-3 w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <User className="w-5 h-5" />
                Sobre
              </button>
              <button
                onClick={() => {
                  scrollToSection("projects");
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-3 w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <FolderOpen className="w-5 h-5" />
                Projetos
              </button>
              <button
                onClick={() => {
                  scrollToSection("experience");
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-3 w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <Briefcase className="w-5 h-5" />
                Experiência
              </button>
              <button
                onClick={() => {
                  scrollToSection("education");
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-3 w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <GraduationCap className="w-5 h-5" />
                Educação
              </button>
              <button
                onClick={() => {
                  scrollToSection("contact");
                  setIsMenuOpen(false);
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-800 transition-all duration-300 w-full shadow-lg"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Header */}
      <header
        id="home"
        className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 pt-32"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Daniel da Silva Calado</h1>
          <p className="text-xl mb-6 text-blue-100">
            Desenvolvedor de Software
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>São João - PE, Brasil</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+55 87981572591</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>danielcalado159@gmail.com</span>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <a
              href="https://www.linkedin.com/in/daniel-calado-a1950a159/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/danielcalado07"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Sobre Mim
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-700 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
              Sou profissional com experiência em desenvolvimento front-end e
              garantia de qualidade, atuando com React.js, Next.js, Tailwind CSS
              e MongoDB. Tenho habilidades para desenvolver interfaces de
              usuário eficientes e intuitivas, bem como realizar testes
              unitários e automação de testes para assegurar a qualidade e a
              funcionalidade do software.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="education"
        className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Experiência Profissional
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-700 mx-auto"></div>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="mb-2 lg:mb-0">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <div>{exp.period}</div>
                    <div>{exp.location}</div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="about"
        className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Educação
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-700 mx-auto"></div>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="mb-2 lg:mb-0">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                      {edu.institution}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.location}
                    </p>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {edu.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="education"
        className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Projetos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-700 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        project.status === "Em Produção"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={
                        project.liveUrl === "#"
                          ? undefined
                          : project.liveUrl.startsWith("http")
                          ? project.liveUrl
                          : `https://${project.liveUrl}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-700 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-800 transition-all duration-300 shadow-lg ${
                        project.liveUrl === "#"
                          ? "opacity-50 pointer-events-none cursor-not-allowed"
                          : ""
                      }`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver Projeto
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="about"
        className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Habilidades Técnicas
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-700 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400">
                    {skill.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      skill.level === "Experiente"
                        ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300"
                        : "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300"
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Vamos Trabalhar Juntos?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Estou sempre aberto a novas oportunidades e projetos interessantes
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:danielcalado159@gmail.com"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Enviar Email
            </a>
            <a
              href="tel:+5587981572591"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Ligar Agora
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Daniel da Silva Calado</h3>
              <p className="text-gray-400 dark:text-gray-500">
                Desenvolvedor de Software
              </p>
            </div>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/daniel-calado-a1950a159/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/danielcalado159"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center text-gray-400 dark:text-gray-500">
            <p>
              &copy; 2024 Daniel da Silva Calado. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
