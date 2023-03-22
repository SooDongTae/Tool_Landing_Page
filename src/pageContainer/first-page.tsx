export const FirstPage = () => {
  return (
    <div className="w-full h-screen bg-bgBlue flex items-center flex-col">
      <div className="w-full h-2/5 flex flex-col justify-center items-center">
        <div className="text-5xl font-semibold">
          여럿이 함께 만들어나가는 플랫폼
        </div>
        <div className="text-textGray mt-8 text-2xl">
          사용자가 원하는 물건을 쉽게 구매 할 수 있도록<br></br>Tool은 사용자가
          원하는 플랫폼을 제공합니다.
        </div>
      </div>
      <div className="w-[70%] h-[50%] grid grid-cols-3 gap-[3rem] ">
        <div className="bg-[white] shadow-[0px_4px_30px_rgba(0,_0,_0,_0.25)]"></div>
        <div className="bg-[white] shadow-[0px_4px_30px_rgba(0,_0,_0,_0.25)]"></div>
        <div className="bg-[white] shadow-[0px_4px_30px_rgba(0,_0,_0,_0.25)]"></div>
      </div>
    </div>
  );
};
