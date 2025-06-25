import { IconButton, createTheme } from '@mui/material'

const getTheme = (mode = 'light') => {
    return createTheme({
        palette: {
            mode: mode,
            background: {
                default: mode === 'light' ? '#ffffff' : '#1e1e1e',
                paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
            },
            text: {
                primary: mode === 'light' ? '#000000' : '#ffffff'
            }
        },
        typography: {
            fontFamily: 'fantasy',
            h1: {
                fontSize: '3.75rem',
                fontWeight: 700,
                lineHeight: '4.57rem'
            },
            h2: {
                fontSize: '3rem',
                fontWeight: 700,
                lineHeight: '3.65rem'
            },
            h3: {
                fontSize: '2.25rem',
                fontWeight: 700,
                lineHeight: '2.74rem'
            },
            h5: {
                fontSize: '1.5rem',
                fontWeight: 700,
                lineHeight: '1.83rem'
            },
            body1: {
                fontSize: '1.125rem',
                fontWeight: 500,
                lineHeight: '1.37rem'
            },
            body2: {
                fontSize: '0.9375rem',
                fontWeight: 500,
                lineHeight: '1.143rem'
            },
            body3: {
                fontSize: '0.9375rem',
                fontWeight: 400,
                lineHeight: '1.143rem'
            },
            body4: {
                fontSize: '0.875rem',
                fontWeight: 500,
                lineHeight: '1.07rem'
            },
            body5: {
                fontSize: '0.875rem',
                fontWeight: 400,
                lineHeight: '1.07rem'
            },
        },
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        width: '100%',
                    }
                }
            },
            MuiInputBase: {
                styleOverrides: {
                    root: {
                    }
                }
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        borderRadius: '5px',
                        '&.Mui-focused': {
                            // backgroundColor: 'red',
                            borderColor: 'yellow',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'black',
                                borderWidth: '2px'

                            },
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: ' #f3e3cc',
                        },

                    }
                }
            },
            MuiInputLabel: {
                styleOverrides: {
                    root: {
                        color: 'gray',
                        '&.Mui-focused': {
                            color: 'black'
                        }
                    }
                }
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none'
                    }
                },
                variants: [
                    {
                        props: { variant: 'contained' },
                        style: {
                            backgroundColor: ' #f3e3cc',
                            color: 'black',
                            marginTop: '30px',
                            height: '40px',
                            width: '20ch',
                            gap: '10px',
                            padding: '8px 16px',
                            borderRadius: '14px',
                            fontSize: '0.9375rem',
                            fontWeight: 700,
                            // textTransform: 'uppercase'
                            ':hover': {
                                transform: 'scale(1)'
                            }
                        }
                    },

                ]
            }
            // MuiOutlinedInput: {
            //     styleOverrides: {
            //         root: {
            //             backgroundColor: 'blue',
            //             color: 'yellow',
            //             borderRadius: '14px !important',
            //             width: '100%',
            //             minHeight: '42px',
            //             '.MuiOutlinedInput-input': {
            //                 fontSize: '0.9375rem',
            //                 fontWeight: 400,
            //                 lineHeight: '1.143rem',
            //                 padding: '10px 12px 10px 12px',
            //                 ':-webkit-autofill': {
            //                     // WebkitBoxShadow: '0 0 0 100px #FFFFFF',
            //                     WebkitTextFillColor: 'black'
            //                 }
            //             },
            //             '& .MuiOutlinedInput-notchedOutline': {
            //                 border: 'none'
            //             },
            //             '&.Mui-focused': {
            //                 backgroundColor: 'blue',
            //                 '& .MuiOutlinedInput-notchedOutline': {
            //                     border: `1.5px solid red !important`
            //                 },
            //                 '&.Mui-error': {
            //                     '& .MuiOutlinedInput-notchedOutline': {
            //                         border: `1.5px solid pink !important`,
            //                         boxShadow: `0px 0px 0px 3px brown, 0px 0px 4px 0px rgba(160, 160, 160, 0.25)`
            //                     }
            //                 }
            //             },
            //             '&.Mui-error': {
            //                 '& .MuiOutlinedInput-notchedOutline': {
            //                     border: `1.5px solid green !important`
            //                 }
            //             },
            //             '.MuiPaper-root': {
            //                 marginTop: '6px'
            //             },
            //             '&.MuiInputBase-multiline': {
            //                 padding: 0
            //             }
            //         }
            //     },
            //     variants: [
            //         {
            //             props: { inputType: 'date' },
            //             style: {
            //                 flexDirection: 'row-reverse',
            //                 gap: '10px'
            //             }
            //         },
            //         {
            //             props: { size: 'large' },
            //             style: {
            //                 minHeight: '46px'
            //             }
            //         }
            //     ]
            // },
        }
    })
}
export default getTheme