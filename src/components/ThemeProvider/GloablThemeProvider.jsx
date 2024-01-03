import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";




const theme = createTheme({

    palette: {
        primary: {
          main: '#00AEEF',
          contrastText:"#353537"
        },
        // secondary: {
        //     main: '#00AEEF',
        //     contrastText:"#353537"
        //   },
        customColor1:{
            main:'#FAFAFA',
            
        },
        success:{
            main:'#D1FAE5',
            contrastText:'#009563',
        },
        warning:{
            main:'#FEE2E2',
            contrastText:'#EF4444',
        }
      
    },
    components:{
        MuiCssBaseline: {
            styleOverrides: `
                    body{
                        background-color: var(--customColor1);
                        color:var(--foreground);
                    }
                    *{
                        border-color:var(--customColor3);
                    }
             
                  `,
            // 
          },
        MuiAppBar:{
            styleOverrides:{
            root:{
                backgroundColor:'var(--background)',
                color:'var(--forground)'
            }
            }
        },
        MuiSelect:{
            styleOverrides:{
                select:{
                    paddingTop:'0.7rem',
                    paddingBottom:'0.7rem'
                }
            }
        },
        MuiContainer:{
            styleOverrides:{
                root:{
                    paddingLeft:'10px',
                    paddingRight:'10px',
                }
            }
        }
    }

})



const GlobalThemeProvider = ({children}) => {

    return (
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    )
  }
  
  export default GlobalThemeProvider;