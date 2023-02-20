import Link from 'next/link';
import { styled } from 'stiches.config';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const StyledLink = styled(Link, {
  color: '$primary100',
  textDecoration: 'underline',
});

export default function Input({ href, children }: LinkProps) {
  return (
    <>
      <StyledLink href={href}>{children}</StyledLink>
    </>
  );
}
