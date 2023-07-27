import React from 'react';
import { getResponsiveClasses } from './getResponsiveClasses';

const baseClasses = 'flex space-x-0 space-y-0';

const directionClasses = {
  row: 'flex-row',
  column: 'flex-col',
};

const justifyClasses = {
  start: 'justify-start',
  end: 'justify-end',
  center: 'justify-center',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

const alignClasses = {
  start: 'items-start',
  end: 'items-end',
  center: 'items-center',
  baseline: 'items-baseline',
  stretch: 'items-stretch',
};

export const Stack = ({
  direction = ['column', 'row'],
  justify = 'start',
  align = 'start',
  spacing = '4',
  children,
}) => {
  const directionClass = getResponsiveClasses(direction)
    .split(' ')
    .map((dir) => directionClasses[dir])
    .join(' ');
  const justifyClass = justifyClasses[justify];
  const alignClass = alignClasses[align];
  const spacingClass = `space-x-${spacing} space-y-${spacing}`;

  return (
    <div
      className={`${baseClasses} ${directionClass} ${spacingClass} ${justifyClass} ${alignClass}`}
    >
      {children}
    </div>
  );
};

export const VStack = ({
  justify = 'start',
  align = 'start',
  spacing = '4',
  children,
}) => {
  return (
    <Stack
      direction='column'
      spacing={spacing}
      justify={justify}
      align={align}
    >
      {children}
    </Stack>
  );
};

export const HStack = ({
  justify = 'start',
  align = 'start',
  spacing = '4',
  children,
}) => {
  return (
    <Stack
      direction='row'
      spacing={spacing}
      justify={justify}
      align={align}
    >
      {children}
    </Stack>
  );
};
