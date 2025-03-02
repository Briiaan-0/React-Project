import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Mi Aplicación. Todos los derechos reservados.</p>
      </div>
      <ul className="social-links">
        <li>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
