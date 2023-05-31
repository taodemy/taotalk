export const FooterCopyright = `©${new Date().getFullYear()} TaoTalk. Project for TaoTalk.`;

const Footer = () => {
  return <div className="centre height-footer padding-footer gap-10">{FooterCopyright}</div>;
};

export default Footer;
