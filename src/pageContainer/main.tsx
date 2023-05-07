export const Main = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center relative">
      <div
        data-aos="fade-down"
        data-aos-once="true"
        className="text-center text-6xl font-bold leading-[4rem] tracking-wider"
      >
        공동구매의 모든것,<br></br>
        <span className="text-green">Tool</span>에서 쉽고 간편하게
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-once="true"
        className="w-[3rem] h-[5rem] border-[3px] border-solid border-[#333] rounded-[60px] absolute top-[80%] before:content-[''] before:w-[.8rem] before:h-[.8rem] before:absolute before:top-[1rem] before:left-1/2 before:translate-x-[-50%] before:bg-[#333] before:rounded-[50%] before:opacity-100 before:animate-wheel"
      ></div>
    </div>
  );
};
