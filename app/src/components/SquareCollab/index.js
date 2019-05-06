import React, {Component} from "react";

import "./styles.css";

class SquareCollab extends Component{
    
    handleClick = () => console.log("Clicou")
    render(){
        return(
            <button 
                onClick={this.handleClick}
                className="square-collab">X
            </button>            
        )
    }
}

// const handleClick = () => console.log("Clicou")

// const SquareCollab = () => (
//     <button 
//         onClick={handleClick}
//         className="square-collab">X
//     </button>
// );

export default SquareCollab;