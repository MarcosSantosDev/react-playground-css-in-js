import * as React from 'react';

import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

import { iconsSvg } from './iconsSvg';

const fallback = <div style={{ background: '#ddd', width: 24, height: 24 }} />;

type IconSVGNames = keyof typeof iconsSvg;
type LucideIconNames = keyof typeof dynamicIconImports;

export type IconNames = LucideIconNames | IconSVGNames;

type IconProps = Omit<LucideProps, 'ref'> & {
  name: IconNames;
};

const Icon = ({ name, ...props }: IconProps) => {
  const iconSvgName = name as IconSVGNames;

  if (iconsSvg?.[iconSvgName]) {
    const IconSVG = iconsSvg[iconSvgName];
    return (
      <React.Suspense fallback={fallback}>
        <IconSVG width={props.size} height={props.size} />
      </React.Suspense>
    );
  }

  const lucideIconName = name as LucideIconNames;

  const LucideIcon = React.lazy(dynamicIconImports[lucideIconName]);

  return (
    <React.Suspense fallback={fallback}>
      <LucideIcon {...props} />
    </React.Suspense>
  );
};

export default Icon;
