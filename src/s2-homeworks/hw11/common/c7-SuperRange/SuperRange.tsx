import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                width: '147px',
                color: 'rgba(0, 204, 34, 1)',
                '& .MuiSlider-thumb': {
                    backgroundColor: 'rgb(255,255,255)',
                    width:15,
                    height:15,
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: 6,
                        height:6,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(0, 204, 34, 1)', // Зеленый внутренний кружок
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    },
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        width: 16,
                        height: 16,
                        border:'1px solid rgba(0, 204, 34, 1)',
                        borderRadius: '50%',
                        backgroundColor: 'white', // Зеленый внешний круг
                        zIndex: -1,
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    },
                },
                '& .MuiSlider-track': {
                    height:4,
                    background: 'rgba(139, 139, 139, 1)',
                },
                '& .MuiSlider-rail': {

                    color: 'rgba(139, 139, 139, 1)',
                },

            }}
            {...props}
        />
    )
}

export default SuperRange
