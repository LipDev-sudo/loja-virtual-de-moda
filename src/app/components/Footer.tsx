import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__brand">
        <Link className="wordmark wordmark--footer" to="/">
          Trama Clara
        </Link>
        <p>Menos peças. Mais combinações.</p>
      </div>
      <div className="site-footer__links">
        <div>
          <h2>Explorar</h2>
          <Link to="/catalogo">Cápsula</Link>
          <Link to="/#combinacoes">Combinações</Link>
          <Link to="/carrinho">Sacola</Link>
        </div>
        <div>
          <h2>Projeto</h2>
          <Link to="/#sobre-demo">Sobre a demo</Link>
          <a href="https://github.com/LipDev-sudo/loja-virtual-de-moda" target="_blank" rel="noreferrer">
            Código no GitHub
          </a>
        </div>
      </div>
      <p className="site-footer__note">
        Demonstração fictícia de produto. Compras, pagamentos e dados não são processados.
      </p>
    </footer>
  );
}
