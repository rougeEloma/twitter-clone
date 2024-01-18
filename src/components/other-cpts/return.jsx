import { useNavigate } from "react-router-dom";
import ReturnIcon from "../../images/return.svg";

function Return ({linkValue}) {

  const navigate = useNavigate()

  const handleClick = ()=>{
      navigate(linkValue)
  }

  return (
    <img src={ReturnIcon} onClick={handleClick}/>
  );
}

export default Return;