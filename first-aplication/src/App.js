import './App.css'
import { useForm } from 'react-hook-form'

function App () {
 const { handleSubmit, register } = useForm()

const callBack = (formValues) =>{
  let arr = JSON.stringify(formValues)
  alert(arr)  
} 

const callBackErrores = (errores) =>{
  console.log(errores)
}
  return (
    <div className='App'>
      <header className='App-header'>
        <form onSubmit={handleSubmit(callBack, callBackErrores)}>
          <div>
            <label style={{display: 'flex', flexDirection: 'column' }}>
              Nombre 
              <input type="text" { ...register('nombre') } />
            </label>
          </div>
          <div>
            <label style={{display: 'flex', flexDirection: 'column' }}>
              Apellido: 
              <input type="text" { ...register('apellido', {required: true})} />
            </label>
          </div>
          <div>
            <label style={{display: 'flex', flexDirection: 'column' }}>
              Edad: 
              <input type="number" { ...register('edad', {required: true})} />
            </label>
          </div>
          <div>
            <label style={{display: 'flex', flexDirection: 'column' }}>
              Correo: 
              <input type="email" { ...register('email', {required: true})} />
            </label>
          </div>
          <div>
            <label style={{display: 'flex', flexDirection: 'column' }}>
              Pais: 
              <input type="text" { ...register('pais', {required: true})} />
            </label>
          </div>
          <button type='submit'> Enviar </button>

        </form>



      </header>
    </div>
  )
}

export default App