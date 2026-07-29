"use client";

import {
  motion,
  animate,
  useInView,
} from "framer-motion";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ArrowRight,
  Hammer,
  CheckCircle,
  Building2,
  ShieldCheck,
  Clock3,
} from "lucide-react";


function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
  });

  const [count, setCount] = useState(0);


  useEffect(() => {

    if (!isInView) return;


    const controls = animate(0, value, {

      duration: 2,

      ease: "easeOut",

      onUpdate(latest) {

        setCount(Math.floor(latest));

      },

    });


    return () => controls.stop();


  }, [isInView, value]);


  return (

    <span ref={ref}>

      {count}
      {suffix}

    </span>

  );

}



const stats = [

  {
    value: 2,
    suffix: "+",
    label: "Years In Business",
  },

  {
    value: 10,
    suffix: "+",
    label: "Projects Completed",
  },

  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
  },

  {
    value: 24,
    suffix: "/7",
    label: "Support Available",
  },

];



export default function Hero() {


  return (

    <section

      id="home"

      className="
        relative
        min-h-screen
        pt-24
        md:pt-28
        flex
        items-center
        overflow-hidden
      "

    >


      {/* ================= BACKGROUND ================= */}


      <div className="absolute inset-0">


        <img

          src="/images/logo.jpg"

          alt="Permacon Enterprises construction"

          className="
            w-full
            h-full
            object-cover
          "

        />


        <div

          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#050816]/95
            via-[#050816]/80
            to-[#050816]/50
          "

        />


      </div>



      {/* ================= GLOW EFFECTS ================= */}


      <div

        className="
          absolute
          -top-40
          -left-40
          w-[500px]
          h-[500px]
          rounded-full
          bg-blue-600/20
          blur-[180px]
        "

      />


      <div

        className="
          absolute
          bottom-0
          right-0
          w-[400px]
          h-[400px]
          rounded-full
          bg-cyan-500/20
          blur-[160px]
        "

      />



      {/* ================= CONTENT ================= */}


      <div

        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          lg:px-8
          w-full
        "

      >


        <div

          className="
            grid
            lg:grid-cols-2
            gap-14
            items-center
          "

        >



          {/* ================= LEFT CONTENT ================= */}


          <motion.div

            initial={{
              opacity:0,
              x:-50,
            }}

            animate={{
              opacity:1,
              x:0,
            }}

            transition={{
              duration:0.8,
            }}

          >


            <motion.h1

              className="
                text-5xl
                md:text-7xl
                font-black
                leading-tight
                text-white
              "

            >


              <span>

                Building Dreams,

              </span>


              <span

                className="
                  block
                  bg-gradient-to-r
                  from-blue-400
                  to-cyan-400
                  bg-clip-text
                  text-transparent
                "

              >

                Building Trust.

              </span>


            </motion.h1>



            <p

              className="
                mt-8
                text-lg
                md:text-xl
                text-gray-300
                leading-relaxed
                max-w-2xl
              "

            >

              Permacon Enterprises delivers exceptional
              construction solutions, renovations,
              residential developments and commercial
              projects through innovation, precision
              and professional craftsmanship.

            </p>



            {/* FEATURES */}

            <div className="mt-10 grid gap-5">


              {[
                {
                  icon: Building2,
                  text:"Residential Construction",
                },

                {
                  icon: Building2,
                  text:"Commercial Construction",
                },

                {
                  icon: ShieldCheck,
                  text:"Quality Guaranteed",
                },

                {
                  icon: Clock3,
                  text:"Projects Delivered On Time",
                },

              ].map((item,index)=>(

                <motion.div

                  key={item.text}

                  initial={{
                    opacity:0,
                    x:-20,
                  }}

                  animate={{
                    opacity:1,
                    x:0,
                  }}

                  transition={{
                    delay:index * 0.12,
                  }}

                  className="
                    flex
                    items-center
                    gap-4
                  "

                >


                  <div

                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-600/20
                    "

                  >

                    <item.icon

                      className="
                        w-5
                        h-5
                        text-blue-400
                      "

                    />

                  </div>


                  <span className="text-gray-200">

                    {item.text}

                  </span>


                </motion.div>


              ))}


            </div>
                        {/* ================= BUTTONS ================= */}


            <div className="mt-14 flex flex-wrap gap-6">


              <motion.a

                href="#projects"

                whileHover={{
                  scale:1.05,
                  y:-4,
                }}

                whileTap={{
                  scale:0.96,
                }}

                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  px-9
                  py-5
                  font-bold
                  text-white
                  shadow-2xl
                  shadow-blue-600/30
                "

              >

                View Projects


                <motion.div

                  animate={{
                    x:[0,5,0],
                  }}

                  transition={{
                    repeat:Infinity,
                    duration:1.5,
                  }}

                >

                  <ArrowRight className="w-5 h-5" />

                </motion.div>


              </motion.a>



              <motion.a

                href="#booking"

                whileHover={{
                  scale:1.05,
                  y:-4,
                }}

                whileTap={{
                  scale:0.96,
                }}

                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/20
                  bg-white/5
                  backdrop-blur-xl
                  px-9
                  py-5
                  font-semibold
                  text-white
                  transition-all
                  hover:border-cyan-400
                  hover:bg-cyan-500/10
                "

              >

                Get Free Quote


              </motion.a>


            </div>



          </motion.div>




          {/* ================= RIGHT SIDE ================= */}



          <motion.div

            initial={{
              opacity:0,
              x:50,
            }}

            animate={{
              opacity:1,
              x:0,
            }}

            transition={{
              duration:0.9,
              delay:0.2,
            }}

            className="
              hidden
              lg:flex
              justify-center
            "

          >


            <div className="relative">


              {/* Glow */}


              <div

                className="
                  absolute
                  -inset-8
                  rounded-[50px]
                  bg-gradient-to-r
                  from-blue-600/30
                  to-cyan-500/20
                  blur-3xl
                "

              />



              {/* Card */}


              <motion.div

                whileHover={{
                  y:-10,
                }}

                transition={{
                  duration:0.4,
                }}

                className="
                  relative
                  w-[430px]
                  rounded-[40px]
                  border
                  border-white/10
                  bg-white/10
                  backdrop-blur-2xl
                  p-10
                  shadow-2xl
                "

              >


                <div

                  className="
                    flex
                    justify-center
                    mb-8
                  "

                >


                  <motion.div

                    animate={{
                      rotate:[0,10,-10,0],
                    }}

                    transition={{
                      duration:5,
                      repeat:Infinity,
                    }}

                    className="
                      flex
                      h-32
                      w-32
                      items-center
                      justify-center
                      rounded-full
                      bg-gradient-to-br
                      from-blue-600
                      to-cyan-400
                      shadow-xl
                      shadow-blue-500/40
                    "

                  >

                    <Hammer

                      className="
                        h-16
                        w-16
                        text-white
                      "

                    />

                  </motion.div>


                </div>



                <h3

                  className="
                    text-center
                    text-3xl
                    font-black
                    text-white
                    mb-10
                  "

                >

                  Why Build With Us?

                </h3>



                <div className="space-y-6">


                  {[
                    "Experienced Professionals",
                    "Modern Construction Methods",
                    "Premium Quality Materials",
                    "Transparent Pricing",
                    "Projects Delivered On Schedule",
                  ].map((item,index)=>(


                    <motion.div

                      key={item}

                      initial={{
                        opacity:0,
                        x:20,
                      }}

                      animate={{
                        opacity:1,
                        x:0,
                      }}

                      transition={{
                        delay:index * 0.15,
                      }}

                      className="
                        flex
                        items-center
                        gap-4
                      "

                    >


                      <CheckCircle

                        className="
                          w-6
                          h-6
                          text-cyan-400
                        "

                      />


                      <span className="text-gray-200">

                        {item}

                      </span>


                    </motion.div>


                  ))}


                </div>



              </motion.div>


            </div>


          </motion.div>
                  </div>



        {/* ================= STATS SECTION ================= */}



        <motion.div

          initial={{
            opacity:0,
            y:40,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          viewport={{
            once:true,
          }}

          transition={{
            duration:0.8,
            delay:0.3,
          }}

          className="
            mt-20
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
          "

        >



          {stats.map((item,index)=>(


            <motion.div

              key={item.label}

              initial={{
                opacity:0,
                scale:0.8,
              }}

              whileInView={{
                opacity:1,
                scale:1,
              }}

              viewport={{
                once:true,
              }}

              transition={{
                delay:index * 0.15,
              }}

              whileHover={{
                y:-8,
              }}

              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
                text-center
                transition-all
                hover:border-cyan-400/40
                hover:shadow-xl
                hover:shadow-cyan-500/10
              "

            >



              <h2

                className="
                  text-5xl
                  font-black
                  bg-gradient-to-r
                  from-blue-400
                  to-cyan-400
                  bg-clip-text
                  text-transparent
                "

              >

                <AnimatedCounter

                  value={item.value}

                  suffix={item.suffix}

                />


              </h2>



              <p

                className="
                  mt-3
                  text-gray-300
                "

              >

                {item.label}


              </p>



            </motion.div>


          ))}



        </motion.div>





        {/* ================= FLOATING DECORATIONS ================= */}



        <motion.div

          animate={{

            rotate:360,

          }}

          transition={{

            duration:30,

            repeat:Infinity,

            ease:"linear",

          }}

          className="
            absolute
            -bottom-32
            -right-32
            h-80
            w-80
            rounded-full
            border
            border-cyan-400/10
          "

        />




        <motion.div

          animate={{

            y:[0,-25,0],

          }}

          transition={{

            duration:6,

            repeat:Infinity,

          }}

          className="
            absolute
            bottom-20
            left-10
            h-40
            w-40
            rounded-full
            bg-blue-500/10
            blur-3xl
          "

        />



      </div>



    </section>


  );


}