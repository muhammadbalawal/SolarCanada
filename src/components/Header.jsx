import SolaireLogo from '../assets/SolaireLogo.png'

export default function Header() {
    return (
        <header className="w-full bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo and company name */}
                    <div className="flex items-center">
                        <img 
                            src={SolaireLogo} 
                            alt="Solaire Canada Solar Logo" 
                            className="h-18 w-auto"
                        />
                        <div className="ml-4">
                            <div className="text-[32px] font-semibold text-gray-800">
                                Solaire Canada Solar
                            </div>
                            <div className="text-sm text-gray-600">
                                & Renewable Energy Power Foundation
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex items-center space-x-8">
                        <a href="#" className="text-gray-700 hover:text-green-700 transition-colors">
                            Home
                        </a>
                        <a href="#" className="text-gray-700 hover:text-green-700 transition-colors">
                            About
                        </a>
                        <a href="#" className="text-gray-700 hover:text-green-700 transition-colors">
                            Contact
                        </a>
                        <a href="#" className="text-gray-700 hover:text-green-700 transition-colors">
                            Resources
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    )
}
