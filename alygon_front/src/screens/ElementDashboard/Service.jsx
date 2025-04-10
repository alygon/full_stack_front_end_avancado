import { useState } from "react";
import "./table.css";

const Service = () => {

    const [cotacao, setCotacao] = useState([]);
    const [pesquisa, setPesquisa] = useState('');
    const [loading, setLoading] = useState(false);
    const [mensagem, setMensagem] = useState('');

    const formatarData = (data) => {
        const [ano, mes, dia] = data.split('-');
        return `${mes}-${dia}-${ano}`; // MM-DD-YYYY
    };

    const getList = async () => {
        if (!pesquisa) {
            setMensagem("Por favor, selecione uma data.");
            setCotacao([]);
            return;
        }

        setLoading(true);
        setMensagem('');
        setCotacao([]);

        const dataFormatada = formatarData(pesquisa);

        try {
            const response = await fetch(
                `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${dataFormatada}'&$top=100&$format=json`
            );
            const result = await response.json();

            if (result.value && result.value.length > 0) {
                setCotacao(result.value);
            } else {
                setMensagem("Nenhuma cotação encontrada para a data selecionada.");
            }
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
            setMensagem("Erro ao buscar dados. Tente novamente mais tarde.");
        } finally {
            setLoading(false);
        }
    };

  return (
    <div className="table-container">
        
        <div className="table-controls">
            <input
                className="input-pesquisa"
                type="date"
                placeholder="Pesquise por data"
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
            />
            <button onClick={getList}>Buscar</button>
        </div>
        
        {loading && <p className='alerta'>Carregando dados...</p>}
        {mensagem && <p className='alerta'>{mensagem}</p>}

        {!loading && cotacao.length > 0 && (
            
            <table className="styled-table">
                <thead>
                    <tr>
                    <th>Cotação de Compra</th>
                    <th>Cotação de Venda</th>
                    <th>Data e hora da Cotação</th>
                    </tr>
                </thead>
                <tbody>
                    {cotacao.map((row, index) => (
                        <tr key={index}>
                            <td>{row.cotacaoCompra}</td>
                            <td>{row.cotacaoVenda}</td>
                            <td>{row.dataHoraCotacao}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </div>
    );
};

export default Service;