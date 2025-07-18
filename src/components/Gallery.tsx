import solidTopMat from "@/assets/solid-top-mat.jpg";
import interlockingMat from "@/assets/interlocking-mat.jpg";
import rubberTileMat from "@/assets/rubber-tile-mat.jpg";
import evaPuzzleNormal from "@/assets/eva-puzzle-normal.jpg";
import evaPuzzleHigh from "@/assets/eva-puzzle-high.jpg";
import galaxyTile from "@/assets/galaxy-tile.jpg";
import amoebaTop from "@/assets/amoeba-top.jpg";
import epdmRoll from "@/assets/epdm-roll.jpg";
import lightweightMat from "@/assets/lightweight-mat.jpg";
import ldpSole from "@/assets/ldp-sole.jpg";
import evaColorTile from "@/assets/eva-color-tile.jpg";
import variationsCollection from "@/assets/variations-collection.jpg";

const Gallery = () => {
  const products = [
    { image: solidTopMat, title: "Solid Top Gym Mat", description: "3ft x 3ft, 16mm thickness, premium durability" },
    { image: interlockingMat, title: "4-Side Interlocking Mat", description: "Easy installation, customizable coverage" },
    { image: rubberTileMat, title: "Rubber Tile Type Mat", description: "Excellent grip and shock absorption" },
    { image: evaPuzzleNormal, title: "EVA Puzzle Normal Density", description: "Comfortable foam for floor exercises" },
    { image: evaPuzzleHigh, title: "EVA Puzzle High Density", description: "Enhanced durability and support" },
    { image: galaxyTile, title: "Galaxy Tile", description: "Unique pattern design, premium look" },
    { image: amoebaTop, title: "Amoeba Top", description: "Organic flowing pattern design" },
    { image: epdmRoll, title: "EPDM Roll", description: "Professional grade outdoor surface" },
    { image: lightweightMat, title: "Lightweight Mat", description: "Portable design for home and travel" },
    { image: ldpSole, title: "LDP Sole", description: "Specialized sole pattern for enhanced grip" },
    { image: evaColorTile, title: "EVA Colour Tile", description: "Vibrant colors for children's play areas" },
    { image: variationsCollection, title: "Premium Variations", description: "Professional collection for commercial use" }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our complete range of premium gym and sports flooring solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-card border border-border/50 hover:shadow-glow transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 to-transparent p-4">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;