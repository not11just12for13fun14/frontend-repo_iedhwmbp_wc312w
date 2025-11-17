import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24" id="home">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-black tracking-tight text-zinc-900 dark:text-white"
          >
            Agência multifuncional que acelera marcas com criatividade e performance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 text-lg text-zinc-700/90 dark:text-zinc-300"
          >
            Marketing, desenvolvimento web, design, vídeo, contabilidade e muito mais — em um único time de alto nível.
          </motion.p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#contato" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 hover:opacity-95 transition">
              Fale Conosco
            </a>
            <a href="#servicos" className="inline-flex items-center justify-center rounded-xl border border-zinc-200/80 dark:border-white/20 px-6 py-3 text-sm font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-white/60 dark:hover:bg-white/10 transition">
              Conheça os Serviços
            </a>
          </div>
        </div>

        <div className="relative h-[420px] md:h-[560px]">
          <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/40 dark:border-white/10 shadow-[0_20px_120px_-20px_rgba(109,40,217,0.45)]">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
