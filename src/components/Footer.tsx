import { Instagram, Linkedin, Twitter, Facebook, Mail, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import logo from 'figma:asset/c775651f9062a33f1afb86acff7bbb5a2f8abb08.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-700' },
  ];

  const links = [
    { name: 'Sobre Nosotros', id: 'about' },
    { name: 'Servicios', id: 'services' },
    { name: 'Portafolio', id: 'portfolio' },
    { name: 'Contacto', id: 'contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <motion.img 
              src={logo} 
              alt="Aureo" 
              className="h-12 w-auto mb-6"
              whileHover={{ scale: 1.05 }}
            />
            <p className="text-gray-400 max-w-md mb-6 leading-relaxed">
              Agencia de marketing que combina creatividad y estrategia para transformar marcas. Nuevo look, misma esencia.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <Mail size={18} />
              <a href="mailto:hola@aureo.com" className="hover:text-white transition-colors">
                hola@aureo.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-white">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="mb-6 text-white">Síguenos</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-11 h-11 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center ${social.color} transition-all border border-white/10 hover:border-white/20`}
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
            
            <div className="mt-8 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <p className="text-sm text-gray-400">
                Newsletter
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Próximamente...
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Aureo. Todos los derechos reservados.
            </p>
            
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Hecho con</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart size={16} className="text-red-500 fill-red-500" />
              </motion.div>
              <span>en Bogotá</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
