export const SecondPage = () => {
  return (
    <div className="full-screen flex justify-center items-center">
      <div className="w-[70%] h-[85%] flex-col">
        <div className="w-full h-1/2 flex justify-between sm:flex-col lg:flex-row">
          <div className="second-infobox text-6xl">
            <div className="media-linebreak">공동구매,</div>
            <div className="media-linebreak">참여부터 결제까지</div>
            <div className="media-linebreak">안전하게</div>
          </div>
          <div className="second-imgbox"></div>
        </div>
        <div className="w-full  h-1/2 flex justify-between sm:flex-col-reverse lg:flex-row">
          <div className="second-imgbox"></div>
          <div className="second-infobox text-[1.6rem]">
            <div className="media-linebreak">
              Tool에서 공동구매에 참여해 보세요.
            </div>
            <div className="media-linebreak">
              파티 채팅을 통해서 대화할 수 있어요.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
