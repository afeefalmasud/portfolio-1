import AboutSection from "./components/about/about";
import ContactSection from "./components/contact/Contact";
import EducationSection from "./components/education/education";
import Footer from "./components/footer/footer";
import HeroSection from "./components/hero/Hero";
import ProjectsSection from "./components/projects/project";
import SkillsSection from "./components/skill/Skill";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <SkillsSection></SkillsSection>
      <EducationSection></EducationSection>
      <ProjectsSection></ProjectsSection>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </div>

  );
}
