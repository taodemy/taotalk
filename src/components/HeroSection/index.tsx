import Button from '../Shared/Buttons';
const Hero = () => {
  return (
    <section className="heroSection">
      <div>
        <p className="paragraph--p2 hero__subheading">AI-powered chatting PLATFORM</p>
        <h1 className="heading--h1">Learning and teaching online, made easy.</h1>
        <p className="paragraph--p1">
          Practice your English and learn new things with the platform.
        </p>
        <Button color="light" label="About Platform" />
        <div className="hero__figure">
          <div className="hero__figure_left">
            <h3 className="heading--h3">
              <img src="/heroLightening.svg" alt="" />
              600<span>+</span>
            </h3>

            <p className="paragraph--p2">Popular words</p>
          </div>
          <div className="divider"></div>
          <div className="hero__figure_right">
            <h3 className="heading--h3">
              <img src="/heroGame.svg" alt="" />2<span>+</span>
            </h3>
            <p className="paragraph--p2">Mini-games</p>
          </div>
        </div>
      </div>
      <img src="/heroBoy.svg" alt="" />
    </section>
  );
};

export default Hero;
