import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';
import Orb from './components/ui/Orb';

const projects = [
  { 
    id: 1, 
    title: "Navigation System", 
    tech: ["Flask", "Leaflet.js"], 
    description: "Interactive web-based route planner with real-time map visualization.",
    github: "https://github.com/yourusername/nav-system" 
  },
  { 
    id: 2, 
    title: "BloodNet", 
    tech: ["MERN Stack", "JWT"], 
    description: "Full-stack blood bank platform for donor management.",
    github: "https://github.com/yourusername/bloodnet"
  },
  { 
    id: 3, 
    title: "RFID Voting", 
    tech: ["Embedded C", "STM32F401"], 
    description: "Secure real-time vote counting designed on STM32 hardware.",
    github: "https://github.com/yourusername/rfid-voting"
  },
  { 
    id: 4, 
    title: "Smart Agriculture", 
    tech: ["Arduino", "IoT"], 
    description: "IoT-based system to monitor soil moisture and automate irrigation.",
    github: "https://github.com/yourusername/smart-agri"
  },
  { 
    id: 5, 
    title: "E-Commerce API", 
    tech: ["Node.js", "Stripe"], 
    description: "High-performance backend API with integrated payment processing.",
    github: "https://github.com/yourusername/shop-api"
  },
  { 
    id: 6, 
    title: "Portfolio 2026", 
    tech: ["React", "Three.js"], 
    description: "Personal portfolio featuring interactive 3D elements.",
    github: "https://github.com/yourusername/portfolio"
  }
];

const skills = [
  { category: "Core Tech", items: ["React", "Node.js", "MongoDB", "Express"], size: "md:col-span-2" },
  { category: "Embedded", items: ["STM32", "C/C++", "UART", "I2C"], size: "md:col-span-1" },
  { category: "Tools", items: ["Git", "Postman", "Vite", "Tailwind"], size: "md:col-span-1" },
  { category: "Overview", content: "Passionate about bridging the gap between high-level web applications and low-level embedded systems.", size: "md:col-span-2" }
];

function App() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white selection:bg-purple-500 font-sans scroll-smooth overflow-x-hidden cursor-none">
      
      {/* CUSTOM CURSOR */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 border border-purple-500 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{ x: cursorXSpring, y: cursorYSpring, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
      />

      {/* GLOSSY NAVIGATION BAR */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-auto px-6 py-3 flex justify-between items-center gap-12 z-50 backdrop-blur-xl bg-white/[0.05] border border-white/10 rounded-2xl shadow-2xl">
        <div className="text-white font-black text-xl tracking-tighter cursor-pointer hover:text-purple-400 transition-colors" onClick={(e) => scrollToSection(e, 'hero')}>
          ARJUN.
        </div>
        <div className="flex gap-6 text-gray-300 text-[10px] uppercase tracking-widest font-bold">
          <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-white px-3 py-1 rounded-lg hover:bg-white/10 transition-all">Works</a>
          <a href="#tech" onClick={(e) => scrollToSection(e, 'tech')} className="hover:text-white px-3 py-1 rounded-lg hover:bg-white/10 transition-all">Tech</a>
          <a href="https://github.com/yourusername" target="_blank" className="hover:text-white px-3 py-1 rounded-lg hover:bg-white/10 transition-all">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-white px-3 py-1 rounded-lg hover:bg-white/10 transition-all">LinkedIn</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <Orb hue={260} hoverIntensity={0.5} rotateOnHover={true} />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center pointer-events-none">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[clamp(3.5rem,14vw,11rem)] font-black tracking-tighter leading-none"
          >
            ARJUN
          </motion.h1>
          <p className="text-gray-400 tracking-[0.7em] uppercase text-[clamp(0.5rem,1vw,0.8rem)] mt-2">Creative Developer</p>
        </div>
      </section>

      {/* TECHNICAL OVERVIEW */}
      <section id="tech" className="relative z-20 px-6 py-32 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 tracking-tighter italic text-gray-200">/ Technical Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <div key={i} className={`${skill.size} p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl flex flex-col justify-between hover:border-purple-500/30 transition-all`}>
              <h3 className="text-purple-400 text-[10px] uppercase tracking-[0.2em] mb-6 font-bold">{skill.category}</h3>
              {skill.items ? (
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {skill.items.map(item => <span key={item} className="text-2xl font-bold italic text-white/90">{item}</span>)}
                </div>
              ) : <p className="text-gray-400 leading-relaxed text-lg">{skill.content}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED WORKS WITH GITHUB BUTTONS */}
      <section id="projects" className="relative z-20 px-6 py-32 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 tracking-tighter italic text-gray-200">/ Selected Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.div 
              key={p.id} 
              whileHover={{ y: -10 }}
              className="group p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-purple-500/40 transition-all min-h-[380px] flex flex-col justify-between backdrop-blur-md"
            >
              <div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-purple-400 transition-colors">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {p.tech.map(t => <span key={t} className="text-[9px] font-mono text-purple-400/80 px-2 py-0.5 rounded bg-purple-500/5 border border-purple-500/10">#{t}</span>)}
                </div>
              </div>
              
              {/* GitHub Link Button */}
              <a 
                href={p.github} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all font-bold text-xs uppercase tracking-widest"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                View Repository
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="relative z-20 px-6 py-40 border-t border-white/5 text-center bg-black">
        <a href="mailto:arjun@email.com" className="text-4xl md:text-7xl font-black hover:text-purple-400 transition-all tracking-tighter">GET IN TOUCH ↗</a>
        <div className="mt-12 flex justify-center gap-6">
           <a href="https://github.com" target="_blank" className="px-6 py-2 rounded-full border border-white/10 hover:border-white transition-all text-xs uppercase tracking-widest text-gray-400 hover:text-white">GitHub</a>
           <a href="https://linkedin.com" target="_blank" className="px-6 py-2 rounded-full border border-white/10 hover:border-white transition-all text-xs uppercase tracking-widest text-gray-400 hover:text-white">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;