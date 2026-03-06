import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import PrincipalMessage from '../components/PrincipalMessage';
import ClassesPreview from '../components/ClassesPreview';
import FacilitiesPreview from '../components/FacilitiesPreview';
import ReviewsSection from '../components/ReviewsSection';
import BlogPreview from '../components/BlogPreview';
import AnimatedStats from '../components/AnimatedStats';
import FaqSection from '../components/FaqSection';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Roots and Wings School",
    "description": "Best kindergarten and primary school in Saharanpur.",
    "url": "https://www.rootsandwings.edu.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Qazi Street, Mohalla Qazi",
      "addressLocality": "Saharanpur",
      "addressCountry": "IN"
    },
    "telephone": "7409541444",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "4"
    }
  };

  return (
    <>
      <Helmet>
        <title>Roots & Wings School | Best Kindergarten in Saharanpur</title>
        <meta name="description" content="Welcome to Roots and Wings School in Saharanpur. The best nursery and primary school near Qazi street offering play-way learning for young kids." />
        <meta property="og:title" content="Roots & Wings School | Best Kindergarten in Saharanpur" />
        <meta property="og:description" content="Welcome to Roots and Wings School in Saharanpur. The best nursery and primary school near Qazi street offering play-way learning for young kids." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="flex flex-col">
        <HeroSection />
        <AnimatedStats />
        <ClassesPreview />
        <PrincipalMessage />
        <FacilitiesPreview />
        <ReviewsSection />
        <FaqSection />
        <BlogPreview />
      </div>
    </>
  );
}
