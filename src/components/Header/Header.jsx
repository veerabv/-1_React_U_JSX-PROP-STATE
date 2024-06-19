import ReactImage from "../../assets/react-core-concepts.png";
import "./Header.css";


export default function Header() {
  console.log("Header");
    const readDescription = ["Fundamentals","Crucial","Core"];
    function getRandomInt(max){
        return Math.floor(Math.random() * (max+1));
      }
      
    const description = readDescription[getRandomInt(2)];
    return <header>
      <img src={ReactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  }
  