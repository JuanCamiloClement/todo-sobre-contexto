/* eslint-disable react/prop-types */
import { useContext } from "react";
import { VotesContext } from "../store/VotesContext";

const TotalPerCandidate = () => {

    const store = useContext(VotesContext);

    return (
        <div> 
            {
            (store.candidateToShow === 'all' || store.candidateToShow === 'candidate-1') &&
            <div>
                <h3>Candidato 1:</h3>
                { store.numericOrPercent === 'numeric' ? store.count1 : `${Math.trunc((store.count1/store.totalVotes)*100)}%`}
            </div>
            }
            {
            (store.candidateToShow === 'all' || store.candidateToShow === 'candidate-2') &&
            <div>
                <h3>Candidato 2:</h3>
                { store.numericOrPercent === 'numeric' ? store.count2 : `${Math.trunc((store.count2/store.totalVotes)*100)}%`}
            </div>
            }
            {
            (store.candidateToShow === 'all' || store.candidateToShow === 'candidate-3') &&
            <div>
                <h3>Candidato 3:</h3>
                { store.numericOrPercent === 'numeric' ? store.count3 : `${Math.trunc((store.count3/store.totalVotes)*100)}%`}
            </div>
            }
            {
            (store.candidateToShow === 'all' || store.candidateToShow === 'candidate-4') &&
            <div>
                <h3>Candidato 4:</h3>
                { store.numericOrPercent === 'numeric' ? store.count4 : `${Math.trunc((store.count4/store.totalVotes)*100)}%`}
            </div>
            }
        </div>
    )
}

export default TotalPerCandidate;