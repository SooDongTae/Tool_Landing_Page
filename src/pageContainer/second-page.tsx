export const SecondPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[70%] h-[85%] flex-col">
        <div className="w-full h-1/2 flex justify-between md:flex-col lg:flex-row">
          <div className="second-infobox text-6xl" data-aos="fade-right">
            <div className="media-linebreak">공동구매,</div>
            <div className="media-linebreak">참여부터 결제까지</div>
            <div className="media-linebreak">안전하게</div>
          </div>
          <div data-aos="fade-right" className="second-imgbox">HIHI</div>
        </div>
        <div className="w-full  h-1/2 flex justify-between md:flex-col-reverse lg:flex-row">
          <div data-aos="fade-left" className="second-imgbox">HIHI</div>
          <div className="second-infobox text-[1.6rem]" data-aos="fade-left">
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
