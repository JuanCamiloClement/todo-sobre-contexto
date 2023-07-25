/* eslint-disable react/prop-types */
import { useContext } from "react";
import { VotesContext } from "../store/VotesContext";

const ShowTotal = () => {

    const store = useContext(VotesContext)

    return (
        <p>
            { store.totalVotes }
        </p>
    )
}

export default ShowTotal;