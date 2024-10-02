import { Icon } from '../Icon/Icon';
import type { IconNames } from '../Icon/Icon';
import * as S from './Button.styles';
import type { ButtonStyledProps } from './Button.styles';

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
      {icon && icon.align === 'left' && <Icon name={icon.name} size={14} />}
      <S.ButtonChildren>{children}</S.ButtonChildren>
      {icon && icon.align === 'right' && <Icon name={icon.name} size={14} />}
    </S.Button>
  );
};
