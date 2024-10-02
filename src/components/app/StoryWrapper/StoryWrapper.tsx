import * as S from './StoryWrapper.styles';

const StoryWrapper = ({ children }: React.PropsWithChildren) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default StoryWrapper;
