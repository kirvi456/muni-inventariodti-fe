import React from 'react'

import { Paper, Typography, Stack } from '@mui/material'

import RouterIcon from '@mui/icons-material/Router';
import ComputerIcon from '@mui/icons-material/Computer';
import PrintIcon from '@mui/icons-material/Print';
import ConstructionIcon from '@mui/icons-material/Construction';
import { useNavigate } from 'react-router-dom';

type MenuCardProps = {
    title: string;
    icon: string;
    path: string;
}


export const MenuCard: React.FC<MenuCardProps> = ({ title, icon, path }) => {
    
    const navigate = useNavigate();
    
    const handleNavigation = () => {
        navigate(path);
    }
    
    const getIcon = (): JSX.Element => {
        switch (icon) {
            case 'computer':
                return (<ComputerIcon sx={{ fontSize: 80 }} />)
            case 'printer':
                return (<PrintIcon sx={{ fontSize: 80 }} />)
            case 'router':
                return (<RouterIcon sx={{ fontSize: 80 }} />)
            default:
                return (<ConstructionIcon sx={{ fontSize: 80 }} />)
        }
    }

    return (
        <Paper 
            elevation={10}
            sx={{ 
                p: 2, 
                width: '160px', 
                cursor: 'pointer', 
                ':hover': {
                    color: 'primary.main'
                }
            }}  
            onClick={handleNavigation}
        >
            <Stack sx={{ alignItems: 'center' }}>
                {getIcon()}

                <Typography textAlign='center'>
                    {title}
                </Typography>
            </Stack>
        </Paper>
    )
}
