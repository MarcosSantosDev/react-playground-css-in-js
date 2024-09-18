import { memo } from 'react';

import { useNavigate } from 'react-router-dom';

import { Icon } from '@/components';
import type { IconNames } from '@/components/Icon/Icon';

import * as S from './Menu.styled';

type MenuItemProps = {
  path: string;
  title: string;
  iconName?: IconNames;
  isActive: boolean;
  panelIsOpened?: boolean;
};

const MenuItem = ({
  path,
  title,
  iconName,
  isActive,
  panelIsOpened = false,
}: MenuItemProps) => {
  const navigate = useNavigate();

  return (
    <S.MenuItem
      className={isActive ? 'active' : ''}
      onClick={() => navigate(path ?? '')}
      hiddenItem={!panelIsOpened}
    >
      {iconName && <Icon size={20} name={iconName} />}
      <S.Item hiddenItem={!panelIsOpened}>{title}</S.Item>
    </S.MenuItem>
  );
};

export default memo(MenuItem);
