import Header from "@/components/Header";
import OrderSelector from "@/components/OrderSelector";
import DealCard from "@/components/DealCard";
import MenuBrowse from "@/components/MenuBrowse";
import pepperoniPizza from "@/assets/pepperoni-pizza.jpg";
import supremePizza from "@/assets/supreme-pizza.jpg";
import chickenWings from "@/assets/chicken-wings.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <OrderSelector />
      
      {/* Deal Cards Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Mix & Match Deal */}
            <div className="lg:col-span-2">
              <DealCard
                badge="MIX & MATCH DEAL"
                title="CHOOSE ANY 2 OR MORE"
                description="Upgrade To Parmesan Stuffed Crust For $4 More Per Pizza"
                price="$6.99"
                imageSrc={pepperoniPizza}
                imageAlt="Mix and Match Pizza Deal"
                ctaText="ORDER NOW MIX & MATCH DEAL"
                disclaimer="2-Item Minimum. Bone-in Wings, Bread Bowl Pasta, Handmade Pan and Parmesan Stuffed Crust pizzas will cost extra. Prices, delivery area, and charges may vary by store."
                variant="primary"
                className="h-full"
              />
            </div>

            <div className="space-y-6">
              {/* Any Pizza Deal */}
              <DealCard
                badge="OUR BEST DEAL EVER IS BACK FOR A LIMITED TIME"
                title="ANY PIZZA ANY TOPPINGS"
                description="Prices higher for some locations"
                price="$9.99"
                imageSrc={supremePizza}
                imageAlt="Any Pizza Any Toppings Deal"
                ctaText="ORDER NOW"
                variant="accent"
              />

              {/* Carryout Deal */}
              <DealCard
                badge="CARRYOUT DEAL"
                title="ALL PIZZAS 1 TOPPING"
                description="OR 8-PIECE WINGS"
                price="$7.99"
                imageSrc={chickenWings}
                imageAlt="Carryout Deal"
                ctaText="ORDER NOW"
                variant="secondary"
              />
            </div>

          </div>

          {/* Perfect Combo Deal - Full Width */}
          <div className="mt-8">
            <DealCard
              badge="PERFECT COMBO DEAL"
              title="2 MEDIUM 1-TOPPING PIZZAS + 16-PIECE PARMESAN BREAD BITES + 8-PIECE CINNAMON TWISTS + 2-LITER COKE"
              description="Perfect for sharing with family and friends"
              price="$19.99"
              imageSrc={pepperoniPizza}
              imageAlt="Perfect Combo Deal"
              ctaText="ORDER NOW"
              disclaimer="Prices higher for some locations. 2-Item Minimum. Bone-in Wings, Bread Bowl Pasta, Handmade Pan and Parmesan Stuffed Crust pizzas will cost extra."
              variant="primary"
            />
          </div>
        </div>
      </section>

      <MenuBrowse />

      {/* Footer */}
      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">© 2024 Domino's Pizza LLC. All rights reserved.</p>
          <p className="text-sm opacity-90">Prices, delivery area, and charges may vary by store.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
