import { useState } from "react";
import axios from "axios";
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
  const escutarCliqueAcessarAPI = () => {
    console.log("clicou");
    // acesso a API HTTP 
    axios.get("https://jsonplaceholder.typicode.com/todos").then((resposta) => {
      // resposta http
      console.log(resposta);
      // dados json da resposta http
      console.log(resposta.data);
      // conversão dos dados http aos nossos dados da aplicação
      const dados = resposta.data.map((item) => {
        return {
          id: item.id,
          titulo: item.title,
          concluido: item.completed
        };
      });
      console.log(dados);
      // atribuir valor final ao estado
      setTarefas(dados);
    });

  }

  return (
    <div className="aplicacao">
      <h1>Infoweb - React</h1>
      <div>
        <label htmlFor="tarefa">Informe a nova tarefa: </label>
        <input type="text" id="tarefa" value={tarefa} onChange={escutarModificacaoTexto} />
        <button onClick={escutarCliqueBotao}>Criar nova tarefa</button>
      </div>
      <div>
        <button onClick={escutarCliqueAcessarAPI}>Acessar API</button>
      </div>
      <ListaDeTarefas dados={tarefas}/>
    </div>
  );
}

export default App;