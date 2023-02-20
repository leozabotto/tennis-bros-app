import { styled } from 'stiches.config';

interface LogoTypographyProps {
  classes?: string;
}

const StyledH1 = styled('h1', {
  color: '$c-gray-300',
  fontWeight: 'bold',
  fontSize: '$2xl',
});

export default function LogoTypography({ classes }: LogoTypographyProps) {
  return <StyledH1 className={classes}>Tennis Bros</StyledH1>;
}
