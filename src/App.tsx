import { MouseEvent, useState } from 'react'
import "./index.css"
import api from "./services/api"

function App() {
  const [inputCep, setInputCep] = useState("")
  const [cepDatas, setCepDatas] = useState(Object)

  async function callCep(e: MouseEvent) {

    if (inputCep === "") {
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
    <div className='container'>
        <div className="container__text">
            <h1>Buscar CEP</h1>
            <form>
                <label htmlFor="cepName">Digite um Cep:</label>
                <input type="text" name='cepName' value={inputCep} required placeholder='Digite o CEP aqui' onChange={(e) => setInputCep(e.target.value)} />
                <button onClick={(e) => {callCep(e)}}>Consultar CEP</button>
            </form>
        </div>

        {Object.keys(cepDatas).length > 0 && (
            <div className="container__cep">
                <p>CEP: {cepDatas.cep}</p>
                <p>Logradouro: {cepDatas.logradouro}</p>
                <p>Bairro: {cepDatas.bairro}</p>
                <div>
                    <span>Localidade: {cepDatas.localidade}</span> - <span>UF: {cepDatas.uf}</span>
                </div>
            </div>
        )}

    </div>
  )
}

export default App
