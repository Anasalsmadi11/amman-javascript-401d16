import { createSlice } from '@reduxjs/toolkit';
const peopleSlice = createSlice({
    name: 'people',
    initialState: [{name:"Anas"},{name:"Kyoko"},{name:"Tsunade"},{name:"unohana"}],
    reducers: {
        add(state, action) {
            let person = { name: action.payload };
            state.push(person);
        },
        remove(state, action) {
            return state.filter((person) => person.name !== action.payload)
        }
    }
})
export const getRemoteData = () => async (dispatch, state) => {
    let myresult = await fetch('https://swapi.dev/api/people');
    let peopleData = await myresult.json(); // when  using fetch, the response from the server is initially in a raw format, typically as a stream of bytes. To work with the data in JavaScript, you need to convert this raw response into a more usable format, such as a JavaScript object.
    peopleData.results.forEach((item) => dispatch(add(item.name))); // results from the api console.log(peopleData)

}
export const { add, remove } = peopleSlice.actions;
export default peopleSlice.reducer; // reducer is not the same as reducers defined above

