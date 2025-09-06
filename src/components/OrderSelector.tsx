import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const OrderSelector = () => {
  return (
    <div className="relative py-24 overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-onix-primary/10 via-background to-onix-secondary/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--gradient-primary)_0%,_transparent_70%)] opacity-30"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-black gradient-text mb-12 tracking-tight">
          START YOUR ORDER
        </h1>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          <Button 
            size="lg"
            className="modern-button px-12 py-6 text-xl font-bold shadow-2xl"
          >
            DELIVERY
          </Button>
          
          <span className="text-2xl font-semibold text-muted-foreground">or</span>
          
          <Button 
            size="lg"
            variant="outline"
            className="glass-card hover:bg-white/20 text-primary border-2 border-primary/30 font-bold px-12 py-6 text-xl backdrop-blur-xl"
          >
            CARRYOUT
          </Button>
        </div>

        <div className="glass-card max-w-md mx-auto px-6 py-4 flex items-center justify-center text-muted-foreground">
          <MapPin className="w-5 h-5 mr-3 text-primary" />
          <span className="text-lg">Enter your address or zip code to find nearby stores</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSelector;