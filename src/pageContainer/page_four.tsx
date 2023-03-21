import Image from "next/image";
import React from "react";
import partImg from "../../public/assets/images/partImg.png";

const page_four = () => {
  return (
    <div className="w-full h-screen bg-bgBlue flex justify-center items-center">
      <div className="w-[70%] h-[70%] flex flex-col items-center justify-start">
        <div className="w-full h-[10%] flex flex-row items-center justify-end">
          <Image src={partImg} alt="" />
          <span className="text-green text-2xl ml-[2%] cursor-pointer mr-[11%]">
            참여하기
          </span>
        </div>
        <div className="w-full h-[52%] flex flex-row items-center mt-[3%]">
          <div className="w-[45%] h-full bg-[white] shadow-[0px_4px_30px_rgba(0,_0,_0,_0.25)]"></div>
          <div className="w-[45%] h-3/4 flex flex-col items-end justify-between">
            <h2 className="text-4xl">
              빠른 공동구매 참여로,
              <br />
              공동구매에 편리함을
            </h2>
            <p className="text-2xl text-textGray">
              사고싶은 물건이 있다면,
              <br />
              Tool에서 사람들을 찾아보세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page_four;
