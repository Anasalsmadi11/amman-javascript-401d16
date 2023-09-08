import { connect } from "react-redux";
const Status = (props) => {
    return (
        <>
            <section>
                <h2>Total Votes : {props.myCounter.totalVotes}</h2>
            </section>
        </>
    )
}
         // this function is to to accsess the state
const mapStateToProps = (state) => ({ /// mapStateToProps naming is mandatory  
    myCounter: state.myCounterReducer
    // myCounter: state.shihab go to store/index line 4
})

export default connect(mapStateToProps)(Status);
