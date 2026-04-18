import { useState } from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Paintbrush, 
  CheckCircle, 
  MessageSquare, 
  Clock, 
  ShieldCheck, 
  ChevronRight,
  ExternalLink,
  Award,
  Zap,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { Layout } from '../components/Layout';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50 -skew-x-12 transform origin-top translate-x-1/4 -z-10 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Zap className="w-4 h-4 fill-blue-700" />
            <span>EXPERT PRESENTATION DESIGN</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
            Professional <span className="text-blue-600">PowerPoint</span> That Impress & Convert
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
            I design clean, modern, and impactful presentations for students, startups, and professionals. Fast, tailored, and results-driven.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#portfolio" 
              className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-xl shadow-blue-200"
            >
              View Sample <ChevronRight className="w-5 h-5" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border-2 border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-100 transition-all"
            >
              Let's Talk
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-white">
            <img 
              src="/images/hero-character.png" 
              alt="Professional Presentation Design" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl z-20 hidden sm:flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="text-green-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">50+ Projects</p>
              <p className="text-xs text-slate-500">Successfully Delivered</p>
            </div>
          </div>
          <div className="absolute top-10 -right-4 bg-white p-4 rounded-xl shadow-xl z-20 hidden sm:flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <Award className="text-yellow-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Top Rated</p>
              <p className="text-xs text-slate-500">Service Provider</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      title: "Academic Presentations",
      description: "Final year project PPTs, seminar presentations, and research presentations tailored for high academic impact.",
      items: ["Final Year Projects", "Seminar PPTs", "Research Displays"]
    },
    {
      icon: <Briefcase className="w-8 h-8 text-indigo-600" />,
      title: "Business Presentations",
      description: "Compelling pitch decks, sales presentations, and company profiles that help you close deals.",
      items: ["Pitch Decks", "Sales Presentations", "Company Profiles"]
    },
    {
      icon: <Paintbrush className="w-8 h-8 text-purple-600" />,
      title: "Custom Design",
      description: "Redesigning existing PPTs, improving visuals & structure, and adding smooth animations.",
      items: ["PPT Redesign", "Visual Enhancement", "Animations & Transitions"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">What I Offer</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            Specializing in academic and business PowerPoint slides, I deliver visually appealing and well-structured presentations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all hover:shadow-xl"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: "AI Automation",
      subtitle: "The Small Business Superpower",
      category: "Business",
      image: "https://lh3.googleusercontent.com/sitesv/AA5AbUBQifWw9FGEmLbYh9_IMedxTpTqB59g8M0Mcu2zeSdl3PaXU9GgChyGQNSKeAZ4iSwTPwJE7qxIsKqRjOuCNGCJsGiIQz0DTU2WORJvnSzkpZgF1jGqU1a_wm-uG0Q0m08gIep2juq7nbbMF75I4n9cliOtg6mKwecxKY-WGqCjsY8sApzr3msniDStAOTvrVKZSws4Ws16Kyu-bGCH8oAG1K2qQ5Hsu_49=w1280",
      embedUrl: "https://docs.google.com/presentation/d/1mvsV53zVMr53D3ozNVeY-kyocFjLOXwgqa7adFtfEps/embed?start=false&loop=false&delayms=3000"
    },
    {
      title: "Digital Marketing Blueprint",
      subtitle: "Launching to Loyalty 2026",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1280",
      embedUrl: "https://docs.google.com/presentation/d/1uzLrFpsAsf3MwTjhibxPoalMcSqPQaW0J_5BGhxMreo/embed?start=false&loop=false&delayms=3000"
    },
    {
      title: "Business Strategy",
      subtitle: "Foundation and Growth",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1280",
      embedUrl: "https://docs.google.com/presentation/d/11AL8PQTpSKa664bmpwMzocIWJ2Cp19Ssei5g6Xiq-tk/embed?start=false&loop=false&delayms=3000"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4">Selected Work</h2>
            <div className="w-20 h-1.5 bg-blue-500 rounded-full" />
          </div>
          <p className="text-slate-400 max-w-md">
            Interactive preview of my recent presentation designs. Click on any card to view the full slides.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border border-slate-800 hover:border-blue-500 transition-all"
            >
              <div className="aspect-[16/10]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 transition-opacity">
                <span className="text-blue-400 text-sm font-bold mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{project.subtitle}</p>
                <div className="flex items-center gap-2 text-white font-bold text-sm transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  Open Presentation <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10 bg-black/95"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <iframe 
                src={selectedProject.embedUrl} 
                className="w-full h-full border-0"
                allowFullScreen={true}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "7",
      features: ["Up to 10 slides", "2 Revisions", "Delivery in 3 days", "Visual Structure"],
      recommended: false
    },
    {
      name: "Standard",
      price: "15",
      features: ["Up to 20 slides", "3 Revisions", "Delivery in 3 days", "Visual Structure", "Animations"],
      recommended: true
    },
    {
      name: "Premium",
      price: "25",
      features: ["Up to 30 slides", "5 Revisions", "Delivery in 2 days", "Visual Structure", "Animations", "Source Files"],
      recommended: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Transparent Pricing</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
          <p className="mt-6 text-slate-600">Choose the perfect plan for your project needs.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              className={cn(
                "p-8 rounded-3xl border bg-white transition-all duration-300",
                plan.recommended ? "border-blue-600 shadow-2xl scale-105 z-10" : "border-slate-200 shadow-lg hover:border-blue-300"
              )}
            >
              {plan.recommended && (
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-slate-900">${plan.price}</span>
                <span className="text-slate-500">/project</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a 
                href="#contact"
                className={cn(
                  "w-full block text-center py-4 rounded-xl font-bold transition-all",
                  plan.recommended ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200" : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                )}
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    { title: "Delivered 50+", desc: "A proven track record of successful presentations." },
    { title: "Clean Designs", desc: "Modern and professional visual aesthetics." },
    { title: "Fast Delivery", desc: "Turnaround within 4 hours for urgent needs." },
    { title: "Affordable", desc: "High-quality design at a student-friendly price." },
    { title: "Custom Made", desc: "Every slide is crafted specifically for your content." },
    { title: "Easy Communication", desc: "Direct access and quick response times." }
  ];

  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Why Choose My <span className="text-blue-600">Design Service?</span>
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              I focus on delivering visually appealing and well-structured presentations that clearly communicate your ideas.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <CheckCircle className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{reason.title}</h4>
                    <p className="text-sm text-slate-500">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="h-48 bg-[#1E6BFF] rounded-[2.5rem] p-8 flex flex-col justify-center text-white shadow-lg"
            >
              <p className="text-5xl font-bold mb-1">50+</p>
              <p className="text-blue-50 text-lg">Projects Done</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="h-48 bg-[#0D0E12] rounded-[2.5rem] overflow-hidden shadow-lg relative group"
            >
              <img 
                src="/images/presentation-group.jpg" 
                alt="Presentation Group" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
              />
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="col-span-1 h-64 bg-[#F1F3F9] rounded-[2.5rem] overflow-hidden shadow-sm relative group p-6"
            >
              <p className="text-slate-800 font-bold mb-4 relative z-10">Professional PPT Design</p>
              <img 
                src="/images/meeting-gesture.jpg" 
                alt="Meeting Gesture" 
                className="absolute inset-x-0 bottom-0 w-full h-[70%] object-cover group-hover:scale-105 transition-transform" 
              />
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="h-64 bg-[#E2E8FF] rounded-[2.5rem] p-8 flex flex-col justify-end text-[#1E3A8A] shadow-sm"
            >
              <p className="text-5xl font-bold mb-1">4.9/5</p>
              <p className="text-[#3B4C8C] font-semibold text-lg">Customer Rating</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-blue-600 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Ready to upgrade your presentation?</h2>
        <p className="text-xl text-blue-100 mb-12">
          Contact me now and get a professional PPT designed for your needs. Fast turnaround guaranteed.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a 
            href="https://forms.gle/emKrcKQ9GyEPfs3EA" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-3 shadow-xl"
          >
            <MessageSquare className="w-6 h-6" /> Send a Message
          </a>
          <div className="flex items-center justify-center gap-6 text-white font-medium">
             <div className="flex items-center gap-2">
               <Clock className="w-5 h-5" /> 4h Response
             </div>
             <div className="flex items-center gap-2">
               <ShieldCheck className="w-5 h-5" /> Secure Service
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
      <WhyChooseUs />
      <Contact />
    </Layout>
  );
}
