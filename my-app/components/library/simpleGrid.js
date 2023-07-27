import React from 'react';
import { getResponsiveClasses } from './getResponsiveClasses';

export const SimpleGrid = ({
  columns = [1, 2, 3, 4],
  gap = [4],
  minChildWidth = ['100%', '50%', '33.33%', '25%'],
  children,
}) => {
  // Getting responsive classes for each prop
  const columnClasses = getResponsiveClasses(columns)
    .split(' ')
    .map((col) => `grid-cols-${col}`)
    .join(' ');
  const gapClasses = getResponsiveClasses(gap)
    .split(' ')
    .map((g) => `gap-${g}`)
    .join(' ');
  const minChildWidthClasses = getResponsiveClasses(minChildWidth)
    .split(' ')
    .map((w) => `min-w-${w}`)
    .join(' ');

  return (
    <div
      className={`${columnClasses} ${gapClasses} ${minChildWidthClasses} grid`}
    >
      {children}
    </div>
  );
};
