import React, {useState,useContext} from "react";
import {GlobalContext} from "../context/GlobalState";

export const AddTransaction = () => {

    // Styling

    const container = {
        textAlign: "center",
        height: "90px"
    }
    const descriptionStyling = {
        paddingRight: "200px", display: "block", height: "35px", fontWeight: "bold", margin: "auto"
    }
    const inputStyling = {
        padding: "10px", border: "1px solid #20b2aa", borderRadius: "5px", width: "280px"
    }
    const myDiv = {
        margin: "auto",
        width: "300px",
        textAlign: "center"
    }
    const buttonStyling = {
        cursor: "pointer", padding: "10px 20px", border: "1px solid #20b2aa",
        borderRadius: "5px", backgroundColor: "#20b2aa", margin: "auto", color:"white"
    }

    //Creating state for Description and Amount

    const [description,setDescription]=useState('');
    const [amount,setAmount]=useState(0);
    const {addTransaction}=useContext(GlobalContext);
    const onSubmit=(e)=>{
        e.preventDefault();
        const newTransaction={
            id: new Date().getTime(),
            description,
            amount: +amount
        }
        addTransaction(newTransaction);
    }
    return (
        <div >
            <div style={myDiv}>
                <h3 >Add Transaction</h3>
                <hr />
            </div>
            <form onSubmit={onSubmit}>
                <div style={container}>
                    <label htmlFor="desc" style={descriptionStyling}>Description</label>
                    <input style={inputStyling} type="text" id={"desc"} placeholder={"Enter Description"}
                            value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <div style={{ textAlign: "center" }}>
                    <label htmlFor="amo" style={descriptionStyling}>Amount</label>
                    <input style={inputStyling} type="number" id={"amo"} placeholder={"-ive->expensive, +ve->income"}
                            value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                </div>
                <div style={{ textAlign: "center", marginTop: "5px" }}>
                    <button style={buttonStyling} >Add</button>
                </div>
            </form>
        </div>
    )
}
