import React from 'react'
import { addons } from 'storybook/manager-api'
import customTheme from './theme'
import { Badge } from 'antd'

import './manager.css'

addons.setConfig({
  theme: customTheme,
  sidebar: {
    renderLabel: item => {
      if (item.tags?.includes('deprecated')) {
        return (
          <div title={item.name}>
            <span>{item.name}</span>
            <Badge.Ribbon
              rootClassName="componentTag__container--beta"
              className="componentTag__badge--beta"
              text="Deprecated"
            />
          </div>
        )
      }

      return item.name
    },
  },
})
