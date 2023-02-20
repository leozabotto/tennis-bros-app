import { styled } from 'stiches.config';

interface InputProps {
  type: string;
  id: string;
  name?: string;
  label: string;
  [rest: string]: any;
}

const StyledInput = styled('input', {
  border: '1px solid $gray100',
  color: '$gray300',
  borderRadius: '$sm',
  height: '40px',
  width: '100%',
  padding: '2px 10px',
  fontWeight: '$medium',

  '&:focus': {
    outlineColor: '$primary100',
  },
});

const StyledLabel = styled('label', {
  display: 'block',
  color: '$gray300',
  fontWeight: '$medium',
  marginBottom: '4px',
});

export default function Input({ type, name, label, id, ...rest }: InputProps) {
  return (
    <>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput type={type} name={name} id={id} {...rest} />
    </>
  );
}
