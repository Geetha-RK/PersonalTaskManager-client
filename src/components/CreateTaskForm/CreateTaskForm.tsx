import { Box, Typography, Stack } from '@mui/material';
import { FC, ReactElement } from 'react';
import { TaskTitleField } from './_taskTitleField';
import { TaskDescriptionField } from './_taskDescriptionField';
import { TaskDateField } from './_taskDateField';
import { TaskSelectField } from './_taskSelectField';
//mport enums to pass the values as props to the components.
import { Status } from './enums/Status';
import { Priority } from './enums/Priority';


export const CreateTaskForm: FC = (): ReactElement => {
    return (
        <Box 
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            width="100%"
            px={4}
            my={6}
        >
            <Typography mb={2} component="h2" variant="h6">
                Create a Task
            </Typography>

            {/* {Stack component form MUI will help to give spacing between the components within.} */}
            <Stack sx={{ width: '100%' }} spacing={2}>
                <TaskTitleField />
                <TaskDescriptionField/>
                <TaskDateField />

                {/* new stack to have the status and priority component in row */}
                <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
                        <TaskSelectField 
                            label="Status" 
                            name="Status" 
                            items={[
                                {
                                    value: Status.todo,
                                    label: Status.todo.toUpperCase(),
                                },
                                {
                                    value: Status.inProgress,
                                    label: Status.inProgress.toUpperCase(),
                                }
                            ]}
                        />
                     <TaskSelectField
                        label="Priority" 
                        name="Priority" 
                        items={[
                            {
                                value:Priority.low,
                                label:Priority.low,
                            },
                            {
                                value:Priority.normal,
                                label:Priority.normal,
                            },
                            {
                                value:Priority.high,
                                label:Priority.high,
                            },
                        ]}
                     />
                </Stack>
                
            </Stack>
        </Box>
    );
}