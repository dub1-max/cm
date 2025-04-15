"use client";
// import Image from "next/image";
// import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function   CardsCarousel1() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-emerald-700 font-sans">
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Business Centers",
    title: "Connecting Minds",
    src: "https://i.postimg.cc/0ywR25cP/image-1.jpg",
    content: null,
  },
  {
    category: "Business Centers",
    title: "Connecting Minds",
    src: "https://i.postimg.cc/K8MjS2Tg/gk-v1SqN.jpg",
    content: null,
  },
  {
    category: "Business Centers",
    title: "Connecting Minds",
    src: "https://i.postimg.cc/yNhNxyv1/UdDTEeNg.jpg",
    content: null,
  },
  {
    category: "Business Centers",
    title: "Connecting Minds",
    src: "https://i.postimg.cc/0Qc2d5Th/G-QP6d.jpg",
    content: null,
  },
  {
    category: "Business Centers",
    title: "Connecting Minds",
    src: "https://i.postimg.cc/K8MjS2Tg/gk-v1SqN.jpg",
    content: null,
  },
  {
    category: "Business Centers",
    title: "Connecting Minds",
    src: "https://i.postimg.cc/0ywR25cP/image-1.jpg",
    content: null,
  },
];