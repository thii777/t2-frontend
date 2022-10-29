import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function BasicFooter(props) {
  const logo = "/images/logo.png";
  return (
    <div className="footer-container">
      <div className="footer-medias">
        {/* <div className="footer-logo">
          <p>T2</p>
        </div> */}
        <div className="footer-sub-title">
          <p>Credito digital 100% seguro</p>
        </div>
        <div className="footer-social-media" className="display-flex">
          <InstagramIcon sx={{ color: "#FFF" }} />
          <FacebookIcon sx={{ color: "#FFF" }} />
          <WhatsAppIcon sx={{ color: "#FFF" }} />
        </div>
      </div>
      <div className="footer-company-message padding-1020">
        <p>
          fact that a reader will be distracted by the readable content of a
          page when looking at its layout. The point of using Lorem Ipsum is
          that it has a more-or-less normal distribution of letters, as opposed
          to using 'Content here, content here', making it look like readable
          English.
        </p>

        <p>
          T2 Creditos, CNPJ 00.000.000/0001-00, Avenida Louraci Della Nina
          Tavares, 80, Mogilar, Mogi das Cruzes, SP, CEP: 08773-650
        </p>
      </div>
    </div>
  );
}
