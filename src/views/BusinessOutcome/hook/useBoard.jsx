import { useMemo } from "react";
import { useSelector } from "react-redux";
import {businessOutcomeColumnData} from "../../../utils/data"
import useBusinessData from "./useBusinessData"

const useBoard =(boardValue,boardSubValue) =>{
    
    const boardType = !!boardValue ? boardValue : useSelector((state) => state.board.boardType); 
    const boardSubType = !!boardSubValue ? boardSubValue : useSelector((state) => state.board.boardSubType) 
    // const data = useSelector((state) => state.board.data)

    const {filteredData} = useBusinessData({boardType,boardSubType})


    const columnHeadData = useMemo(() => {
        switch (boardType){
            case 'outcomes':
                return [
                    businessOutcomeColumnData[0],
                    businessOutcomeColumnData[1],
                    businessOutcomeColumnData[2],
                    businessOutcomeColumnData[3],
                ]
            case 'projects':
            case 'deliverables':
                return [
                    businessOutcomeColumnData[4],
                    businessOutcomeColumnData[5],
                    businessOutcomeColumnData[6],
                    businessOutcomeColumnData[7],
                ]
           
            default:
                return []
        }

    },[boardType])
    
    return {
        columnHeadData,
        filteredData,
    }
}

export default useBoard;