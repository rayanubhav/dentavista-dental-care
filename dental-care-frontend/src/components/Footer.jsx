import React from "react";
import {
  ClipboardList,
  Gem,
  Plug2,
  ShieldAlert,
  Award,
  CheckCircle,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Home,
  Facebook,
  Instagram,
  Loader2,
  DollarSign,
  Diamond,
  X,
  Clock,
  ArrowRight,
  Linkedin,
  AlertCircle,
} from "lucide-react";

const Footer = () => (
  <footer className="bg-card/95 backdrop-blur px-6 py-10 mt-20">
    <div className="max-w-7xl mx-auto text-center text-muted-foreground text-sm">
      &copy; {new Date().getFullYear()} Dentavista Clinic. All rights reserved.
    </div>
  </footer>
);

export default Footer;
