import { useMemo } from "react";
import { useSelector } from "react-redux";



const useBoard =() =>{
    
    const boardType = useSelector((state) => state.board.boardType); 
    const boardSubType = useSelector((state) => state.board.boardSubType)
    const data = useSelector((state) => state.board.data)

    const filteredData = useMemo(() => {
  
       if(!!data && data?.length){
            let typeWisefilterdData =  data.filter((boardData) => boardData.type == boardType && boardData.subType == boardSubType)
            let columnWise = {}
            typeWisefilterdData.forEach(element => {
                console.log(element)
                columnWise[element.columnTag.id] = [...(columnWise[element?.columnTag?.id] ? columnWise[element.columnTag.id] : [element])]
              
            });
            console.log(columnWise)
            return columnWise
       }
       return null
       
    },[data,boardType,boardSubType])


    const columnHeadData = useMemo(() => {
        switch (boardType){
            case 'outcomes':
                return [
                    {color:'primary.main', text:'3 Year Outcomes'},
                    {color:'primary.main', text:'1 Year Outcomes'},
                    {color:'var(--customColor24)', text:'Hr, Payroll and Training'},
                    {color:'var(--customColor24)', text:'Wealthnation'},
                ]
            case 'projects':
            case 'deliverables':
                return [
                    {color:'primary.main', text:'idea'},
                    {color:'primary.main', text:'opportunity assessment'},
                    {color:'primary.main', text:'approved'},
                    {color:'primary.main', text:'fund'},
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