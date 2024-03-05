import { Center, Empty } from 'src/components'

export const WorkspaceNoResults = () => (
  <Center className="workspaceSelector__noResults">
    <Empty description="No results found" imageStyle={{ height: '60px' }}></Empty>
  </Center>
)
