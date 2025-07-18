import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import solidTopMat from "@/assets/solid-top-mat.jpg";
import interlockingMat from "@/assets/interlocking-mat.jpg";
import rubberTileMat from "@/assets/rubber-tile-mat.jpg";
import evaPuzzleNormal from "@/assets/eva-puzzle-normal.jpg";
import evaPuzzleHigh from "@/assets/eva-puzzle-high.jpg";
import variationsCollection from "@/assets/variations-collection.jpg";

const ProductsSection = () => {
  const products = [
    {
      type: "Solid Top Gym Mat",
      size: "3ft x 3ft",
      thickness: "16mm",
      weight: "8–8.5 kg",
      description: "Premium solid surface gym mats perfect for heavy equipment and high-intensity workouts.",
      image: solidTopMat
    },
    {
      type: "4-Side Interlocking Mat",
      size: "50cm x 50cm – 1m x 1m",
      thickness: "8mm–16mm",
      weight: "2.5–15 kg",
      description: "Versatile interlocking system for easy installation and customizable coverage areas.",
      image: interlockingMat
    },
    {
      type: "Rubber Tile Type Mat",
      size: "50cm x 50cm – 60cm x 60cm",
      thickness: "10–14mm",
      weight: "2.5–4.2 kg",
      description: "Durable rubber tiles with excellent grip and shock absorption properties.",
      image: rubberTileMat
    },
    {
      type: "EVA Puzzle (Normal Density)",
      size: "1m x 1m",
      thickness: "20–32mm",
      weight: "Lightweight",
      description: "Comfortable foam mats ideal for floor exercises and play areas.",
      image: evaPuzzleNormal
    },
    {
      type: "EVA Puzzle (High Density)",
      size: "1m x 1m",
      thickness: "25–37mm",
      weight: "Medium weight",
      description: "High-density foam for enhanced durability and support during intensive training.",
      image: evaPuzzleHigh
    },
    {
      type: "Specialty Variations",
      size: "Various",
      thickness: "Custom",
      weight: "Varies",
      description: "Including Galaxy Tile, Amoeba Top, EPDM Roll, Lightweight, LDP Sole, and EVA Colour Tile options.",
      image: variationsCollection
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Product Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive range of premium gym and sports flooring solutions for every need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={product.image}
                  alt={product.type}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-primary group-hover:text-primary/80 transition-colors">
                  {product.type}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-muted-foreground">Size:</span>
                    <p className="text-foreground">{product.size}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-muted-foreground">Thickness:</span>
                    <p className="text-foreground">{product.thickness}</p>
                  </div>
                  <div className="col-span-2">
                    <span className="font-semibold text-muted-foreground">Weight:</span>
                    <p className="text-foreground">{product.weight}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;