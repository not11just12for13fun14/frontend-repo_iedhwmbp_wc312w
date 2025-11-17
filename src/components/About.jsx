import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="sobre" className="py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white"
        >
          Sobre nós
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1 }}
          className="mt-5 text-lg text-zinc-700/90 dark:text-zinc-300"
        >
          Somos um estúdio multidisciplinar que une estratégia, design e tecnologia para construir experiências memoráveis e resultados mensuráveis. Trabalhamos próximo dos clientes, com squads ágeis e foco em performance.
        </motion.p>
      </div>
    </section>
  )
}
