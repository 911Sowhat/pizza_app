import { ShoppingCart, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="nav-header text-white">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="flex items-center justify-between py-2 text-sm border-b border-white/20">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>(818) 335-8825</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="bg-white/20 px-2 py-1 rounded text-xs font-semibold">
              NOW EARN FREE DOMINOS EVERY 2 ORDERS
            </span>
            <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20 text-sm">
              SIGN IN & EARN REWARDS
            </Button>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-1"></div>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
              </div>
              <div className="text-2xl font-black">Onix Chat</div>
            </div>

            {/* Navigation links */}
            <div className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20 font-semibold" asChild>
                <a href="#order">ORDER ONLINE</a>
              </Button>
              <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20 font-semibold" asChild>
                <a href="#locations">LOCATIONS</a>
              </Button>
              <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20 font-semibold" asChild>
                <a href="#menu">MENU</a>
              </Button>
              <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20 font-semibold" asChild>
                <a href="#coupons">COUPONS</a>
              </Button>
              <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20 font-semibold" asChild>
                <a href="#tracker">TRACKER</a>
              </Button>
              <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20 font-semibold" asChild>
                <a href="#rewards">REWARDS</a>
              </Button>
            </div>
          </div>

          {/* Cart */}
          <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20 relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
            <span className="ml-2 font-semibold">CART</span>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;