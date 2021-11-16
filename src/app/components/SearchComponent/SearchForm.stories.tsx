import React from 'react';
import SearchForm from './SearchForm';

export default {
  component: SearchForm,
  title: 'Components/SearchForm',
};

export const Default = () => <SearchForm onSearch={console.log} />;
