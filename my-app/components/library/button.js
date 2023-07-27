import React from 'react';

// const Button = ({ type, rounding, children, icon, iconPosition, size }) => {
//   let buttonStyle = '';
//   let roundingStyle = '';
//   let paddingStyle = '';

//   switch (type) {
//     case 'primary':
//       buttonStyle = 'bg-indigo-600 text-white hover:bg-indigo-500';
//       break;
//     case 'secondary':
//       buttonStyle =
//         'bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50';
//       break;
//     case 'icon':
//       buttonStyle = 'bg-indigo-600 text-white hover:bg-indigo-500';
//       break;
//     default:
//       break;
//   }

//   switch (rounding) {
//     case 'none':
//       roundingStyle = '';
//       break;
//     case 'rounded':
//       roundingStyle = 'rounded-md';
//       break;
//     case 'pill':
//       roundingStyle = 'rounded-full';
//       break;
//     default:
//       break;
//   }

//   switch (size) {
//     case 'xs':
//       paddingStyle = 'px-2.5 py-1';
//       break;
//     case 'sm':
//       paddingStyle = 'px-3 py-2';
//       break;
//     case 'md':
//       paddingStyle = 'px-3.5 py-2.5';
//       break;
//     case 'lg':
//       paddingStyle = 'px-4 py-2.5';
//       break;
//     default:
//       break;
//   }

//   let iconElement = icon
//     ? React.createElement(icon, {
//         className: `h-5 w-5 ${iconPosition === 'left' ? '-ml-0.5' : '-mr-0.5'}`,
//       })
//     : null;

//   return (
//     <button
//       type='button'
//       className={`inline-flex items-center gap-x-1.5 ${buttonStyle} ${roundingStyle} ${paddingStyle} text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
//     >
//       {iconPosition === 'left' && iconElement}
//       {children}
//       {iconPosition === 'right' && iconElement}
//     </button>
//   );
// };

// export default Button;

export const Button = ({
  type,
  rounding,
  children,
  icon,
  iconPosition,
  size = 'sm',
}) => {
  let buttonStyle = '';
  let roundingStyle = '';
  let paddingStyle = '';

  switch (type) {
    case 'primary':
      buttonStyle = 'bg-indigo-600 text-white hover:bg-indigo-500';
      break;
    case 'secondary':
      buttonStyle =
        'bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50';
      break;
    case 'icon':
      buttonStyle = 'bg-indigo-600 text-white hover:bg-indigo-500';
      break;
    default:
      break;
  }

  switch (rounding) {
    case 'none':
      roundingStyle = '';
      break;
    case 'rounded':
      roundingStyle = 'rounded-md';
      break;
    case 'pill':
      roundingStyle = 'rounded-full';
      break;
    default:
      break;
  }

  switch (size) {
    case 'xs':
      paddingStyle = 'px-2.5 py-1';
      break;
    case 'sm':
      paddingStyle = 'px-3 py-2';
      break;
    case 'md':
      paddingStyle = 'px-3.5 py-2.5';
      break;
    case 'lg':
      paddingStyle = 'px-4 py-2.5';
      break;
    default:
      break;
  }

  let iconElement = icon
    ? React.createElement(icon, {
        className: `h-5 w-5 ${iconPosition === 'left' ? '-ml-0.5' : '-mr-0.5'}`,
      })
    : null;
  return (
    <button
      type='button'
      style={{
        backgroundColor: 'blue',
        color: 'white',
        border: '3px solid red',
      }}
      className={` inline-flex items-center gap-x-1.5 ${buttonStyle} ${roundingStyle} ${paddingStyle} text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
    >
      {iconPosition === 'left' && iconElement}
      {children}
      {iconPosition === 'right' && iconElement}
    </button>
  );
};
