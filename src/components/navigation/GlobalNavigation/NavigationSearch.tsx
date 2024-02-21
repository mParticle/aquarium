import { Tooltip } from 'src/components'
import { Space } from 'src/components'
import { Center } from 'src/components'
import { Button } from 'src/components'
import SearchIcon from 'src/assets/svg/search.svg?react'

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
          <Button className="globalNavigation__searchButton" shape="round" icon={<SearchIcon className="globalNavigation__searchIcon"/>} />
        </Center>
      </Tooltip>
    </span>
  )
}