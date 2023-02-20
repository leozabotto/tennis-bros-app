import { styled } from 'stiches.config';

interface ButtonProps {
  children: string;
  onClick: () => void;
}

const StyledButton = styled('button', {
  backgroundColor: '$primary100',
  fontWeight: '$medium',
  color: '$white',
  borderRadius: '$full',
  width: '100%',
  height: '40px',
  transition: '$short',

  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '$primary200',
    transition: '$short',
  },
});

export default function Button({ children, onClick }: ButtonProps) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
