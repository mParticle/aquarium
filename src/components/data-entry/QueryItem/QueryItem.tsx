import React from 'react'
import { Center, Typography } from 'src/components'
import ValueSelector from 'src/components/data-entry/QueryItem/ValueSelector'
import Action from 'src/components/data-entry/QueryItem/Action'
import Text from 'src/components/data-entry/QueryItem/Text'
import Qualifier from 'src/components/data-entry/QueryItem/Qualifier'

export const QueryItem = () => {
  return (
    <Center>
      <Typography.Text>
        Component Candidate: Under Review
        <br />
        This component is pending review and should not be used at this time.
      </Typography.Text>
    </Center>
  )
}
QueryItem.Action = Action
QueryItem.Qualifier = Qualifier
QueryItem.ValueSelector = ValueSelector
QueryItem.Text = Text
