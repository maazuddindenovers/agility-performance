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
                    {Object.entries(row).map((rowD,rowDInd) => {
                        return (
                        <TableCell key={rowD[0]} {...(rowDInd == 0 ? {component:'th',scope:'row'} : {} )}>
                            {rowD[1]}
                        </TableCell>
                        )
                    })}
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    )
}

export default CustomTabel;