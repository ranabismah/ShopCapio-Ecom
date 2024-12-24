"use client"; // Mark this file as a Client Component

import Image from "next/image";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();

  const handleExplore = () => {
    router.push("/products"); // Navigate to the /products page
  };

  return (
    <section className="min-h-screen flex items-center bg-[#F5E6FE]"> 
      <div className="container mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 md:p-4 text-[#6A0572]"> 
            ShopCapio
          </h1>
          <p className="text-lg lg:text-xl mb-6 text-[#3D1E6D]"> 
            Explore a wide range of top-quality products, from home essentials to fashion . Shop now for unbeatable value and convenience!
          </p>
          <button
            onClick={handleExplore}
            className="py-3 px-6 rounded-lg text-lg transition-all shadow-md bg-[#6A0572] text-white hover:bg-[#C77DFF] hover:text-[#6A0572] hover:shadow-lg"
          >
            Explore Now
          </button>
        </div>

        {/* Right Image */}
<div className="lg:w-1/2 flex justify-center group">
  <Image
    src="/hero-2.png" 
    alt="Hero Furniture Showcase"
    width={500}
    height={500}
    className="rounded-lg shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:border-4 group-hover:border-[#6A0572]"
  />
</div>

      </div>
    </section>
  );
};

export default HeroSection;
