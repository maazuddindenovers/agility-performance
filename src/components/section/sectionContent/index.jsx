import { Box } from "@mui/material"
import { Children } from "react";


const SectionContent = ({children}) => {
    return (
        <Box sx={{backgroundColor:'var(--customColor2)',p:['11px','12px','12px','14px'],minHeight:'50px', borderRadius:'5px'}}>
            
            {Children.map(children,(child,childKey)=>{
                return (
                    <Box key={`sectioncontent-${childKey}`} sx={{ borderRadius:'5px', p:['11px','12px','12px','14px'],mb:['11px','12px','12px','14px'],'&:last-child':{mb:[0,0,0,0]}, backgroundColor:'var(--background)'}}>
                        {child}
                    </Box>
                )
            })}
            

        </Box>
    )
}

export default SectionContent;