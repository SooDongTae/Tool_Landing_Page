import { useEffect } from "react";

export const FirstPage = () => {
  return (
    <div className="w-full h-screen bg-bgBlue flex items-center flex-col">
      <div className="w-full h-2/5 flex flex-col justify-center items-center">
        <div data-aos="fade-down" className="text-5xl font-semibold ">
          여럿이 함께 만들어나가는 플랫폼
        </div>
        <div className="text-textGray mt-8 text-2xl">
          사용자가 원하는 물건을 쉽게 구매 할 수 있도록<br></br>Tool은 사용자가
          원하는 플랫폼을 제공합니다.
        </div>
      </div>
      <div className="w-[70%] h-[50%] grid lg:grid-cols-3 gap-[3rem] md:grid-cols-1 ">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="bg-[white] shadow-[0px_4px_30px_rgba(0,_0,_0,_0.25)]"
        ></div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="bg-[white] shadow-[0px_4px_30px_rgba(0,_0,_0,_0.25)]"
        ></div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="bg-[white] shadow-[0px_4px_30px_rgba(0,_0,_0,_0.25)]"
        ></div>
      </div>
    </div>
  );
};
