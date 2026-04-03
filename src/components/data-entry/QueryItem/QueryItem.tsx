import React from 'react'
import { Center, Typography } from 'src/components'
import ValueSelector from 'src/components/data-entry/QueryItem/ValueSelector'
import Action from 'src/components/data-entry/QueryItem/Action'
import Text from 'src/components/data-entry/QueryItem/Text'
import Qualifier from 'src/components/data-entry/QueryItem/Qualifier'

/**
 * @deprecated The QueryItem component group is deprecated and will not receive further updates.
 * Avoid using it in new implementations.
 */
export const QueryItem = () => {
  return (
    <Center>
      <Typography.Text>
        Deprecated
        <br />
        This component is deprecated and will not receive further updates. Avoid using it in new implementations.
      </Typography.Text>
    </Center>
  )
}
QueryItem.Action = Action
QueryItem.Qualifier = Qualifier
QueryItem.ValueSelector = ValueSelector
QueryItem.Text = Text
