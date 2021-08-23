import './App.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App () {
  const { register, handleSubmit } = useForm()
  const [postData, setPostData] = useState(null)
  const [selectOptions, setSelectOptions] = useState([])
  const [quotesArray, getQuotesArray] = useState([])


useEffect(() => {
const getQuotes = async () => {
  const resp = await axios({
    method: 'GET',
    url: 'https://prof-quotes.herokuapp.com/api/quotes/'
  })
  getQuotesArray(resp.data.quotes)
  console.log(resp.data.quotes)
}
getQuotes()

},[])  

useEffect(()=>{
const getOptions = async () => {
const resp = await axios({
  method: 'GET',
  url: 'https://prof-quotes.herokuapp.com/api/quotes/options',
})
setSelectOptions(resp.data.classOptions)
}
getOptions()
},[])


  useEffect(() => {
    const miFunc = async () => {
      const respuesta = await axios({
        method: 'POST',
        url: 'https://prof-quotes.herokuapp.com/api/quotes/',
        data: postData
      })
    }

    if (postData) {
      miFunc()
    }
  }, [postData])

  const onSubmit = values => {
    setPostData(values)
  }

let opciones = selectOptions.map((e) => <option value={e}>{e}</option> )
let citas = quotesArray.map((e) =><div>{e.quote}</div> )

  return (
    <div className='App'>
      <header className='App-header'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>
              Cita:
              <input
                {...register('quote', {
                  required: true
                })}
              />
            </label>
          </div>

          <div>
            <label>
              Clase:
              <select {...register('class', { required: true })}>
              <option value=''>Selecciona la clase</option>
              {opciones}
              </select>
            </label>
          </div>

          <button>Crear</button>
        </form>
      </header>


      <div>
        {citas}
      </div>
    </div>
  )
}

export default App