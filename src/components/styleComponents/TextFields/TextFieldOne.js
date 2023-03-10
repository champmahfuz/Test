import { styled, TextField } from '@mui/material';

const TextFieldOne = styled(TextField)` 
    '& label.Mui-focused': {
      color: '#4527a0',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#4527a0',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: '2px solid #4527a0',
        margin: '10px'
      },
      '&:hover fieldset': {
        borderColor: '#4527a0',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#4527a0',
      },
    },
  });

`;

export default TextFieldOne;