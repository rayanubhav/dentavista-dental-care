import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import Toaster from "./Toaster";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [messageState, setMessageState] = useState({ text: "", type: "" });
  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation (basic)
    if (!formData.name || !formData.email || !formData.message) {
      setMessageState({ text: "Please fill all required fields", type: "error" });
      return;
    }

    setIsSending(true);

    try {
      // Submit form logic, e.g., API call
      await new Promise((resolve) => setTimeout(resolve, 1500)); // simulate API

      setMessageState({ text: "Message sent successfully!", type: "success" });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setMessageState({ text: "Failed to send message", type: "error" });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[500px]"
    >
      <h2 className="text-4xl font-extrabold mb-8 text-center text-foreground">
        Book Appointment
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground">
            Reach us via phone, email, or visit our clinic.
          </p>

          <div className="flex items-center gap-4">
            <MapPin className="w-6 h-6 text-primary" />
            <span>123 Smile Street, Dombivali</span>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 text-primary" />
            <span>+91 12345 67890</span>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-primary" />
            <span>contact@dentavista.com</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            value={formData.name}
            onChange={handleInputChange}
            disabled={isSending}
            required
            className="w-full rounded-md border-gray-300 shadow-sm px-4 py-3"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleInputChange}
            disabled={isSending}
            required
            className="w-full rounded-md border-gray-300 shadow-sm px-4 py-3"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            disabled={isSending}
            className="w-full rounded-md border-gray-300 shadow-sm px-4 py-3"
          />
          <textarea
            name="message"
            placeholder="Your Message *"
            value={formData.message}
            onChange={handleInputChange}
            disabled={isSending}
            required
            rows={5}
            className="w-full rounded-md border-gray-300 shadow-sm px-4 py-3 resize-none"
          />

          <button
            type="submit"
            disabled={isSending}
            className="bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-md hover:bg-primary-dark transition-all duration-300 w-full"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Toast notification */}
      <Toaster
        message={messageState.text}
        type={messageState.type}
        setMessageState={setMessageState}
      />
    </section>
  );
};

export default ContactSection;
