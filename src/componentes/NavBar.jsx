const NavBar = ({children}) => {
  return (
    <>
    <nav className="flex sm:justify-center space-x-4">
        {[
                ['Home', '/dashboard'],
                ['Verduras Congeladas', '/team'],
                ['Semillas', '/projects'],
                ['Contacto', '/reports'],
          ].map(([title, url]) => (
                    <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
                                ))                        
        }
        <svg class="h-7 pl-1 hover:bg-slate-100 hover:text-slate-900" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
    </nav>
    {children}
    </>
  )
}

export default NavBar