import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DealCardProps {
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  imageSrc: string;
  imageAlt: string;
  disclaimer?: string;
  ctaText?: string;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
}

const DealCard = ({
  title,
  description,
  price,
  originalPrice,
  badge,
  imageSrc,
  imageAlt,
  disclaimer,
  ctaText = "ORDER NOW",
  variant = "primary",
  className
}: DealCardProps) => {
  const cardVariants = {
    primary: "bg-gradient-to-br from-amber-50 to-orange-50 border-orange-200",
    secondary: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
    accent: "bg-gradient-to-br from-red-50 to-red-100 border-red-200"
  };

  const buttonVariants = {
    primary: "order-button-primary",
    secondary: "order-button-secondary", 
    accent: "order-button-primary"
  };

  return (
    <div className={cn("deal-card border-2", cardVariants[variant], className)}>
      {/* Badge */}
      {badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className="deal-badge">{badge}</span>
        </div>
      )}

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-black text-gray-900 mb-2 leading-tight">
          {title}
        </h3>
        
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Pricing */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="price-tag text-dominos-red">
            {price}
          </div>
          {originalPrice && (
            <div className="text-xl text-gray-500 line-through">
              {originalPrice}
            </div>
          )}
          <div className="text-lg font-semibold text-gray-700">each</div>
        </div>

        {/* CTA Button */}
        <Button 
          className={cn(
            "w-full text-lg font-bold py-3 text-white border-0 rounded-lg",
            buttonVariants[variant]
          )}
        >
          {ctaText}
        </Button>

        {/* Disclaimer */}
        {disclaimer && (
          <p className="text-xs text-gray-500 mt-3 leading-relaxed">
            {disclaimer}
          </p>
        )}
      </div>
    </div>
  );
};

export default DealCard;