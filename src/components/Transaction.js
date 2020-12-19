import React,{useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";

export const Transaction = ({transaction}) =>{
    const incomeItems = {
        display: "flex",
        margin: "5px",
        padding: "5px",
        borderRadius: "5px",
        justifyContent: "space-between",
        border: "2px solid green"
    }
    const incomeItemRemove = {
        marginRight: "-5px",
        marginLeft: "5px",
        padding: "6px",
        cursor: "pointer",
        backgroundColor: "green",
        color: "white"
    }
    const removeItems = {
        display: "flex",
        margin: "5px",
        padding: "5px",
        borderRadius: "5px",
        justifyContent: "space-between",
        border: "2px solid red"
    }
    const removeItemRemove = {
        marginRight: "-5px",
        marginLeft: "5px",
        padding: "6px",
        cursor: "pointer",
        backgroundColor: "red",
        color: "white"
    }
    const sign = transaction.amount>0?'+':'-';
    const transactionType=transaction.amount>0? 'plus' : 'minus';
    const {delTransaction}=useContext(GlobalContext);

    if (sign==='+'){
        return (
            <div style={incomeItems}>
                <span>{transaction.description}</span>
                <span>
                {transaction.amount}
                    <span style={incomeItemRemove} onClick={() => delTransaction(transaction.id)}>X</span>
            </span>
            </div>

        )
    }
    else{
        return (
            <div style={removeItems}>
                <span>{transaction.description}</span>
                <span>
                {transaction.amount}
                    <span style={removeItemRemove} onClick={() => delTransaction(transaction.id)}>X</span>
            </span>
            </div>

        )
    }
}
