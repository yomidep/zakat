import { styles } from "@/app/styles";

const Hero = () => {
  return (
    <section className={`w-full mx-auto mt-32 `}>
      <div
        className={` inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="bg-pink-300 w-full">
          <h1 className={`${styles.heroHeadText} text-gray-500`}>
            Hi, I&apos;m <span className="text-[#915EFF]">ZEKAAT</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
