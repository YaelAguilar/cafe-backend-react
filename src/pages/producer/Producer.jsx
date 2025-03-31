import React from "react";
import ProducerHeader from "../../components/common/layout/ProducerHeader";
import FeaturesSection from "../../components/features/home/FeaturesSection";
import PTestimonialsSection from "../../components/features/home/PTestimonialsSection";
import HowItWorksSection from "../../components/features/home/HowItWorksSection";
import ProducerFooter from "../../components/common/layout/ProducerFooter";
import PHeroSection from "../../components/features/home/PHeroSection";
import PStatisticsSection from "../../components/features/home/PStatisticsSection";

const ProductorInicio = () => {
  return (
    <div>
      <ProducerHeader />

      <PHeroSection />

      <FeaturesSection />

      <PStatisticsSection />

      <PTestimonialsSection />

      <HowItWorksSection />

      <ProducerFooter />
    </div>
  );
};

export default ProductorInicio;
