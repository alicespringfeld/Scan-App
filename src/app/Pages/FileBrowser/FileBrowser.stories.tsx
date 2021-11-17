import React from 'react';
import FileBrowser from './FileBrowser';

export default {
  component: 'FileBrowser',
  title: 'Pages/FileBrowser',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => <FileBrowser />;
