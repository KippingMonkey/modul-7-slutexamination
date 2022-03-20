import './TotalPrice.css';

function TotalPrice (props){
  return(
    <div className="totalPrice-container">
      <div className='priceText-container'>
        <p className="total">Total</p>
        <p className="inclusive">inkl moms + drönarleverans</p>
      </div>
      <div className='price-container'>
        <p className='price'>4345 kr</p>
      </div>
    </div>
  )
}

export default TotalPrice;