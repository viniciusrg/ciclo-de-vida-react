import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
import ListaDeCategorias from "./components/ListaDeCategorias";
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas";
class App extends Component {

  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro categorias={this.categorias} criarNota={this.notas.adicionarNota.bind(this.notas)} />
        <main className="conteudo-princiapal">
          <ListaDeCategorias categorias={this.categorias} adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)} />
          <ListaDeNotas apagarNota={this.notas.apagarNotas.bind(this.notas)} notas={this.notas} />
        </main>
      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;
