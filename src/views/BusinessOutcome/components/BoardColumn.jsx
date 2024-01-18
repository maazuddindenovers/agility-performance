import { Box } from "@mui/material"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MetricCardThree from "../../../components/Cards/MetricCardThree"
import { useDispatch } from "react-redux";
import { dialogToggle, setActiveData } from "../../../store/slice/boardSlice";

const Header = ({color='', text=''}) => {
    return (
        <Box sx={{
            display:'flex', 
            gap:1,
            alignItems:'center',
            fontWeight:"500", 
            backgroundColor:color,
            borderTopLeftRadius:'5px', borderTopRightRadius:'5px',
            p:1,
            color:'white',
        }}>
            <AddCircleIcon />
            <Box sx={{}}>
                {text} 
            </Box>
        </Box>
    )
}


const BoardColumn = ({headerData=null,columnData=[]}) => {
    const dispatch = useDispatch()

    const handleClick = (data) => {
        dispatch(setActiveData(data))
        dispatch(dialogToggle())
    }
    return (
        <Box sx={{minHeight:100, borderTopLeftRadius:'5px', borderTopRightRadius:'5px', backgroundColor:'var(--customColor25)' }} >
          { !!headerData &&  <Header color={headerData.color} text={headerData.label} /> } 
          <Box sx={{p:1,'&>div':{mb:1}}}>
            {columnData.map((data,dataInd) => {
                return (
                    <Box  key={`${data.ID}`} onClick={() => handleClick(data)}>
                        <MetricCardThree 
                            id={data.ID} 
                            text={data.text} 
                            tags={data.tags} 
                            progress={data.progress}
                            color={data.cardColor}
                        />
                    </Box>
                )
            })}
          </Box>
        </Box>
    )
}


export default BoardColumn;