import React from 'react';

export default function Logo(props) { 
  return (
    <div>
      <img className="hidden md:block cursor-pointer w-[100] h-[50px]" src={props.logo} alt='Logo' />
    </div>
  );
}
