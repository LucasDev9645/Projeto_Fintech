import resumo from "../assets/resumo.svg";
import vendas from "../assets/vendas.svg";
import contato from "../assets/contato.svg";
import sair from "../assets/sair.svg";
import configuracoes from "../assets/configuracoes.svg";
import webhooks from "../assets/webhooks.svg";
import FintechSVG from "../assets/FintechSVG";

const Sidenav = () => {
  return (
    <nav className="sidenav box bg-3">
      <FintechSVG title="Logo fintech" />
      <ul>
        <li>
          <span>
            <img src={resumo} alt="" />
          </span>
          <a href="#">Resumo</a>
        </li>
        <li>
          <span>
            <img src={vendas} alt="" />
          </span>
          <a href="#">Vendas</a>
        </li>
        <li>
          <span>
            <img src={webhooks} alt="" />
          </span>
          <a href="#">Webhooks</a>
        </li>
        <li>
          <span>
            <img src={configuracoes} alt="" />
          </span>
          <a href="#">Configurações</a>
        </li>
        <li>
          <span>
            <img src={contato} alt="" />
          </span>
          <a href="#">Contato</a>
        </li>
        <li>
          <span>
            <img src={sair} alt="" />
          </span>
          <a href="#">Sair</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
