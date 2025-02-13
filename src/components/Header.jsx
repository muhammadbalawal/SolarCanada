import SolaireLogo from "../assets/SolaireLogo.png";

export default function Header() {
    return (
        <header className="w-full bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-20 py-4 sm:py-0">
                    {/* Logo and company name */}
                    <div className="flex items-center space-x-3 sm:space-x-4">
                        <img 
                            src={SolaireLogo} 
                            alt="Solaire Canada Solar Logo" 
                            className="h-12 sm:h-10 w-auto"
                        />
                        <div className="text-center sm:text-left">
                            <div className="text-lg sm:text-2xl font-semibold text-gray-800">
                                Solaire Canada Solar
                            </div>
                            <div className="text-xs sm:text-sm text-gray-600">
                                & Renewable Energy Power Foundation
                            </div>
                        </div>
                    </div>

                    {/* Navigation - Wraps on small screens */}
                    <nav className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-8 mt-4 sm:mt-0">
                        <a href="#" className="text-gray-700 hover:text-green-700 transition-colors text-sm sm:text-base">
                            Home
                        </a>
                        <a href="#" className="text-gray-700 hover:text-green-700 transition-colors text-sm sm:text-base">
                            About
                        </a>
                        <a href="#" className="text-gray-700 hover:text-green-700 transition-colors text-sm sm:text-base">
                            Contact
                        </a>
                        <a href="#" className="text-gray-700 hover:text-green-700 transition-colors text-sm sm:text-base">
                            Resources
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
