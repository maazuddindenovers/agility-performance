import { Box, Typography } from "@mui/material"
import {  EditorState,ContentState,convertFromHTML } from "draft-js";
import { useState } from "react";
import { Editor, } from 'react-draft-wysiwyg';


import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { isJSON } from "../../../../utils/helper";


const maxChar = 1000


const DialogEditor = ({defaultContent=null,handleChange}) => {
 
    const [state, setState] = useState( () => 
        !!defaultContent ?
        EditorState.createWithContent(
            typeof defaultContent == 'string' ? 
            ContentState.createFromBlockArray(
                convertFromHTML(`${defaultContent}`) 
                )
                :
                defaultContent
        
        ):
            EditorState.createEmpty()
        )


    

    const handleBeforeInput = (char,editorState) => {  
      
        if(editorState.getCurrentContent().getPlainText().length < maxChar){
            handleChange('description',editorState.getCurrentContent())
            return 'not-handled'
        }else{
            return 'handled'
        }
    }

    const currentCharLength = state.getCurrentContent().getPlainText().length

    return (
        <Box>
           <Typography sx={{fontWeight:600, fontSize:'clamp(16.5px,1.4vw,18px)', color:'var(--customColor29)'}}>
               Hypothesis / Description
            </Typography>  

            <Box >
                <Editor                         
                    editorState={state} 
                    onEditorStateChange={setState} 
                    handleBeforeInput={handleBeforeInput}
                    wrapperClassName="editorWrapperClass"
                    editorClassName="editorMain"
                    toolbarClassName="editorToolbar" 
                />
                <Box sx={{borderTop:'1px solid currentcolor',mt:1, pt:'5px', textAlign:"right" }}>
                    {currentCharLength} / {maxChar}
                </Box>
            </Box>

        </Box>
    )
}

export default DialogEditor;