import { Box, Typography, Stack } from '@mui/material';
import { FC, ReactElement } from 'react';
import { TaskTitleField } from './_taskTitleField';
import { TaskDescriptionField } from './_taskDescriptionField';

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
                <TaskTitleField disabled/>
                <TaskDescriptionField/>

                {/* Task Date */}
                {/* Task Status and Priority*/}
            </Stack>
        </Box>
    );
}