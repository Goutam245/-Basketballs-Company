
import { Outlet, Link, useLocation } from 'react-router-dom';
import { ShoppingBasket as Basketball, Facebook, Twitter, Instagram } from 'lucide-react';

function Layout() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600';
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Basketball className="h-8 w-8 text-orange-600" />
              <span className="text-2xl font-bold text-gray-900">HoopCraft</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className={isActive('/')}>Home</Link>
              <Link to="/about" className={isActive('/about')}>About Us</Link>
              <Link to="/products" className={isActive('/products')}>Products</Link>
              <Link to="/contact" className={isActive('/contact')}>Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Basketball className="h-8 w-8 text-orange-600" />
                <span className="text-2xl font-bold">HoopCraft</span>
              </div>
              <p className="text-gray-400">
                Crafting premium basketballs for champions worldwide since 1985.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-orange-600">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-orange-600">About Us</Link></li>
                <li><Link to="/products" className="text-gray-400 hover:text-orange-600">Products</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-orange-600">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>1234 Basketball Ave</li>
                <li>Los Angeles, CA 90001</li>
                <li>1-800-HOOPCRAFT</li>
                <li>support@hoopcraft.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-orange-600 cursor-pointer" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-orange-600 cursor-pointer" />
                <Instagram className="h-6 w-6 text-gray-400 hover:text-orange-600 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            © 2024 HoopCraft. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;