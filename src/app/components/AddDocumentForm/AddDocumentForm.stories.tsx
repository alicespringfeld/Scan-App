import React from 'react';
import AddDocumentForm from './AddDocumentForm';

export default {
  component: AddDocumentForm,
  title: 'Components/AddDocumentForm',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => <AddDocumentForm text="" />;
