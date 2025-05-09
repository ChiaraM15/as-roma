import React from "react";


type Props = {
  text?: string;
};

const ExampleCarouselImage: React.FC<Props> = ({ text }) => (
  <div className="w-full h-80 bg-gray-300 flex items-center justify-center text-2xl font-bold text-white">
    {text}
  </div>
);

export default ExampleCarouselImage;