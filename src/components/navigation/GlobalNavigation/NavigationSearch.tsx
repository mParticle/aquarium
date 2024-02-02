import { Tooltip } from 'src/components'
import { Space } from 'src/components'
import { Center } from 'src/components'
import { Icon } from 'src/components'
import { Button } from 'src/components'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { NavItemHeight } from 'src/components/navigation/GlobalNavigation/GlobalNavigation'

interface INavigationSearchProps {
  onClick: () => void
}

export function NavigationSearch(props: INavigationSearchProps) {
  return (
    <>
      <Tooltip
        placement="right"
        title={
          <Space size="large">
            <>Search</>
            <>Ctrl + K</>
          </Space>
        }
      >
        <Center style={{ height: NavItemHeight }}>
          <Button onClick={props.onClick} icon={<Icon icon={faSearch}></Icon>}></Button>
        </Center>
      </Tooltip>
    </>
  )
}