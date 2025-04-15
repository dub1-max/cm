"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ArrowLeft } from "lucide-react"; // Import the back arrow icon

type Card = {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => React.ReactNode;
};

export function ExpandableCardDemo() {
  const [active, setActive] = useState<Card | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            {/* Back Button - Visible on all screens */}
            <motion.button
              onClick={() => setActive(null)}
              className="absolute top-4 left-4 flex items-center justify-center bg-white rounded-full h-10 w-10 p-2 z-50 shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="h-5 w-5 text-black" />
            </motion.button>
            
            {/* Close Button - Visible only on mobile */}
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-4 right-4 lg:hidden items-center justify-center bg-white rounded-full h-10 w-10 p-2 z-50 shadow-md"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={500}
                  height={500}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h2
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h2>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {active.content()}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-1xl mx-auto w-full gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

// ... (your cards array remains the same)



const cards = [
  {
    description: " Luxury",
    title: " Experience",
    src: "https://uc928efda54dfc2ccdaff90a4c6d.previews.dropboxusercontent.com/p/thumb/AClLauPtaerAlirriYb4e9oTUG2RVirALueoYWO67OVT2zDA5MGCRQjHmHGuxMpy_HpVMafXFcXTBEe9ARfw4eu7n6QRl8gY-v8Q6_8tidInNKrRt7TQOoP9YLhMKCes5ioPWEAInZ62z165jcKhGEsP1FYar2tZEHNTruZnr8qJBCZ1Jc7qYoTnzXGxiJ_lxFRpiqv8mzbY31bB_EM1ZCN8fBQsCNcnblok_97gFJT3fi3SPJLxcBzRfyGL6w-LHASOaGxnJyxcARTaFndxiKAi0TAWrznXm_n7NnFnvO_8kY7IHYLDgbPAdsN4qYOtvRiDMROH7sFszCrC4voS-PkfNS2SMCMj2J-tyPr4w-Es8MwiR1sLc4x8I_W-7hTSECdbWdEuSwJyh7iFW6ZDvXbFh7M2oWZcFLEimzW6dV4YAQOszjM01CqQW8-vzQPjrGWsizDfGOK0UF2Pn83hhxNUJ00ZLvlP5pcyZER9yjcFm3jDe0gqBtivDwLeDd9UYI-XXm_jB5k11AC5h3XU1QmXgTSyji3UNkPSjj3SCtdMKQ/p.jpeg",
    ctaText: "Expand",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Meeting Room Rentals<br></br>
          <br></br>Elevate your corporate image and leave a lasting impression with our cutting-edge meeting rooms! Designed to exude 
          sophistication and luxury, our spaces are fully 
          equipped and perfect for private meetings, powerful presentations, engaging training sessions, VIP gatherings, exclusive events.
        </p>
      );
    },
  },
  {
    description: "of Renting",
    title: "Benefits",
    src: "https://uccc81a41f526ea8f628a0ac6f9c.previews.dropboxusercontent.com/p/thumb/ACllxkQHxo-pGgGMz8ZNb-_1P_ZzWRMudIAHxcg9BCHOVU8tzdp3dh75d4z72Aj_CW4lGV8FJyouyiOf7Ev6WB6aAVqXUzq_hVqADfMPlmdcqNEUYlBKUqt2Nm5iHaYcIBv6hKy-UkW6i42zDp_6vXdkOVduR9pn7tlvKaGgSYzu3CgyV0FCCnq48Ej1yKgBmROeiAcUtrpNyeqaJ4--Hufi12I9r4KfBWbn1pV4DTrvGZoC17B3kuLf70hBuELdCCOp5NaJn4sdrdigEahK7U5L_CMgfxsbTmEfQiiZAj13LHYT-UHs8bHpj3Ot7GQ3wvGb6zy8QKMmwtSzG_6lFnwRNVPP0uLDoWZuIiK6ywlAChsskNdHZ4olNJGx5CyCzL5AGgSlMCm6JnZrCPpVTptEj2Byu9vUoO-iPIsmVjAyVeNDHxk71QVtTYQ50zwELbjL8cD-zRG66u2u6U7Nj_LEodKHvxSXuca4QMXWoiZPGTvDNFQjft8t9NBM83jxcuzvEICAFdUEwRzBdF46X0UC1alx9nj97WApkeiUazaxMg/p.jpeg",
    ctaText: "Expand",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>

          Rent a Meeting Room<br></br>
          <br></br>Professional Reception: Our welcoming team is dedicated to making your guests feel at home 
          from the moment they arrive. State-of-the-Art Facilities: Our business center 
          is equipped with the latest technology,
          ergonomic furniture, and modern amenities to enhance your work experience.
          Effortless Booking: Choose the booking option that suits your schedule, whether by the hour or 
          for the entire day. 
        </p>
      );
    },
  },

  {
    description: "Garhoud",
    title: "Prime Location",
    src: "https://uced33377b38d99780ae398c61d3.previews.dropboxusercontent.com/p/thumb/ACkyRZeQytzHatbRPiFulLWel82jGeiT-vaqvFrWcW0toEyLekL40HemkaH02hlzFeyhXeN8Gak4yv15vdnJkAOpdKcixHyMls2dJD5hFZ_bfmZ9D7sQJyOpGkeen0ZKM7JsM1jYw0Bc53dI0Ez0k2eouu_chkaGhRF6MlmvHotBUNAu3baYUNQLK1REDzah6ywdPtDr_jfbmYRRF3Q5gkemTK56Q9L91dJvvR5b9gl06wRkpOrJ-d6uwIUWuR3nWc4nGRuuHB_12ncrkrjDfv_VQhSPOCXOmgf0Z3zDxfhDbZhEXF-s8QUIK3B9lq4B0iiKTXdHWkXF8Pg5uhLFOJUDsYWmOlvvRPKCvQzj9X2-23b4e9H0dPwvYPD8tezVQN66rJ-4Pf82E_q53H7OgCAdRsY2H4HdWNywg54ZRf2yRjYCQtN2nQbTXV2Bnoe3uZeV60LhRg8dtpYRnEhJmngO4QJS_rdSPWNAPNRVS1a4OB4fm6u2tPLwJ3FVlf27YokVw6Xf0Labv2I0URNJcUkugVmF9E124lxk-30WsVs4_Q/p.jpeg",
    ctaText: "Expand",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Convenience meets sophistication as Connecting Minds is strategically located in City Center Garhoud, providing
           easy access to major business and commercial landmarks. Our central position ensures
           that you are always well-connected, making business meetings, networking, and commuting a breeze.
        </p>
      );
    },
  },
  {
    description: "Vision",
    title: "Our",
    src: "https://uc48f2ee971c1a1188f3d0ce78e7.previews.dropboxusercontent.com/p/thumb/ACm22XHNIOnyBM3bb-keatk93bBVH6epUKcjAkwnnMaO9ygDnGBXTn1ivx32kvujWVoENMyCo-MfFec70rTiH8Cp74VhpRwrDkXmx_bpErRgzQkWoDzwt2HJY7iuVKTLjuTyImp9Hb7J_L-4Ef9RLmb4fGL3voN-Mivco5RRuEFGSnFvUIHI7Cdvqrb9cYS4R6AfKKXDccwifkcOX_Disv6B4hJiPIiFxv70BoVR2naRUjmKwmQ-vK18Fo-hbhO5XCPFXGQxmO8TJ73ZoPT997bUxLdv7TOnL10vwoPQt3IQDl5xBnWbG3vvmCnOv03s5yfYPM5fQsxGHgip2X-F72X83iaqS39fxbJCeXquITt33vAMv0q88IVJ3Pe3ZjkgPhLCFebe1x-L4SIZv0Mmrh2CRaicc94-pWJgsdoloBCk2UMiKnl8oxmY6dQDKYSdSMI9P1EunJUf9vOsfjwh7rXW_01RWlSlOVxA13oTO-CJ1pfoVgnMNUjfOIGuWh6N4fj3dw_Q-ahIccUlXYau9bIpZLMDv82Lb4K-aEthFTkqNg/p.jpeg",
    ctaText: "Expand",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
         At Connecting Minds, our mission is to create vibrant and flexible workspaces 
         that empower businesses in Dubai to flourish. We are dedicated to cultivating a dynamic 
         environment where entrepreneurs, startups, and established enterprises can collaborate, innovate, and achieve their goals.
        Join us and elevate your business experience in one of the world's most exciting cities!
        </p>
      );
    },
  },
  
];
