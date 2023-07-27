// import React from 'react';
// import { getResponsiveClasses } from './getResponsiveClasses';

// export const ButtonGroup = ({
//   isAttached = false,
//   isDisabled = false,
//   spacing = 2,
//   children,
//   className,
// }) => {
//   const buttonGroupBaseClasses = 'inline-flex items-center';
//   const buttonGroupSpacingClasses = `space-x-${getResponsiveClasses(spacing)}`;
//   const buttonGroupAttachedClasses = isAttached ? 'rounded' : '';
//   const buttonGroupDisabledClasses = isDisabled
//     ? 'opacity-50 cursor-not-allowed'
//     : '';

//   return (
//     <div
//       className={`${buttonGroupBaseClasses} ${buttonGroupSpacingClasses} ${buttonGroupAttachedClasses} ${buttonGroupDisabledClasses} ${className}`}
//     >
//       {children}
//     </div>
//   );
// };
