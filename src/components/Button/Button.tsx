import { Icon } from '../Icon/Icon';
import type { IconNames } from '../Icon/Icon';
import * as S from './Button.styled';
import type { ButtonStyledProps } from './Button.styled';

type ButtonIconProps = {
  name: IconNames;
  align: 'left' | 'right';
};

export type ButtonProps = ButtonStyledProps & {
  icon?: ButtonIconProps;
};

export const Button = ({
  children,
  align = 'center',
  icon,
  ...buttonProps
}: ButtonProps) => {
  return (
    <S.Button {...buttonProps} align={align}>
      {icon && icon.align === 'left' && <Icon name={icon.name} size={20} />}
      <S.ButtonChildren>{children}</S.ButtonChildren>
      {icon && icon.align === 'right' && <Icon name={icon.name} size={20} />}
    </S.Button>
  );
};
