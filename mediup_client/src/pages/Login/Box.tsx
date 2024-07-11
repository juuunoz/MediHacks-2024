// src/components/Box.tsx

import React from 'react';

interface BoxProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  border?: string;
  padding?: string;
  margin?: string;
  borderRadius?: string;
  children?: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ 
  width = '70%', 
  height = 'auto', 
  backgroundColor = 'yellow', 
  border = 'none', 
  padding = '0', 
  margin = '0', 
  borderRadius = '5px',

  children 
}) => {
  const style = {
    width,
    height,
    backgroundColor,
    border,
    padding,
    margin,
    borderRadius
  };

  return <div style={style}>{children}</div>;
};

export default Box;
