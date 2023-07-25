/* eslint-disable react/prop-types */

const Candidate = (props) => {

    const { option,handleIncrement } = props;

    const handleVote = () => handleIncrement();

    return (
        <div>
            <h3>Candidate { option }</h3>
            <button onClick={ handleVote }>Vote</button>
        </div>
    )
}

export default Candidate;