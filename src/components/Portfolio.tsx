import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'Estrategia Digital',
    category: 'Marketing Digital',
    description: 'Campaña integral que incrementó el ROI en un 250%',
    image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2MDU0OTk0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Rediseño de Marca',
    category: 'Branding',
    description: 'Transformación completa de identidad corporativa',
    image: 'https://images.unsplash.com/photo-1510832758362-af875829efcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjA2MDg3MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Consultoría Estratégica',
    category: 'Consultoría',
    description: 'Plan de crecimiento para startup tecnológica',
    image: 'https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBtZWV0aW5nfGVufDF8fHx8MTc2MDUyODcyMnww&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-indigo-500 to-purple-500',
  },
];

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="portfolio" className="py-32 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-600 dark:text-purple-400 rounded-full mb-6 text-sm">
            Nuestro Trabajo
          </span>
          <h2 className="text-gray-900 dark:text-white mb-6 text-4xl md:text-5xl">
            Casos de{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              éxito recientes
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Proyectos que han transformado negocios y generado resultados excepcionales
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative cursor-pointer"
            >
              <div className="relative h-full overflow-hidden rounded-3xl shadow-xl">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    className="mb-3"
                  >
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">
                      {project.category}
                    </span>
                  </motion.div>
                  
                  <h3 className="text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/90 mb-4">
                    {project.description}
                  </p>

                  <motion.div
                    className="flex items-center gap-2 text-white"
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                  >
                    <span className="text-sm">Ver proyecto</span>
                    <ArrowUpRight size={18} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
