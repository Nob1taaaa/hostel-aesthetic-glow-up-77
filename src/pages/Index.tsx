
import CuteHero from "@/components/CuteHero";
import SamsungStyleRooms from "@/components/SamsungStyleRooms";
import About3D from "@/components/About3D";
import Facilities from "@/components/Facilities";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import NextLevelScrollEffects from "@/components/NextLevelScrollEffects";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Raksha Hostel - Premium Student Accommodation in Greater Noida | Best PG Near Knowledge Park</title>
        <meta name="description" content="Raksha Hostel offers premium student accommodation in Greater Noida with executive single, deluxe sharing & economy triple rooms. 24x7 security, WiFi, mess facility & study areas. Book now!" />
        <meta name="keywords" content="hostel in greater noida, student accommodation, PG near knowledge park, boys hostel, girls hostel, raksha hostel, premium rooms, study area, mess facility" />
        <meta name="author" content="Raksha Hostel - NUMISHAL Pvt. Ltd." />
        <meta property="og:title" content="Raksha Hostel - Premium Student Accommodation in Greater Noida" />
        <meta property="og:description" content="Find your perfect home away from home at Raksha Hostel. Premium rooms, 24x7 security, modern facilities & more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rakshahostel.com" />
        <meta property="og:image" content="/lovable-uploads/a54a5c5d-b32e-46e9-94ef-1eff409c145b.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Raksha Hostel - Premium Student Accommodation" />
        <meta name="twitter:description" content="Best hostel in Greater Noida with premium facilities and security." />
        <meta name="twitter:image" content="/lovable-uploads/a54a5c5d-b32e-46e9-94ef-1eff409c145b.png" />
        <link rel="canonical" href="https://rakshahostel.com" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            "name": "Raksha Hostel",
            "description": "Premium student accommodation in Greater Noida",
            "url": "https://rakshahostel.com",
            "telephone": "+91-8743-836-836",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "12A, Raksha Hostels, Knowledge Park 3",
              "addressLocality": "Greater Noida",
              "postalCode": "201310",
              "addressCountry": "IN"
            },
            "amenityFeature": [
              "WiFi",
              "24x7 Security",
              "Mess Facility",
              "Study Area",
              "Air Conditioning"
            ]
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background transition-colors duration-300">
        <NextLevelScrollEffects />
        <Navigation />
        <CuteHero />
        <div className="premium-section">
          <About3D />
        </div>
        <div className="premium-section">
          <SamsungStyleRooms />
        </div>
        <div className="premium-section">
          <Facilities />
        </div>
        <div className="premium-section">
          <Testimonials />
        </div>
        <div className="premium-section">
          <Team />
        </div>
        <div className="premium-section">
          <Contact />
        </div>
        <Footer />
        <Chatbot />
      </div>
    </>
  );
};

export default Index;
