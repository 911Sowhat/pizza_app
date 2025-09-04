import { Button } from "@/components/ui/button";

const MenuBrowse = () => {
  const menuItems = [
    {
      name: "Pizza",
      image: "/placeholder.svg",
      description: "Hand tossed, thin crust & more"
    },
    {
      name: "Chicken", 
      image: "/placeholder.svg",
      description: "Wings, bites, sandwiches"
    },
    {
      name: "Sandwiches",
      image: "/placeholder.svg", 
      description: "Oven baked & toasted"
    },
    {
      name: "Pasta",
      image: "/placeholder.svg",
      description: "Italian classics & more"
    },
    {
      name: "Sides",
      image: "/placeholder.svg",
      description: "Bread, salads & desserts"
    },
    {
      name: "Drinks",
      image: "/placeholder.svg",
      description: "Coca-Cola products & more"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-700 mb-4">Browse Our Menu</h2>
          <Button 
            variant="outline"
            className="text-secondary border-secondary hover:bg-secondary hover:text-white font-semibold px-8 py-3"
          >
            View Full Menu
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {menuItems.map((item, index) => (
            <div 
              key={index}
              className="text-center group cursor-pointer"
            >
              <div className="w-full aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden group-hover:shadow-lg transition-all duration-300">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-4xl font-black text-gray-400">{item.name[0]}</span>
                </div>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-1">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuBrowse;