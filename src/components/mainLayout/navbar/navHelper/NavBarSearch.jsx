import React from 'react';

export default function NavBarSearch() {
  return (
    <div className="absolute top-[1.2em] sm:right-[-4em] right-[-9em] sm:left-[-7em] left-[-2em] bg-secondary p-2 rounded-md ">
      <input
        id='search'
        className="p-1 rounded-md focus:outline-none"
        type="search"
        placeholder="search"
      />
    </div>
  );
}
