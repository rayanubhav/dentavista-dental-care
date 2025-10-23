import { Plug2, Diamond, ShieldAlert, Award, Sparkles, UserCheck } from "lucide-react";

export const MASTER_SERVICES = [
  // PRIMARY SERVICES (4 for the Home Page)
  {
    icon: Plug2,
    title: "Dental Implants & Augmentation",
    description: "Advanced solutions for missing teeth, including Sinus Lifts, Bone Grafting, and immediate implant placement.",
    isPrimary: true,
  },
  {
    icon: Diamond,
    title: "Full Mouth Rehabilitation (FMR)",
    description: "Comprehensive treatment for severely worn-out or damaged dentition (Hobo's Technique for functional harmony).",
    isPrimary: true,
  },
  {
    icon: ShieldAlert,
    title: "Removable Prosthesis",
    description: "Custom Cast Partial Dentures (CPD), Complete Dentures (CD), and Implant Supported Overdentures.",
    isPrimary: true,
  },
  {
    icon: Award,
    title: "Maxillofacial Prosthesis",
    description: "Specialized devices like Obturators for patients requiring rehabilitation after surgical procedures.",
    isPrimary: true,
  },

  // ADDITIONAL SERVICES (For the Services Page)
  {
    icon: Sparkles,
    title: "Aesthetic Smile Designing",
    description: "Comprehensive smile design and restoration using veneers, crowns, and digital planning.",
    isPrimary: false,
    isDetail: true,
  },
  {
    icon: Plug2,
    title: "Crown & Bridge",
    description: "Fixed restorations including E-MAX, Zirconia, and PFM crowns and multi-unit bridges.",
    isPrimary: false,
    isDetail: true,
  },
  {
    icon: UserCheck,
    title: "TMJ Disorder Management",
    description: "Diagnosis and non-surgical management of chronic jaw pain, headaches, and temporomandibular joint issues.",
    isPrimary: false,
    isDetail: true,
  },
  {
    icon: ShieldAlert,
    title: "Complete Denture",
    description: "High-quality, conventional complete dentures for full arch edentulism, emphasizing fit and function.",
    isPrimary: false,
    isDetail: true,
  },
  {
    icon: ShieldAlert,
    title: "Cast Partial Denture",
    description: "Highly retained and durable removable partial dentures using cast metal frameworks.",
    isPrimary: false,
    isDetail: true,
  },
];