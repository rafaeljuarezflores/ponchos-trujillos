
function Buy(prop){
    return(
        <div>
            <div className='Información'>
              <div className='Buy-content'>
                <p className='price_modal'>{prop.price}</p>
                <button className='comprar'>comprar</button>
              </div>
            </div>
        </div>
    )
}

export default Buy;