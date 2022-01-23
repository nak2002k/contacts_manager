const initialState =[
{
id:0,
name:"Nakul Kamatkar",
number:8552930209,
email:"nak2002k@gmail.com"
},
{
    id:1,
    name:"Anagha Kamatkar",
    number:8553029209,
    email:"rs@test.com"

},

];
const contactReducer = (state =initialState,action)=>{
    switch(action.type){
        case "ADD_CONTACT":
            state =[...state, action.payload];
            return state;
            case "UPDATE_CONTACT":
                const updateState = state.map(contact=>contact.id === action.payload.id? action.payload: contact);
                state = updateState;
                return state;
                case "DELETE_CONTACT":
                const filterContacts = state.filter(contact=>contact.id !== action.payload && contact);
                state = filterContacts;
                return state
        default:
            return state;
    }
};

export default contactReducer;