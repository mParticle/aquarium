import { Center, Empty } from 'src/components'

export const WorkspaceSearchLabel = () => (
  <div className="workspaceSelector__noResults">
    <Center>
      <Empty description="No results found" imageStyle={{ height: '60px' }}></Empty>
    </Center>
  </div>
)
