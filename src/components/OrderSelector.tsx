import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const OrderSelector = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-black text-secondary mb-8">START YOUR ORDER</h1>
        
        <div className="flex justify-center items-center space-x-4 mb-8">
          <Button 
            size="lg"
            className="order-button-primary text-white font-bold px-8 py-4 text-lg rounded-lg border-0"
          >
            DELIVERY
          </Button>
          
          <span className="text-2xl font-semibold text-gray-500">or</span>
          
          <Button 
            size="lg"
            variant="outline"
            className="bg-white hover:bg-gray-50 text-primary border-2 border-primary font-bold px-8 py-4 text-lg rounded-lg"
          >
            CARRYOUT
          </Button>
        </div>

        <div className="flex items-center justify-center text-gray-600">
          <MapPin className="w-5 h-5 mr-2" />
          <span>Enter your address or zip code to find nearby stores</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSelector;