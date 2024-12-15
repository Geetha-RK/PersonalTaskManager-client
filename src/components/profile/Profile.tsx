import { FC,ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

//TypeScript way for prop checking:
interface IProfile {
    name:string;  // if name?:string - it would be optional property
}

export const Profile: FC<IProfile> = (props): ReactElement => { // Generic type of IProfile passed to functional component.
    //Destructure props
    const{ name = 'Geetha' } = props; //Default value of name.
    return(
        <Box display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            >
            <Avatar 
                sx={{
                    width:'96px',
                    height:'96px',
                    backgroundColor: 'primary.main',
                    marginBottom: '16px',
                }}
            ><Typography variant="h4" color="text.primary">{`${name.substring(0,1)}`}</Typography>
            </Avatar>
            <Typography variant="h6" color="text.primary">{`Welcome, ${name}`}</Typography>
            <Typography variant="body1" color="text.primary">
                This is your personal tasks manager
            </Typography>
        </Box>
    )
};


//build in way of proptypes in react.
//npm i prop-types
//import PropTypes from prop-types

// Profile.propTypes = {
//     name: PropTypes.string.isRequired,  
// };

//Using Typescript for prop type checking. - Use interfaces. - IProfile

//Interfaces are Typescript concept. PropTypes are available in Javascript as well. Any error related to proptyes are logged to the browser console.
//whereas TypeScript helps only withn IDE.

//Interface in Typescript will show any errors in prop in the IDE terminal. where as the PropTypes in javascript will show the error in the runtime in the browser console.

