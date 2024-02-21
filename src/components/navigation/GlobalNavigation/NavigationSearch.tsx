import { Tooltip } from 'src/components'
import { Space } from 'src/components'
import { Center } from 'src/components'
import { Button } from 'src/components'
import MpLogo from 'src/assets/svg/mpLogo.svg?react'

interface INavigationSearchProps {
  onClick: () => void
}

export function NavigationSearch(props: INavigationSearchProps) {
  return (
    <span className="globalNavigation__search" onClick={props.onClick}>
      <Tooltip
        placement="right"
        title={
          <Space size="large">
            <>Search</>
            <>Ctrl + K</>
          </Space>
        }
      >
        <Center className="globalNavigation__searchButtonWrapper">
          <Button className="globalNavigation__searchButton" shape="round" icon={<MpLogo className="globalNavigation__searchIcon"/>} />
        </Center>
      </Tooltip>
    </span>
  )
}