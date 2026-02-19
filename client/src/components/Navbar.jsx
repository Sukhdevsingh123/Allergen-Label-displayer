import { Link } from "react-router-dom";

const Navbar = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">A</span>
                        </div>
                        <Link to="/" className="text-xl font-bold text-gray-900 tracking-tight">
                            Allergen<span className="text-blue-600">Label</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors">
                            Home
                        </Link>
                        <button
                            onClick={scrollToTop}
                            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            Analyze
                        </button>
                        <button
                            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors cursor-not-allowed opacity-50"
                            title="Coming soon"
                        >
                            Guidelines
                        </button>
                    </div>

                    <div className="flex items-center">
                        <button
                            onClick={scrollToTop}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm active:scale-95"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
