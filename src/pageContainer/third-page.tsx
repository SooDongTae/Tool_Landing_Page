import Image from "next/image";
import React from "react";
import createImg from "../../public/assets/images/createImg.png";

const Page_three = () => {
  return (
    <div className="h-screen bg-bgBlue flex flex-col items-center">
      <h1
        className="w-[70%] text-black text-[1.8rem] md:text-4xl lg:text-5xl pt-12 font-bold"
        data-aos="fade-down"
      >
        쉽고 빠르게
        <br /> 등록부터 참여까지
        <br /> 이런 <span className="text-green">공동구매</span> 해보셨나요?
      </h1>
      <div className="w-[70%] h-[70%] flex flex-col items-center justify-start">
        <div className="w-full h-[52%] flex flex-col md:flex-row items-center justify-between mt-[3%]">
          <img
            src="create.png"
            data-aos="fade-left"
            className="w-full md:w-[45%]  bg-[white] shadow-[0px_4px_30px_rgba(0,_0,_0,_0.25)]"
          ></img>
          <div
            className="w-full md:w-[45%] h-3/4 flex flex-col items-center justify-center"
            data-aos="fade-left"
          >
            <h2 className="w-full text-center md:text-left whitespace-nowrap text-[2rem]">
              쉬운 공동구매 등록으로,
              <br />
              사람들을 모집할 수 있어요
            </h2>
            <p className="w-full text-center md:text-left whitespace-nowrap text-[1.5rem]  text-textGray">
              사고싶은 물건이 있다면,
              <br />
              Tool에서 사람들을 찾아보세요.
            </p>
          </div>
        </div>
        <div className="w-full h-[52%] flex flex-col-reverse md:flex-row items-center justify-between mt-[3%]">
          <div
            className="w-full md:w-[45%] h-3/4 flex flex-col items-center justify-center"
            data-aos="fade-right"
          >
            <h2 className="w-full text-center md:text-left whitespace-nowrap text-[2rem]">
              빠른 공동구매 참여로,
              <br />
              공동구매에 편리함을
            </h2>
            <p className="w-full text-center md:text-left whitespace-nowrap text-[1.5rem]  text-textGray">
              사고싶은 물건이 있다면,
              <br />
              Tool과 함께 공동구매에 참여하세요.
            </p>
          </div>
          <img
            src="join.jpeg"
            data-aos="fade-right"
            className="w-full md:w-[45%]  bg-[white] shadow-[0px_4px_30px_rgba(0,_0,_0,_0.25)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Page_three;
