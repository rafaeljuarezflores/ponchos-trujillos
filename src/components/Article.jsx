import { useState } from 'react';
import Modal from "react-modal";
import "../styles/Article.scss";
import "../styles/Modal.scss";
import "../styles/Modal2.scss";
import {loadStripe} from '@stripe/stripe-js'
import {CardElement, Elements, useStripe, useElements} from '@stripe/react-stripe-js'

function Article(props) {

  let stripePromise = loadStripe('pk_test_51LfImBEo1J5y2tKXRdx8kqwDYjwgYYMlwIjaDWB601jv0xFtxm07VgN3b42DyXbITJFRNN8EhDoZyW6NfogvL0Xi00i5ZyWF1U');

  let CheckOutForm = () => {

    let stripe = useStripe();
    let elements = useElements();

    const handleSubmit = async(e) => {
      e.preventDefault();
      const {error, paymetMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement)
      })

      if (!error){
        console.log(paymetMethod)
      }

    }

    const cardElementOptions = {
      style: {
        base: {
          fontSize: "25px",
        },
        invalid: {
          fontSize: "25px",
        }
      }
    }


    return(
    <form onSubmit={handleSubmit} className='formulario'>
      <CardElement options={cardElementOptions} id='CardElement'/>
      <button className='Comprar'>comprar</button>
    </form>
    )
  }

  const [modal,setModal] = useState(false)
  if(modal === true){
    document.body.style.overflow = 'hidden';
  }else{
    document.body.style.overflow= 'visible';
  }

  const [modal2,setModal2] = useState(false)


  function buy(){
    setModal(false)
    setModal2(false)
  }

  
  return(
  
    <div>
      <div className='Article' onClick={() => setModal(true)}>
        <img className='image' src={props.image}/>
        <p className='price'>{props.price}</p>
      </div>

      <Modal isOpen={modal} ariaHideApp={false} className='Modal'> 
        <img className='image_modal' src={props.image}/>
        <div className='Información'>
          <button onClick={()=> setModal(false)} className='close_modal'>x</button>
          <h2 className='title'>{props.title}</h2>
          <p className='descripción'>{props.description}</p>
          <div className='Buy-content'>
            <p className='price_modal'>{props.price}</p>
            <button className='comprar' onClick={()=> setModal2(true)}>comprar</button>
          </div>
        </div> 
      </Modal>

      <Modal isOpen={modal2}  ariaHideApp={false} className='Modal2'>
        <button onClick={buy} className='close_modal_2'>x</button>
        <p className='price_modal_2'>{props.price}</p>
        <Elements stripe={stripePromise}>
          <form action="">
            <CheckOutForm/>
          </form>
        </Elements>
      </Modal>
    </div>
  ) 

}

export default Article;