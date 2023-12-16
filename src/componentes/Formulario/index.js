import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";

function Formulario() {
  return (
    <section className="formulario">
      <form>
        <h2>Prencha os dados para criar o colaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite o seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite o seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
      </form>
    </section>
  );
}

export default Formulario;
