import { useState } from "react";   

const Input = () => {
    const [value, setValue] = useState("Hola Muchachos");
    return ( 
    <div>
        <input value = {value} onChange={e => setValue(e.target.value)} />
        <button onClick ={() => setValue("Adios muchachos!!")}>
            Cambiar Valor
        </button>
    </div>
    )
};

export default Input;