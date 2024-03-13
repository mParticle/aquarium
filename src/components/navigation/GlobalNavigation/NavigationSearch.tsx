import { Tooltip } from 'src/components'
import { Space } from 'src/components'
import { Center } from 'src/components'
import { Button } from 'src/components'
import SearchIcon from 'src/assets/svg/search.svg?react'
import { getOS } from 'src/utils/utils'

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
            <>{getOS() === 'Macintosh' ? 'Cmd' : 'Ctrl'} + K</>
          </Space>
        }
      >
        <Center className="globalNavigation__searchButtonWrapper">
          <Button
            className="globalNavigation__searchButton"
            shape="round"
            icon={<SearchIcon className="globalNavigation__searchIcon" />}
          />
        </Center>
      </Tooltip>
    </span>
  )
}
