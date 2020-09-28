import React from 'react';

const Link = ({className, href, children}) => {
  return <a data-testid="Link" className={className} href={href}>{children}</a>
};


export default Link;
