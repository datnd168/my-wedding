"use client";
import { useState } from "react";
import Image from "next/image";

export default function Memory() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string>("");

  const images = [
    "/assets/img1.jpeg",
    "/assets/img13.jpeg",
    "/assets/img2.jpeg",
    "/assets/img3.jpeg",
    "/assets/img4.jpeg",
    "/assets/img5.jpeg",
    "/assets/img8.jpeg",
    "/assets/img9.jpeg",
    "/assets/img15.jpeg",
  ];

  const handleImageClick = (src: string) => {
    setCurrentImage(src);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full bg-gray-4 pb-24 pt-32">
      <div className="container mx-auto">
        <div className="animate-box mb-24 text-center">
          <p className="mb-4 text-sm font-semibold leading-loose text-gray">
            OUR MEMORIES
          </p>
          <h2 className="mb-4 font-sacra text-5xl font-bold text-pink md:text-6xl">
            Wedding Gallery
          </h2>
        </div>

        <div className="mx-auto flex w-full max-w-[1140px] flex-wrap px-5 xl:w-3/4">
          {images.map((src, index) => (
            <div
              key={index}
              className="animate-box h-[416px] w-full cursor-pointer p-1 md:w-1/3 lg:p-[5px]"
              onClick={() => handleImageClick(src)}
            >
              <div className="relative h-full w-full">
                <Image
                  src={src}
                  alt={`image-${index}`}
                  fill
                  className="rounded-lg"
                  style={{ objectFit: "cover" }}
                />
                <div className="memory-item absolute bottom-0 left-0 right-0 top-0 rounded-lg bg-black opacity-20 transition duration-300 hover:opacity-50" />
              </div>
            </div>
          ))}
        </div>

        {isOpen && currentImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            onClick={closeLightbox}
          >
            <div className="relative">
              <img
                src={currentImage}
                alt="Large view"
                className="max-h-[90vh] max-w-full rounded-lg object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
