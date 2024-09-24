import * as S from './StoryWrapper.styled';

const StoryWrapper = ({ children }: React.PropsWithChildren) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default StoryWrapper;
