import React from "react";
import "./style.css";

export default function Conteudo () {
    
    return ( 
        <>
            <div className="overlap-group">
                <div className="atividades-semanais">
                    <div className="text-wrapper">Atividades Semanais</div>
                    <img
                    className="grfico"
                    alt="Grfico"
                    src="https://c.animaapp.com/9s25AwX1/img/gr-fico.png"
                    />
                </div>
                <div className="estatisticas-de">
                    <div className="div">Estatísticas de Gastos</div>
                    <img
                    className="img"
                    alt="Grfico"
                    src="https://c.animaapp.com/9s25AwX1/img/gr-fico-1.png"
                    />
                </div>
            </div>
            <div className="transaes-recentes">
                <div className="div">Transações Recentes</div>
                <img
                    className="transaes"
                    alt="Transaes"
                    src="https://c.animaapp.com/9s25AwX1/img/transa--es.png"
                />
            </div>
        </>
    );
};