import { Divider, Grid, Skeleton, Stack } from '@mui/material'
import React from 'react'

export const EquipoSkeleton = () => {
    return (
        <Stack  sx={{ mt: { sm:'4em', xs:'4em', md: '4em', lg: '2em' } }}>
            <Stack alignItems='center'>
                <Skeleton width='50%' height='4em'></Skeleton>
                <Skeleton width='45%' height='2em'></Skeleton>
            </Stack>
            <Grid container sx={{mb: 1}}>
                <Grid item  xs={12} sm={12} md={12} lg={8} sx={{mt: 2}}>
                    <Stack spacing={1} alignItems='center'>
                        <Skeleton width='90%' height='6em'></Skeleton>
                        <Skeleton width='90%' height='1em'></Skeleton>
                        <Skeleton width='90%' height='1em'></Skeleton>
                        <Skeleton width='90%' height='1em'></Skeleton>

                    </Stack>
                </Grid>
                
                <Grid item  xs={12} sm={12} md={12} lg={4} sx={{mt: 2}}>
                    <Stack spacing={1} alignItems='center'>
                        <Skeleton width='200px' height='200px'></Skeleton>
                    </Stack>
                </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={2} sx={{p: 4}}>

                <Grid item xs={12} sm={12} md={12} lg={6} sx={{mt: 2}}>
                    <Skeleton width='90%' height='300px'></Skeleton>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} sx={{mt: 2}}>
                    <Skeleton width='90%' height='300px'></Skeleton>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} sx={{mt: 2}}>
                    <Skeleton width='90%' height='300px'></Skeleton>
                </Grid>
            </Grid>
        </Stack>
    )
}
