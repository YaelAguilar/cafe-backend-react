import React from "react";
import PHeader from "../components/PHeader";
import FeaturesSection from "../components/FeaturesSection";
import PTestimonialsSection from "../components/PTestimonialsSection";
import HowItWorksSection from "../components/HowItWorksSection";
import PFooter from "../components/PFooter";
import PHeroSection from "../components/PHeroSection";
import PStatisticsSection from "../components/PStatisticsSection";

const ProductorInicio = () => {
  return (
    <div>
      <PHeader />

      <PHeroSection />

      <FeaturesSection />

      <PStatisticsSection />

      <PTestimonialsSection />

      <HowItWorksSection />

      <PFooter />
    </div>
  );
};

export default ProductorInicio;
