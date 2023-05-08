import { useEffect } from "react";

export const FirstPage = () => {
  return (
    <div className="md:h-full lg:h-screen w-screen bg-bgBlue flex items-center flex-col">
      <div className="w-full h-2/5 flex flex-col justify-center items-center md:pt-20">
        <div data-aos="fade-down" className="text-5xl font-semibold ">
          여럿이 함께 만들어나가는 플랫폼
        </div>
        <div className="text-textGray mt-8 text-2xl">
          사용자가 원하는 물건을 쉽게 구매 할 수 있도록<br></br>Tool은 사용자가
          원하는 플랫폼을 제공합니다.
        </div>
      </div>
      <div className="w-[70%] h-full grid md:grid-cols-1 md:pb-20 lg:grid-cols-3 gap-[3rem] ">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="bg-[white] shadow-[0px_4px_30px_rgba(0,_0,_0,_0.25)] flex flex-col items-center rounded-[10px]"
        >
          <img
            src="handshake.png"
            className="w-[15rem] h-[15rem] object-contain"
          />
          <div className="text-[1.4rem] text-center text-green">
            쉽고 빠른 공동구매 참여
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="250"
          className="bg-[white] shadow-[0px_4px_30px_rgba(0,_0,_0,_0.25)] flex flex-col items-center rounded-[10px]"
        >
          <img src="earth.png" className="w-[15rem] h-[15rem] object-contain" />
          <div className="text-[1.4rem] text-center text-green">
            같은 학교에서 사기 걱정 없이
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="bg-[white] shadow-[0px_4px_30px_rgba(0,_0,_0,_0.25)] flex flex-col items-center rounded-[10px]"
        >
          <img
            src="handshake.png"
            className="w-[15rem] h-[15rem] object-contain"
          />
          <div className="text-[1.4rem] text-center text-green">
            hihiihihidd
          </div>
        </div>
      </div>
    </div>
  );
};
