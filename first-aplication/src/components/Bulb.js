import { useState } from "react";

const Bulb = () => {
    const [state, setState] = useState('on');

    return <div>
            <h6>Mi bombilla esta prendida:{state}</h6>
            <button>
                
            </button>

          </div>

}

export default Bulb;