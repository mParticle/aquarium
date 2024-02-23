import { Input } from 'src/components'

export const WorkspaceInputLabel = ({
  onSearch,
  searchTerm,
}: {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
  searchTerm: string
}) => (
  <>
    <Input
      placeholder="Search"
      className="workspaceSelector__searchInput"
      onChange={onSearch}
      value={searchTerm}
      onClick={e => {
        e.preventDefault()
        e.stopPropagation()
      }}
    />
  </>
)