import { Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import React from 'react'

type SelectionOptions = 'info' | 'actividades';

type PCOptionShowProps = {
    option : SelectionOptions;
    handleOption : (event: React.MouseEvent<HTMLElement>,
        option: SelectionOptions,) => void;
}

export const PCOptionShow : React.FC<PCOptionShowProps> = ({ option, handleOption }) => {

    

    return (
        <Stack
            sx={{
                margin: '1em 0',
                alignItems: 'end'
            }}
        >
            <ToggleButtonGroup
                value={option}
                exclusive
                onChange={handleOption}
                aria-label="options selector"
                size='small'
            >
                <ToggleButton value="info" aria-label="info">
                    Información General
                </ToggleButton>
                <ToggleButton value="actividades" aria-label="actividades">
                    Actividades
                </ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    )
}
