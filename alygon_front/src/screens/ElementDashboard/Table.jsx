import { useEffect, useState } from "react";
import "./table.css";
import axios from 'axios';

const Table = () => {

  const [pesquisa, setPesquisa] = useState("");
  const [resCliente, setResCliente] = useState(null);
  const [erro, setErro] = useState(null);

  const [cliente, setCliente] = useState([
    { id: 001, nome: "Alysson", profissao: "Analista de Sistemas"},
    { id: 002, nome: "João", profissao: "Analista de Testes"},
    { id: 003, nome: "Maria", profissao: "Analista de Recursos Humanos"},
  ]);

  const mudancaCampoPesquisa = (nomeCliente) => {
    setPesquisa(nomeCliente.target.value);
  };

  const consultaCliente = cliente.filter((row) => {
    const pesqNome = pesquisa.split(",");
    return pesqNome.some(nome => row.nome.toLowerCase().includes(nome.toLowerCase()));
});

  const adicionaCliente = () => {

    const [cadNome, profissao]  = pesquisa.split(",");

    axios.post('https://reqres.in/api/users', {
      name: cadNome,
      job: profissao
    })
    .then(res => setResCliente(res.data))
    .catch(error => setErro(error.message));
  };

  useEffect(() => {
    if (resCliente) {
      const novoCliente = {
        id: resCliente.id,
        nome: resCliente.name,
        profissao: resCliente.job
      };
      setCliente([...cliente, novoCliente]);
      setResCliente(null); 
      setErro(null); 
    }
  }, [resCliente]);

   return (
    <div className="table-container">
      <div className="table-controls">
        <input
          type="text"
          placeholder="Pesquise por Nome"
          value={pesquisa}
          onChange={mudancaCampoPesquisa}
        />
        <button onClick={adicionaCliente}>Cadastrar</button>
      </div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Profissão</th>
          </tr>
        </thead>
        <tbody>
          {consultaCliente.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.nome}</td>
              <td>{row.profissao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;