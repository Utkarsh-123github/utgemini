"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const contentArr = [
    {
      title: 'Discover UtkarshGPT with Us: Data-Driven Insights',
      description:
        'Embark on a AI journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity.',
    },
    {
      title: 'Consistent and Accurate Answers',
      description:
        'Unlike humans, AI chatbots provide uniform and error-free responses, ensuring consistent information delivery every time.',
    },
    {
      title: 'Limitless Learning Opportunities',
      description:
        'AI chatbots offer limitless learning opportunities by providing personalized, on-demand education. They adapt to individual needs, deliver real-time feedback, and make learning more accessible, engaging, and flexible for everyone.',
    },
  ];

const WhyChooseUs = () => {
  return (
    <div>
        <StickyScroll content={contentArr} />
    </div>
  )
}

export default WhyChooseUs