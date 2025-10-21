import React from "react";

const ImplantAnimationSection = () => {
  return (
    <section
      id="implant-animation"
      className="relative bg-gradient-to-tr from-primary/20 via-secondary/30 to-primary/10 py-20 px-6 sm:px-12 rounded-3xl max-w-7xl mx-auto my-20"
    >
      <h2 className="text-4xl font-extrabold text-primary mb-12 text-center">
        Advanced Implant Animation
      </h2>

      <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.youtube-nocookie.com/embed/2GPbQGVujZM"
          title="Implant Animation"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        ></iframe>
      </div>

      <p className="mt-12 text-center text-muted-foreground max-w-3xl mx-auto text-lg">
        Watch how modern prosthodontic implants provide long-lasting solutions
        for missing teeth with precision and comfort.
      </p>
    </section>
  );
};

export default ImplantAnimationSection;
