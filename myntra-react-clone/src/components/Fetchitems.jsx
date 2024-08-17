import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { itemsAction } from "../store/itemsSlice";
import { fetchStatusAction } from "../store/fetchStatusSlice";

const Fetchitems=()=>{
    const dispatch=useDispatch(); 
    const fetchStatus=useSelector(store=>store.fetchStatus);
    useEffect(()=>{
        if(fetchStatus.fetchDone) return;
        const controller=new AbortController();
        const signal =controller.signal;
       // dispatch(fetchStatusAction.markFetchingStarted())
        fetch("http://localhost:8080/items",{signal})
        .then((res)=>res.json())
        .then(({items})=>{
           // dispatch(fetchStatusAction.markFetchDone())
           // dispatch(fetchStatusAction.markFetchingFinished())
            dispatch(itemsAction.addInitialItems(items))
        })
        return ()=>{
         controller.abort();
        }
    },[fetchStatus])
    
    return(
        // Head List Component Means not to show anything bs logic dikhane ka hai 
    <>
    </>
    )
}
export default Fetchitems