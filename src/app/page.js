import AboutSection from "./components/about/about";
import ContactSection from "./components/contact/Contact";
import EducationSection from "./components/education/education";
import Footer from "./components/footer/footer";
import HeroSection from "./components/hero/Hero";
import ProjectsSection from "./components/projects/project";
import ScrollAnimate from "./components/scrollAnimation";
import SkillsSection from "./components/skill/Skill";

export default function Home() {
  return (
      <main className="overflow-x-hidden">
      <HeroSection />

      {/* Slides in from Left */}
      <ScrollAnimate direction="left">
        <AboutSection />
      </ScrollAnimate>

      {/* Slides in from Right */}
      <ScrollAnimate direction="right">
        <SkillsSection />
      </ScrollAnimate>

      {/* Slides in from Left */}
      <ScrollAnimate direction="left">
        <EducationSection />
      </ScrollAnimate>

      {/* Slides in from Right */}
      <ScrollAnimate direction="right">
        <ProjectsSection />
      </ScrollAnimate>

      {/* Slides in from Up / Bottom */}
      <ScrollAnimate direction="left">
        <ContactSection />
      </ScrollAnimate>

      <Footer />
    </main>

  );
}
