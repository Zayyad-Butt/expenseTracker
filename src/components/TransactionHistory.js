import React ,{useContext}from 'react'
import {GlobalContext} from "../context/GlobalState";
import {Transaction} from "./Transaction";

export const TransactionHistory = () => {
    const myDiv = {
        margin: "auto",
        width: "300px",
        height: "150px",
        textAlign: "center",
        overflow: "auto"
    }
    const {transactions}=useContext(GlobalContext);
    return (
        <div style={myDiv}>
            <h3>Transaction History</h3>
            <hr/>
            {
                transactions.map(transactions => (
                    <Transaction key={transactions.id} transaction={transactions}/>
                ))
            }
        </div>
    )
}