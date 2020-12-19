import React from 'react'
import '../App.css';

export const Header = () =>{
    const heading={
        fontFamily:"Piedra,cursive",
        textAlign:"center"
    }
    return(
        <h1 style={heading}>Expense Tracker By Zayyad Butt</h1>
    )
}