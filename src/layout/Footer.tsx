export const FooterCopyright = `©${new Date().getFullYear()} TaoTalk. Project for TaoTalk.`;

const Footer = () => {
  return (
    <div className="centre height-160 padding-y-40 padding-x-370 gap-10">{FooterCopyright}</div>
  );
};

export default Footer;
