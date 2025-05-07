import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function TestimonialMain() {
  const testimonials = [
    {
      quote:
        "As the Founder and Managing Director of Connecting Minds Business Center L.L.C, Marina has been instrumental in shaping the company’s direction since its establishment in 2022. With over nine years in the serviced office industry, she leads business strategy, operations, and client experience with clarity and vision.",
      name: "Marina D’Souza",
      designation: "Founder & Managing Director",
      src: "https://i.postimg.cc/WzLNcSg1/cm3.jpg",
    },
    {
      quote:
        "Vijay is a strategic leader with over six years of experience in business support services. He founded SAT Business Setup, which continues to assist entrepreneurs across the UAE. At Connecting Minds, he plays a key leadership role—expanding operations, launching four centers, and elevating service delivery.",
      name: "Vijay D’Souza",
      designation: "Operational Manager",
      src: "https://i.postimg.cc/KcPqwsJV/11108269.png"
    },
    {
      quote:
        "Nisha ensures smooth daily operations with expertise in office management and client coordination. Recognized as Best New Employee of 2024, she is praised for her professional, client-focused approach and seamless handling of center operations—making her an essential asset to the team.",
      name: "Shashikala Nishadi",
      designation: "Administrative Officer",
      src: "https://i.postimg.cc/BZHZB9fL/cm1.jpg",
    },
    {
      quote:
        "Sourabh is a results-driven Sales Executive focused on flexible office solutions. Starting in an administrative role, his outstanding performance and client service earned him a promotion to sales. Over the past two years, he has helped boost occupancy and client satisfaction through tailored workspace offerings and strong relationship-building.",
      name: "Sourabh Badhan",
      designation: "Sales Executive",
      src: "https://i.postimg.cc/PJWtXZQz/cm2.jpg",
    },

  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
