import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contato" className="py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-3xl border border-white/40 dark:border-white/10 bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 p-[2px] shadow-2xl"
        >
          <div className="rounded-3xl bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl px-8 py-12">
            <h3 className="text-2xl md:text-4xl font-extrabold text-zinc-900 dark:text-white">Pronto para elevar sua marca?</h3>
            <p className="mt-3 text-zinc-700/90 dark:text-zinc-300">Conte-nos sobre o seu projeto e retornamos em até 24h.</p>
            <form className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
              <input type="text" placeholder="Seu nome" className="rounded-xl border border-zinc-200/80 dark:border-white/15 bg-white/70 dark:bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500" />
              <input type="email" placeholder="Email" className="rounded-xl border border-zinc-200/80 dark:border-white/15 bg-white/70 dark:bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500" />
              <input type="text" placeholder="Qual serviço você precisa?" className="rounded-xl border border-zinc-200/80 dark:border-white/15 bg-white/70 dark:bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500 md:col-span-3" />
              <button type="button" className="md:col-span-3 inline-flex justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 hover:opacity-95 transition">
                Enviar mensagem
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
