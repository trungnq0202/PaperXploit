export const Navigation = () => {
    return (
        <nav className="py-3 bg-brand-red text-white text-center shadow-2xl sticky top-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/logo.svg" className="h-8" alt="PaperXploit Logo" />
                    <span className="self-center text-2xl whitespace-nowrap 
                        dark:text-white">PaperXploit</span>
                </a>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-wrap items-center justify-between space-x-10">
                        <li>
                            <a href="#" className="hover:text-brand-blue">Home</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-brand-blue">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-brand-blue">Pricing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-brand-blue">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}