import Button from '../../Shared/Buttons';
const Hero = () => {
  return (
    <article className="bg-tk_greyLight">
      <section className="sm:px-2 sm:pt-4 md:px-[32px] md:py-0 lg:pl-[calc(370px-(1920px-100%)*0.5)] lg:pr-[calc(117px-(1920px-100%)*0.5)]">
        <div className="grid lg:grid-cols-[531px_minmax(900px,auto)] lg:overflow-hidden">
          <div className="sm:mx-auto sm:flex sm:flex-col md:w-full lg:block lg:pt-[95px]">
            <p className="p2 text-tk_cyanDark sm:pb-[24px] sm:pt-[40px] sm:text-center sm:text-[12px] md:pt-[97px] lg:pb-[24px] lg:pt-0 lg:text-left lg:font-bold lg:uppercase lg:leading-[1rem] lg:tracking-[0.14em]">
              AI-powered chatting PLATFORM
            </p>
            <h1 className="sm:mx-auto sm:text-center sm:text-[32px] md:max-w-[480px] md:text-[56px] lg:ml-0 lg:text-left">
              Learning and teaching online, made easy.
            </h1>
            <p className="p1 sm:mx-auto sm:w-[304px] sm:pb-[32px] sm:pt-[30px] sm:text-center sm:text-[14px] md:w-[528px] md:text-[18px] lg:ml-0 lg:w-[397px] lg:text-left">
              Practice your English and learn new things with the platform.
            </p>
            <Button outline={false} color="cyanLight" label="About Platform" />
            <div className="mx-auto flex sm:py-[40px] md:pb-[97px] lg:pt-[49px]">
              <div className="sm:pr-[16px] md:pr-[49px]">
                <div className="flex">
                  <img src="/heroLightening.svg" alt="heroLightening icon" className="pr-[10px]" />
                  <h3 className="text-[40px] tracking-[-0.02em]">
                    600<span className="text-tk_cyanDark">+</span>
                  </h3>
                </div>
                <p className="p2 px-[3px] py-[3px] text-center text-tk_zambezi">Popular words</p>
              </div>
              <div className="h-[48.78px] w-[1.22px] bg-tk_greyMedium"></div>
              <div className="sm:pl-[16px] md:pl-[49px]">
                <div className="flex">
                  <img src="/heroGame.svg" alt="heroGame icon" className="pr-[13px]" />
                  <h3 className="text-[40px] tracking-[-0.02em]">
                    2<span className="text-tk_cyanDark">+</span>
                  </h3>
                </div>
                <p className="p2 px-[3px] py-[3px] text-center text-tk_zambezi">Mini-games</p>
              </div>
            </div>
          </div>
          <div className="lg:w-[933px] lg:pb-[30px] lg:pt-[109px]">
            <img src="/heroBoy.svg" alt="heroBoy image" className="lg:h-[601px] lg:w-full" />
          </div>
        </div>
      </section>
    </article>
  );
};

export default Hero;
