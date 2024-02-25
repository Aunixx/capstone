import footerLogo from "../assets/images/footerlog.png";

const Footer = () => {
  return (
    <footer>
      <div class="footer-column logo-column">
        <img src={footerLogo} alt="footer logo" />
      </div>
      <div class="footer-column copyright-column">
        <p class="copyright">Copyright Little Lemon</p>
      </div>
    </footer>
  );
};

export default Footer;
