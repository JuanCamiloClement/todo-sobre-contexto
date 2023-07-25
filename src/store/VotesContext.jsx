/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const VotesContext = createContext();

export const VotesProvider = ({ children }) => {

    const [count1,setCount1] = useState(0);
    const [count2,setCount2] = useState(0);
    const [count3,setCount3] = useState(0);
    const [count4,setCount4] = useState(0);
    const [numericOrPercent,setNumericOrPercent] = useState('numeric');
    const [candidateToShow,setCandidateToShow] = useState('all');

    const handleIncrementOne = () => {
        setCount1(count1 + 1);
    }
    const handleIncrementTwo = () => {
        setCount2(count2 + 1);
    }
    const handleIncrementThree = () => {
        setCount3(count3 + 1);
    }
    const handleIncrementFour = () => {
        setCount4(count4 + 1);
    }
    const handleNumericOrPercent = (selectedValue) => {
        setNumericOrPercent(selectedValue);
    }
    const handleCandidateToShow = (selectedValue) => {
        setCandidateToShow(selectedValue);
    }

    const totalVotes = count1 + count2 + count3 + count4;

    return (
        <VotesContext.Provider
            value={{
                count1,
                count2,
                count3,
                count4,
                numericOrPercent,
                candidateToShow,
                totalVotes,
                handleIncrementOne,
                handleIncrementTwo,
                handleIncrementThree,
                handleIncrementFour,
                handleNumericOrPercent,
                handleCandidateToShow
            }}
        >
            {children}
        </VotesContext.Provider>
    )
}