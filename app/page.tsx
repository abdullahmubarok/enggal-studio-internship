"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdCallMade } from "react-icons/md";
import Link from "next/link";

export default function Home() {
  // JAM
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const now = new Date();
      const t = now.toLocaleTimeString("id-ID", { hour12: false });
      setTime(t);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

const [testiIndex, setTestiIndex] = useState(0);

  const testimonials = [
    {
      photo: "/assetenggal/logoenggalmain2.png",
      name: "Kath Brennan",
      role: "CEO of Chexks • B2B Financial Platform",
      text: `Their UX/UI creative is just on another level, their willingness 
      to satisfy directions while keeping their suggested creative direction 
      is incredible. .`,
    },
    {
      photo: "/assetenggal/logoenggalmain4.png",
      name: "John Carter",
      role: "Founder of Horizon Media",
      text: `They worked extremely fast and delivered a highly polished 
      interactive media that increased our engagement significantly.`,
    },
    {
      photo: "/assetenggal/logoenggalmain2.png",
      name: "Amelia Wright",
      role: "COO of NovaTech",
      text: `Outstanding creative strategy and execution. We saw immediate 
      improvements in user interaction.`,
    },
    {
      photo: "/assetenggal/logoenggalmain4.png",
      name: "Daniel Lee",
      role: "Marketing Lead at Vistora",
      text: `Their mapping and visualization services are extremely accurate 
      and visually beautiful.`,
    },
    {
      photo: "/assetenggal/logoenggalmain2.png",
      name: "Clara Dew",
      role: "Director at Wave Studio",
      text: `One of the most reliable teams we've worked with — excellent 
      animation quality that elevated our brand.`,
    },
  ];

  const t = testimonials[testiIndex];

  const nextTesti = () =>
    setTestiIndex((testiIndex + 1) % testimonials.length);

  const prevTesti = () =>
    setTestiIndex((testiIndex - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative min-h-screen bg-black text-white font-montserrat">
      
      {/* BUTTON FIXED DI POJOK KANAN */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onClick={() => window.open("https://wa.me/628170044777?text=Selamat%20siang,%20saya%20mau%20konsultasi%20project", "_blank")}
        className="fixed bottom-10 right-10 flex items-center gap-2 font-semibold bg-white text-black px-6 py-4 rounded-full text-xl hover:opacity-100 hover:-translate-y-1 hover:scale-105 transition-all duration-300 shadow-lg z-50"
      >
        Konsultasi
        <MdCallMade className="text-xl" />
      </motion.button>


      {/* NAVBAR */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex justify-between items-center w-full -mb-10 px-6 md:px-20 py-10"
      >
        <div className="flex items-center gap-2 ml-4 ">
          <a href="/" rel="noopener noreferrer">
            <Image 
              src="/assetenggal/logoenggalmain3.png" 
              alt="enggallogo" 
              width={100}  
              height={100} 
            />
          </a>    
        </div>

        <nav className="hidden md:flex font-medium gap-4 sm:gap-5 md:gap-20 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl mx-4 sm:mx-6 md:mx-10 lg:mx-16">
          <a href="/portfolio" className="relative after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Portfolio</a>
          <a href="/specialist" className="relative after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Specialists</a>
          <a href="/internship" className="relative after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Internship</a>
          <a href="/enggals" className="relative after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Enggals</a>
          <a href="/contact" className="relative after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Contact</a>
        </nav>

        <div className="flex items-center gap-2 ml">
          <a href="/" className="font-medium gap-5 md:gap-20 text-2xl hover:underline">
            Main
          </a> 
        </div>
      </motion.header>

      {/* HEADER INFO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="top-40 right-20 text-right mb-10 px-6 mt-8 md:px-20 "
      >
        {/* <div className="text-sm text-neutral-100">V1 16.00 10/12/2025<br/></div> */}
        <div className="text-sm text-neutral-100">Malang - Indonesia</div>
        <span className="text-xl text-neutral-100 font-semibold">{time}</span>
      </motion.div>

      {/* SECTIONS */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-30 px-6 md:px-20"
        >
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-Regular leading-tight max-w-7xl mb-6">
          Enggal is a creative media studio.
        </h1>

          <p className="font-medium text-xl text-neutral-500 max-w-6xl mb-8">
          We are a creative studio specializinginmediadevelopment for the tourismindustry, delivering modern visual solutions suchas2D& 3D animation, graphic design, websites, game development, interactive media, AR/VR,videotron content, and mapping. Withanexperienced teamand advancedtechnology,we help brands and tourist destinationscreateengaging, informative, and impactful content.
          </p>
        </motion.section>

      {/* LAST PROJECT */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 px-6 md:px-20"
        >

        <h2 className="text-right text-6xl md:text-7xl font-Regular leading-tight mb-10 text-white w-full">
          Last Projects
        </h2>


        <div className="flex flex-col md:flex-row gap-6 mb-10">
          {/* Card 1 */}
          <a
            href="https://www.instagram.com/enggal.studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full md:w-[900px] h-[500px] rounded-2xl overflow-hidden shadow-lg relative group"

          >
            {/* Image tetap normal */}
            <img
              src="\assetenggal\3d.jpg"
              alt="Project"
              className="w-full h-full object-cover"
            />

            {/* Overlay gelap muncul saat hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 rounded-2xl"></div>

            {/* Teks tetap di atas overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2">
              <h3 className="text-3xl font-semibold text-white">3D Animation</h3>
              <p className="text-white/80 text-lg">
                Dynamic and modern 3D motion graphics.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-white/20 text-white font-bold rounded-full px-3 py-1 text-sm">3D</span>
                <span className="bg-white/20 text-white font-bold rounded-full px-3 py-1 text-sm">MOTION</span>
                <span className="bg-white/20 text-white font-bold rounded-full px-3 py-1 text-sm">DESIGN</span>
              </div>
            </div>
            </a>
      

          {/* Card 2 */}
          <a
            href="https://www.instagram.com/enggal.studio/"
            target="_blank"
            rel="noopener noreferrer"
                     className="block w-full md:w-[900px] h-[500px] rounded-2xl overflow-hidden shadow-lg relative group"
           
          >
            {/* Image tetap normal */}
            <img
              src="\assetenggal\interactive.jpg"
              alt="Project"
              className="w-full h-full object-cover"
            />

            {/* Overlay gelap muncul saat hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 rounded-2xl"></div>

            {/* Teks tetap di atas overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2">
              <h3 className="text-3xl font-semibold text-white">Motion Design</h3>
              <p className="text-white/80 text-lg">
                Engaging interactive content that captures attention.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-white/20 text-white font-bold rounded-full px-3 py-1 text-sm">GAME</span>
                <span className="bg-white/20 text-white font-bold rounded-full px-3 py-1 text-sm">DESIGN</span>
                <span className="bg-white/20 text-white font-bold rounded-full px-3 py-1 text-sm">INTERACTIVE</span>
              </div>
            </div>
            </a>
        </div>

        <div className="flex gap-6 mb-10">
          <a
            href="https://www.instagram.com/enggal.studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-[1800px] h-[500px] rounded-2xl overflow-hidden shadow-lg relative group"
          >
            {/* Image tetap normal */}
            <img
              src="\assetenggal\mapping.jpg"  
              alt="Project"
              className="w-full h-full object-cover"
            />
.
            {/* Overlay gelap muncul saat hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 rounded-2xl"></div>

            {/* Teks tetap di atas overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2">
              <h3 className="text-3xl font-semibold text-white">Mapping Project</h3>
              <p className="text-white/80 text-lg">
                Creative mapping for immersive visual experiences.
              </p>
              <div className="flex gap-2 mt-2">
                <span className="bg-white/20 text-white font-bold rounded-full px-3 py-1 text-sm">MAPPING</span>
                <span className="bg-white/20 text-white font-bold rounded-full px-3 py-1 text-sm">DESIGN</span>
                <span className="bg-white/20 text-white font-bold rounded-full px-3 py-1 text-sm">MOTION</span>
              </div>
            </div>
            </a>
        </div>
    .

    
        <div className="flex gap-6 mb-10">
          <a
            href="/projects"
            className="block w-[1800px] h-[300px] rounded-2xl overflow-hidden shadow-lg relative group"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-black flex items-center justify-center">
              <h3
                className="
                  relative text-5xl md:text-6xl font-semibold text-white
                  after:block after:h-[3px] after:w-0 after:bg-white 
                  after:transition-all after:duration-300 after:mt-3
                  group-hover:after:w-full
                "
              >
                See All Project <span className="inline-block">›</span>
              </h3>
            </div>
          </a>
        </div>
        </motion.section>

        {/* SECTION 1 — WHITE SECTION */}
        <section className="w-full bg-white text-black py-24 ">
        <div className="w-full px-6 md:px-20 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

            {/* KIRI */}
            <div className="md:col-span-3">
              <h2 className="text-xl text-gray-400 md:text-4xl font-semibold leading-tight mb-6 0">
                About Us
              </h2>
            </div>

            {/* KANAN – MOBILE FULL WIDTH */}
            <div className="col-span-1 md:col-span-9 max-w-7xl">
              <h1 className="text-4xl md:text-6xl font-medium leading-tight">
                Enggal Studio has been trusted by numerous companies to handle a wide range of creative projects. 
                <br/><br/>The studio consistently delivers high-quality visual solutions that meet industry expectations.
                <br/><br/> Its expertise is particularly recognized in developing content and productions for tourismattractions
                and experiential destinations.
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

            {/* KIRI */}
            <div className="md:col-span-3">
              <h2 className="text-xl md:text-4xl font-semibold leading-tight mb-6">
                
              </h2>
            </div>

            {/* KANAN – MOBILE FULL WIDTH */}
            <div className="col-span-1 md:col-span-9 max-w-7xl">

              {/* 4 COLUMN SERVICES */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-32 mb-20">
                <div>
                  <h3 className="text-6xl md:text-6xl lg:text-7xl font-medium mb-4">100+</h3>
                  <p className="text-2xl md:text-2xl lg:text-4xl text-gray-400">
                    Active users on product we created
                  </p>
                </div>

                <div>
                  <h3 className="text-6xl md:text-6xl lg:text-7xl font-medium mb-4">80+</h3>
                  <p className="text-2xl md:text-2xl lg:text-4xl text-gray-400 ">
                    Project completed along the way
                  </p>
                </div>

                <div>
                  <h3 className="text-6xl md:text-6xl lg:text-7xl font-medium mb-4">150+</h3>
                  <p className="text-2xl md:text-2xl lg:text-4xl text-gray-400">
                    Happy partners and clients
                  </p>
                </div>

                <div>
                  <h3 className="text-6xl md:text-6xl lg:text-7xl font-medium mb-4">7+</h3>
                  <p className="text-2xl md:text-2xl lg:text-4xl text-gray-400">
                    Years in the business
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>



          {/* LOGO SLIDER */}
        <div className="overflow-hidden py-6 px-2 sm:px-4 md:px-20">
          {/* SLIDER KIRI */}
          <div className="flex gap-0 whitespace-nowrap animate-scroll-left">
            {[
              "BNS.png",
              "cook.png",
              "dipadira.png",
              "dispenal.png",
              "drivetruepark.png",
              "erha.png",
              "humas polri.png",
              "jawatimur.png",
              "JTP3.png",
              "JTP_Group_Logo.png",
            ].map((logo, i) => (
              <div
                key={i}
                className="w-32 h-24 sm:w-40 sm:h-32 md:w-60 md:h-50 flex items-center justify-center border border-black/5 
                          bg-white/5 hover:bg-black/5 transition flex-shrink-0"
              >
                <img src={`/assetclient/${logo}`} alt={logo} className="w-24 sm:w-32 md:w-42 h-auto opacity-90" />
              </div>
            ))}
            {/* Duplicate untuk infinite loop */}
            {[
              "BNS.png",
              "cook.png",
              "dipadira.png",
              "dispenal.png",
              "drivetruepark.png",
              "erha.png",
              "humas polri.png",
              "jawatimur.png",
              "JTP3.png",
              "JTP_Group_Logo.png",
            ].map((logo, i) => (
              <div
                key={i + 100}
                className="w-32 h-24 sm:w-40 sm:h-32 md:w-60 md:h-50 flex items-center justify-center border border-black/5 
                          bg-white/5 hover:bg-black/5 transition flex-shrink-0"
              >
                <img src={`/assetclient/${logo}`} alt={logo} className="w-24 sm:w-32 md:w-42 h-auto opacity-90" />
              </div>
            ))}
          </div>

          {/* SLIDER KANAN */}
          <div className="flex gap-0 whitespace-nowrap animate-scroll-right mt-">
            {[
              "Klubbunga.png",
              "KOTA PONYI.png",
              "Lambang_Universitas_Tanjungpura.png",
              "MDanimation.png",
              "millenialglowgarden.png",
              "mpic.png",
              "museum10nov.png",
              "museumangkut.png",
              "mzi.png",

            ].map((logo, i) => (
              <div
                key={i + 200}
                className="w-32 h-24 sm:w-40 sm:h-32 md:w-60 md:h-50 flex items-center justify-center border border-black/5 
                          bg-white/5 hover:bg-black/5 transition flex-shrink-0"
              >
                <img src={`/assetclient/${logo}`} alt={logo} className="w-24 sm:w-32 md:w-42 h-auto opacity-90" />
              </div>
            ))}
            {/* Duplicate untuk infinite loop */}
            {[
              "Klubbunga.png",
              "KOTA PONYI.png",

              "Lambang_Universitas_Tanjungpura.png",
              "MDanimation.png",
              "millenialglowgarden.png",
              "mpic.png",
              "museum10nov.png",
              "museumangkut.png",
              "mzi.png",
            ].map((logo, i) => (
              <div
                key={i + 300}
                className="w-32 h-24 sm:w-40 sm:h-32 md:w-60 md:h-50 flex items-center justify-center border border-black/5 
                          bg-white/5 hover:bg-black/5 transition flex-shrink-0"
              >
                <img src={`/assetclient/${logo}`} alt={logo} className="w-24 sm:w-32 md:w-42 h-auto opacity-90" />
              </div>
            ))}
          </div>

        {/* SLIDER KIRI */}
          <div className="flex gap-0 whitespace-nowrap animate-scroll-left">
            {[
              "pertamina.png",
              "PFN.png",
              "PUPR.png",
              "resersenarkobajatim.png",
              "SEVEN.png",
              "SIBAKUL.png",
              "smk2singosari.png",
              "TELKOM.png",
              "thebagong.png",

            ].map((logo, i) => (
              <div
                key={i}
                className="w-32 h-24 sm:w-40 sm:h-32 md:w-60 md:h-50 flex items-center justify-center border border-black/5 
                          bg-white/5 hover:bg-black/5 transition flex-shrink-0"
              >
                <img src={`/assetclient/${logo}`} alt={logo} className="w-24 sm:w-32 md:w-42 h-auto opacity-90" />
              </div>
            ))}
            {/* Duplicate untuk infinite loop */}
            {[
              "pertamina.png",
              "PFN.png",
              "PUPR.png",
              "resersenarkobajatim.png",
              "SEVEN.png",
              "SIBAKUL.png",
              "smk2singosari.png",
              "TELKOM.png",
              "thebagong.png",

            ].map((logo, i) => (
              <div
                key={i + 100}
                className="w-32 h-24 sm:w-40 sm:h-32 md:w-60 md:h-50 flex items-center justify-center border border-black/5 
                          bg-white/5 hover:bg-black/5 transition flex-shrink-0"
              >
                <img src={`/assetclient/${logo}`} alt={logo} className="w-24 sm:w-32 md:w-42 h-auto opacity-90" />
              </div>
            ))}
          </div>
        </div>

          
        </section>


        {/* SECTION 2 — DARK SECTION */}
        <section className="bg-black text-white py-24 mt-16">
        <div className="w-full px-6 md:px-20 mb-50 ">
         <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

                        {/* KIRI */}
            <div className="md:col-span-3">
              <h2 className="text-xl md:text-4xl font-regular leading-tight ">
                Our Services
              </h2>
            </div>

            {/* KANAN – MOBILE FULL WIDTH */}
            <div className="col-span-1 md:col-span-9 max-w-7xl">
              <h1 className="text-4xl md:text-6xl font-medium leading-tight">
                  Rooted in our expertise in animation and game development, Enggal Studio has evolved into a
                  specialist in new media and experiential visual production. 
                  <br/> <br/>The studio consistently delivers high- quality creative solutions that meet—and often exceed—industry expectations. 
                  <br/><br/>Its capabilities are widely recognized in developing innovative content and immersive productions for tourismattractions and experiential destinations.
                  <br/><br/>In addition, we also provide comprehensive services to support corporate event needs, ensuring impactful visual experiences and seamless creative execution.
              </h1>
            </div>


          </div>
        </div>

          {/* 4 COLUMN SERVICES */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 ">
            <div className="border-t border-b border-white/40 rounded-none p-8 py-20">
              <div>
                <img
                  src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDRuMGdyMmJwcDdvbG82NXlvM3p2c3V6Z3QxY2l5OTE1OHpnZTN3ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/K2vVNKdrmtKOrxQElY/giphy.gif"
                  alt="Background gif"
                  className="w-[300px] h-[300px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] object-cover mb-15"
                />
              </div>
              <h3 className="text-5xl md:text-3xl lg:text-5xl font-medium mb-6 ml-3">Animation</h3>
              <p className="text-2xl text-gray-400  font-regular ml-4">
                Create captivating animations that bring your ideas to life and engage your audience effectively.
              </p>
            </div>

            <div className="border-t border-b border-white/40 md:border-t md:border-b md:border-l md:border-white/40 rounded-none p-8 py-20">
              <div>
                <img
                  src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDRuMGdyMmJwcDdvbG82NXlvM3p2c3V6Z3QxY2l5OTE1OHpnZTN3ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/K2vVNKdrmtKOrxQElY/giphy.gif"
                  alt="Background gif"
                    className="w-[300px] h-[300px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] object-cover mb-15"
                />
              </div>
              <h3 className="text-5xl md:text-3xl lg:text-5xl font-medium mb-6">Interactive Media</h3>
              <p className="text-2xl text-gray-400">
                Design immersive interactive experiences that captivate users and enhance engagement.
              </p>
            </div>

            <div className="border-t border-b border-white/40 md:border md:border-white/40 rounded-none p-8 py-20">
              <div>
                <img
                  src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDRuMGdyMmJwcDdvbG82NXlvM3p2c3V6Z3QxY2l5OTE1OHpnZTN3ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/K2vVNKdrmtKOrxQElY/giphy.gif"
                  alt="Background gif"
                  className="w-[300px] h-[300px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] object-cover mb-15"  
                />
              </div>
              <h3 className="text-5xl md:text-3xl lg:text-5xl font-medium mb-6">Tourism Object Dev</h3>
              <p className="text-2xl text-gray-400  font-regular">
                Develop tourism attractions that combine creativity and strategy to boost visitor satisfaction.
              </p>
            </div>

            
            <div className="border-t border-b border-white/40 rounded-none p-8 py-20">
              <div>
                <img
                  src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDRuMGdyMmJwcDdvbG82NXlvM3p2c3V6Z3QxY2l5OTE1OHpnZTN3ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/K2vVNKdrmtKOrxQElY/giphy.gif"
                  alt="Background gif"
                  className="w-[300px] h-[300px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] object-cover mb-15"
                />
              </div>
              <h3 className="text-5xl md:text-3xl lg:text-5xl font-medium mb-6">Mapping</h3>
              <p className="text-2xl text-gray-400  font-regular">
                Produce accurate, clear, and visually appealing maps to support planning and navigation.
              </p>
            </div>
          </div>
          
          {/* vie all SERVICES */}
          <div className="flex gap-6 px-6 md:px-20 "> 
            <a
              href="/projects"
              className="block w-[1800px] h-[300px] rounded-2xl overflow-hidden shadow-lg relative group"
            >
              {/* Background */}
              <div className="absolute inset-0 bg-black flex items-center justify-center">
                <h3
                  className="
                    relative text-5xl md:text-6xl font-semibold text-white
                    after:block after:h-[3px] after:w-0 after:bg-white 
                    after:transition-all after:duration-300 after:mt-3
                    group-hover:after:w-full
                  "
                >
                View all services <span className="inline-block">›</span>
                </h3>
              </div>
            </a>
          </div>
        </section>
        
       <section className="h-full flex items-center bg-[#f58522] text-white">
     
          <div className="w-full px-6 md:px-20 mt-15">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

              {/* LEFT */}
              <div className="md:col-span-3 space-y-4 ">
                <div className="w-20 h-20 rounded overflow-hidden">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>

                <h3 className="text-2xl font-semibold">{t.name}</h3>

                <p className="text-white text-lg whitespace-pre-line">{t.role}</p>

                <p className="text-2xl font-medium mt-10 mb-10">
                  {testiIndex + 1}/{testimonials.length}
                </p>
              </div>

              {/* RIGHT */}
              <div className="col-span-1 md:col-span-9 max-w-7xl flex flex-col h-full">

                {/* TEXT FIXED HEIGHT */}
                <div className="h-[400px] overflow-hidden flex items-center -mt-15">
                  <p className="text-3xl md:text-3xl lg:text-5xl leading-tight">
                    “{t.text}”
                  </p>
                </div>

                {/* BUTTONS */}
                <div className="flex items-center gap-6 mt-auto pt-10 mb-10 ">
                  <button
                    onClick={prevTesti}
                    className=" w-20 h-20 flex items-center justify-center border border-white rounded-full text-4xl transition-all duration-200 hover:bg-white hover:text-orange-500"
                  >
                    ⮜
                  </button>

                  <button
                    onClick={nextTesti}
                    className="w-20 h-20 flex items-center justify-center border border-white rounded-full text-4xl transition-all duration-200 hover:bg-white hover:text-orange-500"
                  >
                   ⮞
                  </button>
                </div>

              </div>


            </div>
          </div>
        </section>

    <footer className="w-full bg-black text-white py-20 px-6 md:px-20 font-montserrat">
      <div className="w-full px-6 md:px-20 mb-16">
        {/* TOP ROW */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          
          {/* BRAND */}
          <div>
            <Link href="/">
              <img
                src="/assetenggal/logoenggalmain3.png"
                alt="Brand"
                className="w-40 opacity-90 cursor-pointer"
              />
            </Link>
          </div>


          {/* MENU 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-4"></h3>
            <ul className="space-y-2 text-gray-400">

            </ul>
          </div>


          {/* MENU 1 */}
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold mb-4">Studio</h3>
            <ul className="text-2xl space-y-2 text-gray-400">
              <li><a href="/">Home</a></li>
              <li><a href="/specialist">Specialist</a></li>
              <li><a href="/enggals">Enggal Teams</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* MENU 2 */}
          <div>
            <h3 className="text-3xl md:text-4xl  font-semibold mb-4">Company</h3>
            <ul className="text-2xl space-y-2 text-gray-400">
              <li><a href="/blog">Blog</a></li>
              <li><a href="/internship">Internship</a></li>
            </ul>
          </div>

          {/* MENU 3 */}
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold mb-4">Follow Us</h3>
            <ul className="text-2xl space-y-2 text-gray-400">
              <li><a href="https://www.instagram.com/enggal.studio/">Instagram</a></li>
              <li><a href="https://www.youtube.com/@enggalstudio">Youtube</a></li>
              <li><a href="/">Behance</a></li>
            </ul>
          </div>

        </div>

        <hr className="border-white/20 mb-16" />

        {/* ADDRESS ROW */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-16">
          
          {/* LEFT */}
          <div>
            <p className="text-2xl text-gray-300 leading-relaxed ">
              Jl. Simpang Tlk. Grajakan Blok V, No.3<br />
              Pandanwangi, Kec. Blimbing,<br />
              Kota Malang, Indonesia<br />
              65124   
            </p>
            <a
              href="https://maps.app.goo.gl/Q8Y8Hx8gMzXypz5t6"
              className=" text-xl inline-flex items-center gap-2 mt-4 text-white/70 hover:text-white mb-5"
            >
              View on maps →
            </a>
          </div>

          {/* CLUTCH */}
          <div className="text-left md:text-right">
            <p className="text-3xl md:text-xl font-medium">Trusted Creative Media Studio</p>
            <p className="text-2xl md:text-3xl text-gray-400 mt-3">New Media Expert</p>
          </div>

        </div>

        <hr className="border-white/20 mb-10" />

        {/* BOTTOM ROW */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2025 Enggal Studio. All rights reserved.</p>

          <ul className="text-1xl flex gap-6 mt-4 md:mt-0">
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Terms & Conditions</a></li>
          </ul>
        </div>

      </div>
    </footer>



    </div>
  );
}
                                                                                                                                                                                                                                                                                                                                                                                       