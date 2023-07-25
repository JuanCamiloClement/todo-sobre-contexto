import { useContext } from "react";
import { VotesContext } from "../store/VotesContext";

const Filter = () => {

    const store = useContext(VotesContext);

    return (
        <div>
            <select onChange={(e) => store.handleNumericOrPercent(e.target.value)} name="" id="">
                <option value="numeric">Numérico</option>
                <option value="percentage">Porcentaje</option>
            </select>
            <select onChange={(e) => store.handleCandidateToShow(e.target.value)} name="" id="">
                <option value="all">Todos</option>
                <option value="candidate-1">Candidate 1</option>
                <option value="candidate-2">Candidate 2</option>
                <option value="candidate-3">Candidate 3</option>
                <option value="candidate-4">Candidate 4</option>
            </select>
        </div>
    )
}

export default Filter;