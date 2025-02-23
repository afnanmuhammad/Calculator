import Styles from "./ButtonContainer.module.css";
 const ButtonContainer = ({onButtonClick}) => {
const buttonNames = ["C","1","2","+","3","4","5","-","6","7","8","*","9","0","/","=",".","00.0"]

  return(
    <div className={Styles.buttonContainer}>
{buttonNames.map((buttonName) =>( <button className={Styles.button} onClick={()=>onButtonClick(buttonName)}>{buttonName}</button>))}

{console.log(buttonNames)};      
      

    </div>
  );
 }
 export default ButtonContainer;