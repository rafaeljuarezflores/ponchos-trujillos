import "../styles/Article.scss"
import { useState } from "react";
import Article from "../components/Article";
import Object_Men from "../components/Object-Men";
    
function Men(){

  const[user,setUser] = useState(Object_Men); 

  return(
    <div className="Men">
      {user.map(item =>{
        return(
          <Article key={item.id} price={item.price} image={item.image} title={item.title} description={item.description} id={item.id}/>
        )
      })}
    </div>
  )
  
}

export default Men;