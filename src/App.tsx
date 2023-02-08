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
        alert("CEP inválido.")
        setInputCep("")
    }    
  }


  return (
    <div className='container'>
        <div className="container__text">
            <p>Digite o CEP que deseja consultar</p>
            <input type="text" value={inputCep} placeholder='Digite o CEP aqui' onChange={(e) => setInputCep(e.target.value)} />
            <button onClick={(e) => {callCep(e)}}>Consultar CEP</button>
        </div>

        {Object.keys(cepDatas).length > 0 && (
            <div className="container__cep">
                <p>{cepDatas.cep}</p>
                <p>logradouro {cepDatas.logradouro}</p>
                <p>bairro {cepDatas.bairro}</p>
                <div>
                    <span>localidade {cepDatas.localidade}</span> - <span>uf {cepDatas.uf}</span>
                </div>
            </div>
        )}

    </div>
  )
}

export default App
