import { useState } from "react";
import "./App.css";

const ListaDeTarefas = (props: any) => {
  return (
    <>
      <h4>Tarefas como lista de objetos</h4>
      <ul>
        {
          props.dados.map((item: any) => {
            return <ItemTarefa key={item.id} titulo={item.titulo} />
          })
        }
      </ul>
    </>
  );
}

const ItemTarefa = (props: any) => {
  return (<li>{props.titulo}</li>);
}

const App = () => {
  const [tarefa, setTarefa] = useState("digite uma tarefa");

  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      titulo: "criar interface react",
      concluido: false,
    },
    {
      id: 2,
      titulo: "conectar a uma  api",
      concluido: false,
    },
    {
      id: 3,
      titulo: "aprender sobre autenticação",
      concluido: false,
    },
  ]);

  const escutarCliqueBotao = () => {
    console.log("clicou");
    console.info(tarefa);
    const objeto = {
      id: tarefas.length + 1,
      titulo: tarefa,
      concluido: false,
    }
    console.info(objeto);
    // tarefas.push(objeto);
    setTarefas([
      ...tarefas,
      objeto
    ]);
  }
  const escutarModificacaoTexto = (evento: any) => {
    setTarefa(evento.target.value);
  }

  return (
    <div className="aplicacao">
      <h1>Infoweb - React</h1>
      <div>
        <label htmlFor="tarefa">Informe a nova tarefa: </label>
        <input type="text" id="tarefa" value={tarefa} onChange={escutarModificacaoTexto} />
        <button onClick={escutarCliqueBotao}>Criar nova tarefa</button>
      </div>
      <ListaDeTarefas dados={tarefas}/>
    </div>
  );
}

export default App;
