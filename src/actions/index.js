// Action - An object that contains a type property and can also contain payload.
// Action Creator - A function that returns an action.
export const increment = () => ({ type: 'INCREMENT' });
export const decrement = () => ({type:'DECREMENT'});


// COMPONENT (Person adding the address) => ACTION (Letter) => DISPATCH (Mail it) => REDUCER (Post Office)

