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
        default:
            return state;
    }
};

export default contactReducer;