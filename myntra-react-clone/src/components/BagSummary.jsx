const BagSummary=()=>{
    const Bagsummary={
        totalItem:3,
        totalDiscount:999,
        totalMRP:245,
        finalPayment:1345,
    };
    return (
        <div className="bag-summary">
        
<div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({Bagsummary.totalItem} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{Bagsummary.totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{Bagsummary.totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹99</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{Bagsummary.finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
  </div>  
    )
}
export default BagSummary