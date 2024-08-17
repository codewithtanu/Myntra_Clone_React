import BagSummary from "../components/BagSummary"
import {useSelector} from "react-redux"
import BagItem from "../components/BagItem";
const Bags = ()=>{  
 const bag= useSelector((store)=>store.bag)
 const items= useSelector((store)=>store.items)
 const finalItem=items.filter(item=>{
  const itemIndex=bag.indexOf(item.id);
  return itemIndex >= 0;
 })
return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container"> 
          {finalItem.map(item=> <BagItem item={item}/>)}
        </div>
        
        <BagSummary/>
      
      </div>
    </main>
    );
}
export default Bags