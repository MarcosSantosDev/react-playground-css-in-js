import * as S from './CustomLink.styles';

type CustomLinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

const CustomLink = ({ to, children, className }: CustomLinkProps) => {
  return (
    <S.StyledLink to={to} className={className}>
      {children}
    </S.StyledLink>
  );
};

export default CustomLink;
