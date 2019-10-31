import React from 'react';
import SingleCard from './components/SingleCard';

export const Cards = ({ data }) => (
  data.search.edges.map((item) => (
    <SingleCard key={item.node.id} item={item.node} />
  ))
);
