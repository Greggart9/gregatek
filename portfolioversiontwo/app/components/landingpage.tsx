"use client";
import { motion } from "framer-motion";
import LiveClock from "./clock";
import Button from "./Button";


const Landingabout = () => {
  return (
    <div
      className="
        relative
        w-full h-[calc(100vh-48px)] -mt-20
        rounded-2xl
        overflow-hidden
      "
    >
      {/* BACKGROUND (scales first) */}
      <motion.div
        initial={{ scale: 0.87 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.2,
          ease: [0, 0, 0.2, 1],
        }}
        className="absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/assets/land.jpg')" }}
      />
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT (fade + scale AFTER bg) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 1.1, // slightly overlaps bg end
          duration: 0.6,
          ease: [0, 0, 0.2, 1],
        }}
        className="relative z-10 flex flex-col h-full items-center justify-center"
      >
        <div className="flex justify-center flex-col items-center">
        <h1 className="text-white text-[30px] md:text-[48px] xl:text-[56px] text-center tracking-normal leading-8 md:leading-13 xl:leading-16 font-medium max-w-2xl">
          Imagine a space between vision & impact
        </h1>
        <p className="pt-4 font-medium text-white leading-6 text-base">That’s where we make an impact.</p>
        
        <div className="flex flex-col sm:flex-row gap-3 pt-6 md:pt-10">
          <Button
            href="/contact"
            label="Book a free call"
            variant="primary"
          />

          <Button
            href="/projects"
            label="Explore projects"
            variant="secondary"
          />
        </div>


        </div>

        {/* BOTTOM CONTENT */}
  
            <div className="absolute bottom-10 left-10 right-10 z-20 flex items-center justify-center md:justify-between text-white text-sm">
            {/* LEFT */}
            <span className="hidden md:block tracking-wide">
                <LiveClock />
            </span>

            {/* CENTER */}
            <div className="flex items-center gap-2">
                <span className="font-medium">Scroll to explore</span>
                <span className="leading-5 text-xs">↓</span>
            </div>

            {/* RIGHT */}
            <span className="hidden md:block tracking-wide">
                EST. in 2025
            </span>
            </div>
          
      </motion.div>
    </div>
  );
};

export default Landingabout;
