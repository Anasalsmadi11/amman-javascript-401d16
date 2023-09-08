import VotesCounter from './Components/VotesCounter';
import Status from './Components/Status';
export default (props) => { // it is ok to not put the name of the  component
    return (
        <>
            <VotesCounter />
            <Status />
        </>
    )
}