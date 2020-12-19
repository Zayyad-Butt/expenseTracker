import React ,{useContext} from 'react'
import {GlobalContext} from "../context/GlobalState";

export const AccountSummary = ()=>{
    const myDiv={
        backgroundColor:"#20b2aa",
        color:"white",
        padding:"10px",
        borderRadius:"5px",
        width:"300px",
        margin:"auto",
        display:"flex",
        justifyContent:"space-around",
    }
    const {transactions}=useContext(GlobalContext);
    const transactionAmounts=transactions.map(transaction=>transaction.amount);
    const income=transactionAmounts
        .filter(transaction=>transaction>=0)
        .reduce((acc,transaction)=>(acc+=transaction),0)
        .toFixed(2);
    const expense=transactionAmounts
        .filter(transaction=>transaction<0)
        .reduce((acc,transaction)=>((acc+=transaction)),0)
        .toFixed(2);

    return(
        <div style={myDiv}>
            <div>
                <div>
                    Income
                    <div>${income}</div>
                </div>

            </div>
            <div>
                <div style={{borderLeft:"1px solid white",paddingLeft:"50px"}}>
                    Expense
                    <div>${-1*expense}</div>
                </div>
            </div>
        </div>
    )
}