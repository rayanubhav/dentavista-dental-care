import React from "react";

const caseStudies = [
  {
    id: 1,
    title: "Full Mouth Rehabilitation",
    description:
      "Complete dental restoration using crowns, bridges, and implants for a new smile.",
    imageUrl: "/assets/case-study-1.jpg",
  },
  {
    id: 2,
    title: "Single Tooth Implant",
    description:
      "Permanent replacement of a missing tooth with a natural look and feel.",
    imageUrl: "/assets/case-study-2.jpg",
  },
  {
    id: 3,
    title: "Cosmetic Smile Makeover",
    description:
      "Teeth whitening, veneers, and contouring for enhanced esthetic appearance.",
    imageUrl: "/assets/case-study-3.jpg",
  },
];

const CaseStudy = ({ title, description, imageUrl }) => (
  <article className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
    <img
      className="w-full h-48 object-cover"
      src={imageUrl}
      alt={title}
      loading="lazy"
    />
    <div className="p-6">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  </article>
);

const SuccessStories = () => (
  <section
    id="success-stories"
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[500px]"
  >
    <h2 className="text-4xl font-extrabold mb-8 text-center text-foreground">
      Success Stories
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {caseStudies.map(({ id, title, description, imageUrl }) => (
        <CaseStudy
          key={id}
          title={title}
          description={description}
          imageUrl={imageUrl}
        />
      ))}
    </div>
  </section>
);

export default SuccessStories;
