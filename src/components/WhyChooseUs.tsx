import { Check, Puzzle, Settings, School } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Check,
      title: "Premium Materials",
      description: "Rubber-based for durability and performance",
      accent: "✅"
    },
    {
      icon: Puzzle,
      title: "Variety of Designs",
      description: "Solid top, interlocking, tile type, EVA puzzle styles",
      accent: "🧩"
    },
    {
      icon: Settings,
      title: "Custom Sizes Available",
      description: "Ideal for a range of applications",
      accent: "🛠️"
    },
    {
      icon: School,
      title: "Trusted by Institutions",
      description: "From play schools to professional gyms",
      accent: "🏫"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Choose Us?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the difference with our premium gym flooring solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-lg bg-card/80 backdrop-blur-sm border border-border/50 hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 flex justify-center">
                <feature.icon className="h-12 w-12 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;