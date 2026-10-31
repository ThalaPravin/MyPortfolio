import Preloader from "@/components/Preloader";
import NoiseOverlay from "@/components/NoiseOverlay";
import CustomCursor from "@/components/CustomCursor";
import UpwardSparkles from "@/components/UpwardSparkles";
import LightingBee from "@/components/LightingBee";
import AmbientBackground from "@/components/AmbientBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CredExperience from "@/components/CredExperience";
import SkillsSection from "@/components/SkillsSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import HackathonsSection from "@/components/HackathonsSection";
import FreelanceWork from "@/components/FreelanceWork";
import SystemLab from "@/components/SystemLab";
import PersonaJourney from "@/components/PersonaJourney";
import YouTubeShowcase from "@/components/YouTubeShowcase";
import AchievementsSection from "@/components/AchievementsSection";
import HireMeSection from "@/components/HireMeSection";
import TopmateBooking from "@/components/TopmateBooking";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f2f2ee] relative selection:bg-[#00E599] selection:text-[#050505]">
      {/* Unique Interactive Magnetic Cursor */}
      <CustomCursor />

      {/* Upward Floating Delicate Sparkles */}
      <UpwardSparkles />

      {/* Bioluminescent Lighting Bee with Curvy Scroll Flight Path */}
      <LightingBee />

      {/* Lively Scroll-Reactive Ambient Background & Subtle Grid */}
      <AmbientBackground />

      {/* Editorial Preloader */}
      <Preloader />

      {/* Subtle Analog Noise Grain */}
      <NoiseOverlay />

      {/* Sleek, Uncluttered Floating Navigation Capsule */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* CRED Experience (With Authentic CRED HQ Bangalore Photo) */}
      <CredExperience />

      {/* Skills Matrix with Official Brand SVG Logos */}
      <SkillsSection />

      {/* Engineered Systems & Enterprise CRM/Full Stack Projects */}
      <FeaturedProjects />

      {/* Smart India Hackathon & Luminous Techno-X Winner Arena */}
      <HackathonsSection />

      {/* Freelance Client Case Studies (Mesa School, itel, Cautio, 22+ Projects) */}
      <FreelanceWork />

      {/* Interactive System Architecture Lab (Simulate Event Flows) */}
      <SystemLab />

      {/* Pravin's Story, Bangalore Chapter & Deep Work Persona Journey */}
      <PersonaJourney />

      {/* YouTube Media (@the_zynx1) & Twitter/X Talks */}
      <YouTubeShowcase />

      {/* Honors, Academics (9.1 CGPA), & Big Metric Counters */}
      <AchievementsSection />

      {/* Hire Me / Collaboration Models (Full-Time, Part-Time, Freelance) */}
      <HireMeSection />

      {/* Topmate 1:1 Mentorship & Technical Discussion Booking */}
      <TopmateBooking />

      {/* Contact, Instant Email Copy & Socials */}
      <ContactSection />

      {/* Minimalist Editorial Footer */}
      <Footer />
    </main>
  );
}
