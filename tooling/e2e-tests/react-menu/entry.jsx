import '../setup/entry.css';
import React from 'react';
import { defaultPlugins, defaultSpecs } from '@bangle.dev/all-base-components';
import { SpecRegistry, PluginKey } from '@bangle.dev/core';
import { sticker } from '@bangle.dev/react-sticker';
import { floatingMenu, FloatingMenu } from '@bangle.dev/react-menu';

import { setupReactEditor } from '../setup/entry-helpers';

setup();

function setup() {
  window.commands = {
    floatingMenu: floatingMenu.commands,
    sticker: sticker.commands,
  };

  window.floatMenuKey = new PluginKey('floatingmenukey');

  const renderNodeViews = ({ node, ...args }) => {
    if (node.type.name === 'sticker') {
      return <sticker.Sticker node={node} {...args} />;
    }
  };

  const specRegistry = new SpecRegistry([...defaultSpecs(), sticker.spec()]);
  const plugins = () => [
    ...defaultPlugins(),
    sticker.plugins(),
    floatingMenu.plugins({
      key: window.floatMenuKey,
    }),
  ];

  setupReactEditor({
    children: React.createElement(FloatingMenu, {
      menuKey: window.floatMenuKey,
    }),
    specRegistry,
    plugins,
    renderNodeViews,
    id: 'pm-root',
  });
}
