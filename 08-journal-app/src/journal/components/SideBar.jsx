import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Grid } from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';

export const SideBar = ({ drawerWith }) => {
  return (
    <Box
        component='nav'
        sx={{ width: { sm: drawerWith }, flexShrink: { sm: 0 } }}
    >
        <Drawer
            variant='permanent'
            open
            sx={{
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWith }
            }}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    Juan González
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                {
                    ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'].map( text => (
                        <ListItem key={ text } disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={ text }/>
                                    <ListItemText secondary={ 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.' }/>
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>

    </Box>
  )
}
