import { useMemo } from "react";
import { useSelector } from "react-redux";


const useBusinessData = ({boardType,boardSubType}) => {

    const data = useSelector((state) => state.board.data)
    

    const filteredData = useMemo(() => {
  
        if(!!data && data?.length){
             let typeWisefilterdData =  data.filter((boardData) => boardData.type == boardType && boardData.subType == boardSubType)
             let columnWise = {}
             typeWisefilterdData.forEach(element => {
                //  console.log(element)   
                 columnWise[element.columnData.id] = [...(columnWise[element?.columnData?.id] ? [...columnWise[element.columnData.id],element] : [element])]
             });
             // console.log(columnWise)
             return columnWise
        }
        return null
        
     },[data,boardType,boardSubType])

    return {
        filteredData
    }
}

export default useBusinessData