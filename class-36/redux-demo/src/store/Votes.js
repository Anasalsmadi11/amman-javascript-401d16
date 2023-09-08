let initialState = {
    candidates: [
        { name: "shihab", votes: 0 },
        { name: "alaa", votes: 0 },
        { name: "laith", votes: 0 },
        { name: "nour", votes: 0 },
    ],
    totalVotes: 0
}
export default (state = initialState, action) => { // useReducer function
    const { type, payload } = action;
    switch (type) {
        case 'INCREMENT':
            let newTotalVotes = state.totalVotes + 1;
            let newCandidates = state.candidates.map((candidate) => {
                if (candidate.name === payload) {
                    return {
                        name: candidate.name,
                        votes: candidate.votes + 1
                    }
                }
                else {
                    return candidate; // this return will break the loop only,and the excution will continue to what after the loop
                }
            });
            return { // this return is from the switch , i return smth in each case
                totalVotes: newTotalVotes,
                candidates: newCandidates
            }
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

//actions

export const increment = (name) => {
    return {
        type: 'INCREMENT',
        payload: name
    }
}
export const reset = () => {
    return {
        type: 'RESET',
    }
}
