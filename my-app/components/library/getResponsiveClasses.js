// Utility function to get responsive classes
export const getResponsiveClasses = (value) => {
  if (Array.isArray(value)) {
    return value
      .map((val, idx) => {
        if (idx === 0) return val;
        else if (idx === 1) return `sm:${val}`;
        else if (idx === 2) return `md:${val}`;
        else if (idx === 3) return `lg:${val}`;
        else if (idx === 4) return `xl:${val}`;
        else if (idx === 5) return `2xl:${val}`;
      })
      .join(' ');
  } else {
    return value;
  }
};
