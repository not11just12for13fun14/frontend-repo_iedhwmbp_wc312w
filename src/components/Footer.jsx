export default function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400" />
          <span className="text-sm font-semibold">Blue Flame Agency</span>
        </div>
        <p className="text-xs text-zinc-500">© {new Date().getFullYear()} Blue Flame. Todos os direitos reservados.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="hover:text-violet-600">LinkedIn</a>
          <a href="#" className="hover:text-violet-600">Instagram</a>
          <a href="#" className="hover:text-violet-600">YouTube</a>
        </div>
      </div>
    </footer>
  )
}
