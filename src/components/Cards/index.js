import React from 'react';

import SingleCard from './SingleCard';

export default function Cards(props) {
  return (
    props.data.items.map((item) => (
      <SingleCard key={item.id} item={item} />
    ))
  );
}
