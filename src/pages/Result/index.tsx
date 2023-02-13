import api from "../../services/api"

export default function Result( { cepResponse }: any ) {


    return (
        <div className="container__cep">
            <p>CEP: {}</p>
            <p>Logradouro: {}</p>
            <p>Bairro: {}</p>
            <div>
                <span>Localidade: {}</span> - <span>UF: {}</span>
            </div>
        </div>
    )
}