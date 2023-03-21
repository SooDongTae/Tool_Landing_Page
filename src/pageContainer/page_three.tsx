import Image from "next/image";
import React from "react";
import createImg from "../../public/assets/images/createImg.png";
import partImg from "../../public/assets/images/partImg.png";

const Page_three = () => {
  return (
    <div className="w-full h-screen bg-bgBlue flex flex-col">
      <h1 className="text-black text-6xl ml-40 pt-32 font-bold">
        쉽고 빠르게
        <br /> 등록부터 참여까지
        <br /> 이런 <span className="text-green">공동구매</span> 해보셨나요?
      </h1>
      <div className="w-[70%] h-[70%] flex flex-col items-center justify-start ml-[15%]">
        <div className="w-full h-[10%] flex flex-row items-center justify-start mt-[5%]">
          <Image src={createImg} alt="" />
          <span className="text-green text-2xl ml-[2%]">등록하기</span>
        </div>
        <div className="w-full h-[50%] flex flex-row items-center mt-[3%]">
          <div className="w-[45%] h-full flex flex-col items-start justify-between">
            <h2 className="text-4xl">
              쉬운 공동구매 등록으로,
              <br />
              사람을 모집 할 수 있어요
            </h2>
            <p className="text-2xl text-textGray">
              사고싶은 물건이 있다면,
              <br />
              Tool과 함께 공동구매에 참여하세요.
            </p>
          </div>
          <div className="w-[45%] h-full bg-[white] shadow-[0px_4px_30px_rgba(0,_0,_0,_0.25)]"></div>
        </div>
      </div>
    </div>
  );
};

export default Page_three;
