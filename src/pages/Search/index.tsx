import api from "../../services/api"
import { MouseEvent, useState } from 'react'
import "./styles.css"
import img from "../../assets/cepbg.jpg"
import { Link, useHref } from "react-router-dom"

export default function Search() {
    const [inputCep, setInputCep] = useState("")
    const [cepDatas, setCepDatas] = useState(Object)

    async function callCep(e: MouseEvent) {
        if (inputCep === "") {
            e.preventDefault()
            alert("Preencha algum CEP.")
            return
        }
    
        try {
            const response = await api.get(`${inputCep}/json`)
            setCepDatas(response.data)
            setInputCep("")
            console.log(cepDatas)
        } catch(error){
            console.log(error)
            setInputCep("")
        }    
    }

    return (
        <div className="container">
            <div className="leftSide">
                <h1>Buscar CEP</h1>
                <form>
                    <label htmlFor="cepName">Digite um Cep:</label>
                    <input type="text" name='cepName' value={inputCep} required placeholder='Digite o CEP aqui' onChange={(e) => setInputCep(e.target.value)} /> <br />
                    {/* <button onClick={(e) => {callCep(e)}}>Consultar CEP</button> */}
                    <Link to="/result" onClick={(e) => {callCep(e)}}>Consultar CEP</Link>
                </form>
            </div>
            <div className="imgArea">
                <img src={img} alt="img" />
            </div>
        </div>
    )
}