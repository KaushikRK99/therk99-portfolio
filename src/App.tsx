import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import TestimonialsSection from './components/TestimonialsSection';
import QRContactSection from './components/QRContactSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import ResumePrintView from './components/ResumePrintView';

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg text-gray-200 font-kanit antialiased overflow-hidden">
      <CustomCursor />
      <ScrollProgress />
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <QRContactSection />
      </main>
      <Footer />
      <ResumePrintView />
    </div>
  );
}
