export default function Evento({titulo, topico1, descricao, topico2, data, topico3, localizacao}){
    return(
        <div className="info">
            <div>
                <h2>{titulo}</h2>
                <p className="descricao"><b>{topico1}</b>{descricao}</p>
                <p className="data"><b>{topico2}</b>{data}</p>
                <p className="localizacao"><b>{topico3}</b>{localizacao}</p>
            </div>
            <div className="banner">
                <img src="hackathon.png" alt="" />
            </div>

        </div>
    )
}