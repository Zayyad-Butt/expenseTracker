import React,{useContext} from'react'
import {GlobalContext} from "../context/GlobalState";

export const Balance = () => {
    const heading={
        fontFamily:"Pietra,cursive",
        textAlign:"center"
    }
    const {transactions}=useContext(GlobalContext);
    const transactionAmounts=transactions.map(transaction=>transaction.amount);
    const balance= transactionAmounts.reduce((acc,item)=>(acc+=item),0).toFixed(2);
    return(
        <div style={heading}>
            <h2>Balance:${balance}</h2>
        </div>
    )
}