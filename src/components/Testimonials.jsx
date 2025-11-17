import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'Crescemos 3x em 6 meses com a estratégia integrada de performance e conteúdo.',
    author: 'Mariana Rocha',
    role: 'CMO, NexaPay'
  },
  {
    quote: 'O novo site elevou a conversão e a marca. Equipe extremamente competente.',
    author: 'Bruno Silva',
    role: 'Founder, CasaLuz'
  },
  {
    quote: 'Dashboard financeiro e BPO impecáveis. Ganhamos previsibilidade.',
    author: 'Ana Pereira',
    role: 'CEO, AgroTech'
  }
]

export default function Testimonials() {
  return (
    <section id="cases" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white text-center"
        >
          Resultados que falam por si
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.author}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/40 dark:border-white/10 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl p-6 shadow-xl"
            >
              <p className="text-zinc-800 dark:text-zinc-100">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">{t.author} • {t.role}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
