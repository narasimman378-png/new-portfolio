export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 text-white mix-blend-difference">
      <nav className="flex items-center justify-between px-6 py-5 md:px-12">
        <a href="#top" className="font-display text-lg font-extrabold">N.</a>
       <ul className="hidden flex-wrap justify-end gap-x-2 gap-y-1 text-[10px] sm:gap-x-4 sm:text-xs md:flex md:gap-x-8 md:text-sm">
          {['Work', 'About', 'Skills', 'Experience', 'Education', 'Contact'].map((label) => (
            <li key={label}><a href={`#${label.toLowerCase()}`} className="hover:underline">{label}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
