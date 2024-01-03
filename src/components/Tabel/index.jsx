import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"




const CustomTabel = ({heads=[],rowData=[]}) => {
    return (
        <TableContainer>
        <Table  aria-label="simple table">
            <TableHead>
            <TableRow>
                {heads.map((head,headInd) => {
                    return  <TableCell sx={{whiteSpace:'pre'}} key={`headekey-${headInd}`}>{head}</TableCell>
                })}
            </TableRow>
            </TableHead>
            <TableBody>
            {rowData.map((row,rowKey) => (
                <TableRow
                key={`row.name-${rowKey}`}
                sx={{ '&:last-child td, &:last-child th': { border: 0 },'& th':{whiteSpace:'pre'} }}
                
                >
                <TableCell  component="th" scope="row">
                    {row.feature}
                </TableCell>
                <TableCell  >{row.parent}</TableCell>
                <TableCell >{row.status}</TableCell>
                <TableCell >{row.cycleTime}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    )
}

export default CustomTabel;