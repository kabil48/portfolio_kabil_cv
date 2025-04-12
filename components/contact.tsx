"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Contact() {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageStatus, setMessageStatus] = useState<string>("");

  const handleChange = (en: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = en.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessageStatus(""); // Reset previous status

    emailjs
      .send(
        "service_5dx3ljd", // Ton ID de service EmailJS
        "template_bsw4tkw", // Ton TEMPLATE_ID EmailJS
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "bounouarakabil363@gmail.com", // Email de réception
        },
        "c9WMoGgdJlAUs2S1P" // Ta clé publique EmailJS
      )
      .then(
        () => {
          setMessageStatus(
            language === "fr"
              ? "Votre message a été envoyé avec succès !"
              : "Your message has been sent successfully!"
          );
        },
        () => {
          setMessageStatus(
            language === "fr"
              ? "Une erreur est survenue. Veuillez réessayer."
              : "An error occurred. Please try again."
          );
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  const content = {
    fr: {
      title: "Contactez Moi",
      intro: "N'hésitez pas à me contacter via le formulaire ci-dessous ou par email.",
      name: "Votre Nom",
      email: "Votre Email",
      subject: "Sujet",
      message: "Votre Message",
      send: "Envoyer",
      sending: "Envoi en cours...",
      contactInfo: "Informations de contact",
    },
    en: {
      title: "Contact Me",
      intro: "Feel free to contact me via the form below or by email.",
      name: "Your Name",
      email: "Your Email",
      subject: "Subject",
      message: "Your Message",
      send: "Send",
      sending: "Sending...",
      contactInfo: "Contact Information",
    },
  };

  return (
    <section id="contact" className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">
        {content[language].title}
      </h2>
      <p className="text-center text-gray-400 mb-8">{content[language].intro}</p>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            {content[language].contactInfo}
          </h3>
          <div className="space-y-4 text-gray-400">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-cyan-400" />
              <a href="mailto:bounouarakabil363@gmail.com" className="text-gray-400">
                Bounouarakabil363@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span>+212667021376</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span>Fès, Maroc</span>
            </div>
          </div>
          <div className="flex space-x-4 mt-6">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://ma.linkedin.com/in/kabil-bounouara-14b6221b8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.instagram.com/kabil_ck01/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
                  alt="Instagram"
                  className="w-5 h-5"
                />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/kabil48"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={content[language].name}
            className="bg-gray-800 border-gray-700"
            required
          />
          <Input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder={content[language].email}
            className="bg-gray-800 border-gray-700"
            required
          />
          <Input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={content[language].subject}
            className="bg-gray-800 border-gray-700"
            required
          />
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={content[language].message}
            className="bg-gray-800 border-gray-700"
            rows={4}
            required
          />
          <Button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? content[language].sending : content[language].send}
          </Button>
        </form>
        {messageStatus && (
          <div className="mt-4 text-center text-gray-400">
            <p>{messageStatus}</p>
          </div>
        )}
      </div>
    </section>
  );
}
