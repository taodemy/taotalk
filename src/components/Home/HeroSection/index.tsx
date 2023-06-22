import Button from '../../Shared/Buttons';
import Styles from './Hero.module.scss';
const Hero = () => {
  return (
    <article className={Styles.heroSection}>
      <section>
        <p className={`paragraph--p2 ${Styles.hero__subheading}`}>AI-powered chatting PLATFORM</p>
        <h1 className="heading--h1">Learning and teaching online, made easy.</h1>
        <p className={`paragraph--p1 ${Styles.hero__content}`}>
          Practice your English and learn new things with the platform.
        </p>
        <Button color="cyanLight" label="About Platform" />

        <div className={Styles.hero__figure}>
          <div className={Styles.hero__figure_left}>
            <div>
              <img src="/heroLightening.svg" alt="heroLightening icon" />
              <h3 className={`heading--h3 ${Styles.hero__figure_heading}`}>
                600<span>+</span>
              </h3>
            </div>
            <p className="paragraph--p2">Popular words</p>
          </div>

          <div className={Styles.divider}></div>

          <div className={Styles.hero__figure_right}>
            <div>
              <img src="/heroGame.svg" alt="heroGame icon" />
              <h3 className={`heading--h3 ${Styles.hero__figure_heading}`}>
                2<span>+</span>
              </h3>
            </div>
            <p className="paragraph--p2">Mini-games</p>
          </div>
        </div>
      </section>
      <img src="/heroBoy.svg" alt="heroBoy image" />
    </article>
  );
};

export default Hero;
