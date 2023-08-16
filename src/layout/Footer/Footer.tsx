export const FooterCopyright = `©${new Date().getFullYear()} TaoTalk. Project for TaoTalk.`;

const Footer = () => {
  return (
    <>
      <div className="mx-auto flex flex-col lg:max-w-[1180px] lg:flex-row">
        <ul className="flex flex-col items-center lg:flex-row">
          <li>
            <a title="Home" href="/" className="p2 py-4 hover:text-black lg:py-0 lg:pr-[30px]">
              Home
            </a>
          </li>
          <li>
            <a
              title="Textbook"
              href="/textbook"
              className="p2 py-4 hover:text-black lg:py-0 lg:pr-[30px]"
            >
              Textbook
            </a>
          </li>
          <li>
            <a
              title="Statistics"
              href="/statistics-content"
              className="p2 py-4 hover:text-black lg:py-0 lg:pr-[30px]"
            >
              Statistics
            </a>
          </li>
          <li>
            <a
              title="Statistics"
              href="/sprint-summary"
              className="p2 py-4 hover:text-black lg:py-0 lg:pr-[30px]"
            >
              Sprint
            </a>
          </li>
          <li>
            <a
              title="Statistics"
              href="/audiocall-summary"
              className="p2 py-4 hover:text-black lg:py-0 lg:pr-[30px]"
            >
              Audio-call
            </a>
          </li>
        </ul>
        <ul className="my-4 flex flex-col items-center lg:ml-auto lg:flex-row">
          <li>
            <a className="p2 py-4 lg:py-0 lg:pr-[30px]">Jason</a>
          </li>
          <li>
            <a className="p2 py-4 lg:py-0 lg:pr-[30px]">Lulu</a>
          </li>
          <li>
            <a className="p2 py-4 lg:py-0">Eric</a>
          </li>
        </ul>
      </div>
      <div className="mx-auto flex max-w-[1180px] flex-col border-t-[1.2px] border-tk_greyMedium lg:mx-auto lg:flex-row lg:pb-[41px] lg:pt-[21px]">
        <div className="mx-auto mt-[36px] flex gap-[30px] lg:mx-0 lg:mt-0">
          <img src="./github.svg" />
          <img src="./GT.svg" />
          <img src="./youtube.svg" />
        </div>
        <span className="p4 mx-auto py-4 lg:ml-auto lg:mr-0 lg:py-0">{FooterCopyright}</span>
      </div>
    </>
  );
};

export default Footer;
