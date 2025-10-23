import { useState, useRef, useEffect } from "react"; // CORRECT: All necessary hooks are imported here
import { ChevronRight, X } from "lucide-react";
import SUCCESS_STORIES_DATA from "@/data/successStoriesData"; 

// --- START: ANIMATED HEADER COMPONENT ---
// Helper component to apply the slide-in animation to header elements
const AnimatedHeader = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform`}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      }}
    >
      {children}
    </div>
  );
};
// --- END: ANIMATED HEADER COMPONENT ---


// --- START: ANIMATED CARD COMPONENT ---
const AnimatedCard = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      // Tailwind classes for animation
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
// --- END: ANIMATED CARD COMPONENT ---


const CASE_STUDIES_DATA = [
  // ... (Your published case data remains here)
  {
    id: 1,
    title: "Complex Maxillofacial Prosthesis (Hollow Obturator)",
    subtitle: "Case: Post-Surgical Defect from Ameloblastoma (Patient: 52F)",
    description: "Maxillary defect rehabilitation using a specialized hollow open bulb obturator to restore speech, chewing, and retention.",
    longDescription:
      "This case presented the prosthetic rehabilitation of a patient who underwent hemi-maxillectomy following treatment for an ameloblastoma. Maxillary defects drastically impact quality of life, causing issues with speech, mastication, swallowing, and facial appearance. The treatment provided a well-fitting prosthesis—a definitive cast partial obturator—designed as an **open hollow bulb** to reduce weight for better retention and stability.",
    outcome:
      "Successful prosthetic solution resulting in improved speech, masticatory function, and social well-being, confirming the obturator's effectiveness in managing the defect.",
    imageUrl: "/maxillofacial-obturator.png", // Placeholder image
  },
  {
    id: 2,
    title: "Advanced Graftless Implantology (Pterygoid Implant)",
    subtitle: "Case: Severe Atrophy of Posterior Maxilla (Patient: 53F)",
    description: "Fixed prosthetic rehabilitation in a severely atrophied posterior maxilla using a **pterygoid implant** to avoid major bone grafting procedures.",
    longDescription:
      "This case addressed the challenge of replacing missing teeth in a severely atrophied maxilla, where poor bone quantity and the maxillary sinus limit conventional implant placement. The solution involved placing a specialized **pterygoid implant** in the pterygomaxillary region, a technique indicated for severe bone loss (SA4 classification). Pterygoid implants provide strong cortical anchoring without extensive augmentation surgeries.",
    outcome:
      "Successful fixed prosthesis restoration with biomechanical stability, confirming pterygoid implants as an effective alternative for atrophic posterior maxilla management.",
    imageUrl: "/pterygoid-implant.png", // Placeholder image
  },
  {
    id: 3,
    title: "Mandibular Rehabilitation (Guide Flange Prosthesis)",
    subtitle: "Case: Mandibular Resection Defect (Patient: 42M)",
    description: "Rehabilitation of a patient with severe mandibular deviation due to partial mandibulectomy for squamous cell carcinoma, using a guide flange prosthesis.",
    longDescription:
      "The patient had significant mandibular deviation toward the resected side and impaired mastication following surgery for oral cancer. The treatment involved fabricating a **Mandibular Guide Flange Prosthesis (GFP)**, which acts as a training appliance. The prosthesis guides the remaining mandibular segment back to a definite closing point in occlusion, serving as a critical early intervention during the healing period before final implant solutions.",
    outcome:
      "Substantial improvements in mandibular movement and masticatory efficiency, with the guide flange effectively minimizing jaw deviation and restoring occlusal alignment.",
    imageUrl: "/mandibular-guide-flange.png", // Placeholder image
  },
];

const CaseDetailModal = ({ isVisible, onClose, caseData }) => {
  if (!isVisible || !caseData) return null;
  // ... (Modal implementation remains unchanged)
  return (
    <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4">
      <div className="bg-card max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors p-2 rounded-full bg-muted/50 z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <img
          src={caseData.imageUrl}
          alt={caseData.title}
          className="w-full h-72 object-cover rounded-t-xl"
        />

        <div className="p-8">
          <h2 className="text-3xl font-bold text-primary mb-2">
            {caseData.title}
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            {caseData.subtitle}
          </p>

          <h3 className="text-2xl font-semibold mb-3 text-foreground">
            Detailed Process & Findings:
          </h3>
          <p className="text-lg text-foreground leading-relaxed mb-6">
            {caseData.longDescription}
          </p>

          <h3 className="text-2xl font-semibold mb-3 text-foreground">
            Outcome:
          </h3>
          <p className="text-lg text-green-600 font-medium">
            {caseData.outcome}
          </p>
        </div>
      </div>
    </div>
  );
};

const CaseStudy = ({ caseData, onDetailsClick }) => (
  <div className="group bg-card rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-border">
    <div className="relative overflow-hidden h-56">
      <img
        src={caseData.imageUrl}
        alt={caseData.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
        {caseData.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 font-medium">
        {caseData.subtitle}
      </p>
      <p className="text-muted-foreground leading-relaxed mb-6">
        {caseData.description}
      </p>

      <button
        onClick={() => onDetailsClick(caseData)}
        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
      >
        Read Full Story
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  </div>
);

const SuccessStories = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCase, setCurrentCase] = useState(null);

  const handleDetailsClick = (caseData) => {
    setCurrentCase(caseData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentCase(null);
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedHeader>
              <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-4">
                Patient Transformations
              </h1>
            </AnimatedHeader>
            <AnimatedHeader delay={200}>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                In-depth stories showcasing the life-changing functional and aesthetic outcomes achieved by our specialist.
              </p>
            </AnimatedHeader>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CASE_STUDIES_DATA.map((caseData, index) => (
              <AnimatedCard key={caseData.id} delay={index * 150}> 
                <CaseStudy
                  caseData={caseData}
                  onDetailsClick={handleDetailsClick}
                />
              </AnimatedCard>
            ))}
          </div>
        </div>

        <CaseDetailModal
          isVisible={isModalOpen}
          onClose={closeModal}
          caseData={currentCase}
        />
      </section>
    </div>
  );
};

export default SuccessStories;