import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Menu () {
    
    return ( 
        
        <>
        
        <div className="configuraes">
            <div className="text-wrapper-3">Configurações</div>
            <img
                className="img-2"
                alt="Imagem configuraes"
                src="https://c.animaapp.com/9s25AwX1/img/imagem-configura--es@2x.png" />
        </div>
        
        <div className="servios">
            <Link to = "/servicos">  
            <div className="text-wrapper-2">Serviços</div>
            </Link>
            <img
                className="img-2"
                alt="Imagem serviços"
                src="https://c.animaapp.com/9s25AwX1/img/imagem-servi-os@2x.png" />
        </div>

        <div className="emprstimos">
            <div className="text-wrapper-3">Empréstimos</div>
            <img
                className="img-2"
                alt="Imagem emprestimos"
                src="https://c.animaapp.com/9s25AwX1/img/imagem-emprestimos@2x.png" />
        </div>
            
        <div className="cartes">
            <div className="text-wrapper-3">Cartões</div>
            <img
                className="img-2"
                alt="Imagem cartes"
                src="https://c.animaapp.com/9s25AwX1/img/imagem-cart-es@2x.png" />
        </div>
        
        <div className="investimentos">
                <img
                    className="img-2"
                    alt="Imagem invest"
                    src="https://c.animaapp.com/9s25AwX1/img/imagem-invest@2x.png" />
                <div className="text-wrapper-4">Investimentos</div>
        </div>

        <div className="contas">
                <div className="text-wrapper-3">Contas</div>
                <img
                    className="img-2"
                    alt="Imagem contas"
                    src="https://c.animaapp.com/9s25AwX1/img/imagem-contas@2x.png" />
        </div>

        <div className="clientes">
            <Link to = "/clientes">  
                <div className="text-wrapper-5">Clientes</div>
            </Link>
                <img
                    className="img-2"
                    alt="Imagem clientes"
                    src="https://c.animaapp.com/9s25AwX1/img/imagem-clientes@2x.png" />
        </div>
        
        <div className="dashboard">
            <Link to = "/dashboard">
                <div className="text-wrapper-6">Dashboard</div>
            </Link>
                <img
                    className="imagem-dashboard"
                    alt="Imagem dashboard"
                    src="https://c.animaapp.com/9s25AwX1/img/imagem-dashboard@2x.png" />
        </div>
       
            <div className="retngulo-lateral" />

            <div className="cabealho">

                <div className="cabealho-2">

                    <div className="cabealho-direito">

                        <img
                            className="perfil"
                            alt="Perfil"
                            src="https://c.animaapp.com/9s25AwX1/img/perfil@2x.png" />

                        
                        <div className="notificaes">
                            <img
                                className="img-3"
                                alt="Imagem note"
                                src="https://c.animaapp.com/9s25AwX1/img/imagem-note.svg" />
                        </div>

                        <div className="configurao">
                            <img
                                className="img-3"
                                alt="Imagem config"
                                src="https://c.animaapp.com/9s25AwX1/img/imagem-config.svg" />
                        </div>

                        <div className="pesquisa">
                            <div className="overlap-group-2">
                                <img
                                    className="cone-lupa"
                                    alt="Cone lupa"
                                    src="https://c.animaapp.com/9s25AwX1/img/-cone-lupa.svg" />
                                <div className="texto-caixa-de">Busca Avançada</div>
                            </div>
                        </div>
                        <div className="text-wrapper-7">Dashboard</div>
                    </div>

                    <div className="nome-empresa">Alygon</div>
                    <div className="imagem-pindaba" />
                </div>

                <div className="linha-cabealho" />

            </div>
        </>
    );
};