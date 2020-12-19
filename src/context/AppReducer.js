"import/no-anonymous-default-export": ["error", {
  "allowArray": false,
  "allowArrowFunction": false,
  "allowAnonymousClass": false,
  "allowAnonymousFunction": false,
  "allowCallExpression": true, // The true value here is for backward compatibility
  "allowLiteral": false,
  "allowObject": false
}]
export default (state,action)=>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transactions:state.transactions
                    .filter(transaction=>transaction.id!==action.payload)
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions:[action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}
