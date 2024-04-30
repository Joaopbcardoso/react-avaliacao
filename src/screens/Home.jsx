import React from "react";
import Footer from "../components/Footer.jsx";
import Evento from "../components/Evento.jsx";
import Galeria from "../components/Galeria.jsx";
import Header from "../components/Header.jsx";

export default function Home(){
    return(
    <>
        <Header/>
        <Evento
            titulo = {"Hackaton"}
            topico1 = {"Descrição do Evento: "}
            descricao = {"O Hackaton é um evento onde juntamos nossos alunos de Desenvolvimento de Sistemas e propomos um desafio a todos para que eles resolvam com os aprendizados que desenvolveram durante o curso."}
            topico2 = {"Data e Horário: "}
            data = {"8h - 17h30 dia 23/08/2024"}
            topico3 = {"Localização"}
            localizacao = {"Rodovia BR 101 nº km 211, 7235 - Distrito Industrial, São José - SC, 88104-800"}
        />
        <Galeria/>
        <Footer/>
    </>
)}


