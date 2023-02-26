import Link from 'next/link';
import { styled } from 'stiches.config';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const StyledLink = styled(Link, {
  color: '$c-green-200',
  textDecoration: 'underline',
});

export default function CustomLink({ href, children }: LinkProps) {
  return (
    <>
      <StyledLink href={href}>{children}</StyledLink>
    </>
  );
}
