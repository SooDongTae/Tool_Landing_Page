export const SecondPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[70%] h-[90%] flex flex-row items-end justify-between">
        <div className="w-[45%] h-full">
          <span className="w-full h-1/2 text-6xl font-bold tracking-wide leading-[3.5rem] flex flex-col justify-around">
            공동구매,
            <br />
            구매부터 참여까지
            <br />
            안전하게
          </span>
          <img
            src="https://www.shutterstock.com/image-vector/sample-red-square-grunge-stamp-260nw-338250266.jpg"
            className="border-2 shadow-[0px_4px_30px_rgba(0,_0,_0,_0.25)]"
          />
        </div>
        <div className="w-[45%] h-4/5">
          <img
            src="https://www.shutterstock.com/image-vector/sample-red-square-grunge-stamp-260nw-338250266.jpg"
            className="border-2 shadow-[0px_4px_30px_rgba(0,_0,_0,_0.25)]"
          />
          <span className="w-full h-1/2 text-3xl font-bold tracking-wide flex flex-col justify-around">
            Tool에서 공동구매에 참여해 보세요.
            <br />
            파티 채팅을 통해서 대화할 수 있어요.
          </span>
        </div>
      </div>
    </div>
  );
};
