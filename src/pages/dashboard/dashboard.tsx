import { FC, ReactElement } from 'react';
//FC -type is a Funcitonal component
//ReactElement- returns a react element.
import { Grid } from  '@mui/material'; //imports Grid from material ui
import { TaskArea } from '../../components/taskArea/taskArea';
import { Sidebar } from '../../components/Sidebar/Sidebar';

export const Dashboard: FC = (): ReactElement => {
    return (
        <Grid container minHeight="100vh" p={0} m={0}>
          <TaskArea/>
          <Sidebar/>            
        </Grid>
    )
};