import { motion } from 'framer-motion'
import { Megaphone, Code2, Palette, Film, Calculator, Layers } from 'lucide-react'

const services = [
  {
    icon: Megaphone,
    title: 'Marketing & Growth',
    desc: 'Campanhas data-driven, mídia paga, SEO e conteúdo que geram tração real.',
    color: 'from-fuchsia-500 to-pink-500'
  },
  {
    icon: Code2,
    title: 'Dev Web & Apps',
    desc: 'Sites e aplicações performáticas, escaláveis e orientadas a conversão.',
    color: 'from-violet-500 to-indigo-500'
  },
  {
    icon: Palette,
    title: 'Design & Branding',
    desc: 'Identidades visuais, UI, materiais e apresentações premium.',
    color: 'from-rose-500 to-orange-500'
  },
  {
    icon: Film,
    title: 'Vídeo & Motion',
    desc: 'Produção audiovisual, reels e animações para impactar seu público.',
    color: 'from-cyan-500 to-teal-500'
  },
  {
    icon: Calculator,
    title: 'Contabilidade Inteligente',
    desc: 'BPO financeiro, fiscal e controladoria com dashboards em tempo real.',
    color: 'from-emerald-500 to-green-500'
  },
  {
    icon: Layers,
    title: 'E muito mais...',
    desc: 'Consultoria, product ops, CRM, automações e squads sob demanda.',
    color: 'from-sky-500 to-blue-500'
  }
]

export default function Services() {
  return (
    <section id="servicos" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-10 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white text-center"
        >
          Soluções completas, um único parceiro
        </motion.h2>
        <p className="mt-4 text-center text-zinc-700/90 dark:text-zinc-300 max-w-2xl mx-auto">
          Integramos estratégia, criatividade e tecnologia para acelerar o seu negócio.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/40 dark:border-white/10 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl p-6 shadow-xl"
            >
              <div className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${s.color} opacity-20 blur-3xl transition group-hover:opacity-40`} />
              <div className="relative z-10">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white/80 to-white/50 dark:from-white/10 dark:to-white/5 border border-white/40 dark:border-white/10 shadow">
                  <s.icon className="text-zinc-800 dark:text-white" size={22} />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-zinc-700/90 dark:text-zinc-300">{s.desc}</p>
                <a href="#contato" className="mt-4 inline-flex items-center text-sm font-semibold text-violet-600 hover:text-violet-700">
                  Saiba mais →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
