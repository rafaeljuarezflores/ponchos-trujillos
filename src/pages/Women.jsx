import '../styles/Article.scss'
import { useState } from "react";
import Article from "../components/Article";
import Object_Women from "../components/Object-Women";

function Women(){

  const[user,setUser] = useState(Object_Women); 

  return(
    <div className="Women">
      {user.map(item =>{
        return(
          <Article key={item.id} price={item.price} image={item.image} title={item.title} description={item.description}/>
        )
      })}
    </div>
  )
  
}

export default Women;