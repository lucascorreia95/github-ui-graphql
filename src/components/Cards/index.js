import React from 'react';

import SingleCard from './SingleCard';

export default function Cards(props) {
  return (
    props.data.search.edges.map((item) => (
      <SingleCard key={item.node.id} item={item.node} />
    ))
  );
}
