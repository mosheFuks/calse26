import {useState} from 'react'
import "./colorPicker.css"

/*{(e) => setColor(e.target.value)}*/

const ColorPicker = () => {
    const [color, setColor] = useState("#000")
    return ( 
    <div className="fondo" style={{background: color}}>
        <div className="cajita">
            <h2>Color Picker</h2>
            <input type="color" onChange={(e) => setColor(e.target.value)}/>
        </div>
    </div>
     );
}
 
export default ColorPicker;