import React, { useState, useCallback } from 'react'
import { Drawer, Icon, MoreActionsButton, type IDrawerProps } from 'src/components'
import { Typography } from 'src/components/general/Typography/Typography'
import './ManageColumnsDrawer.css'

export interface IColumnItem {
  /**
   * Unique identifier for the column
   */
  id: string
  /**
   * Display label for the column
   */
  label: string
}

export interface IManageColumnsDrawerProps extends Omit<IDrawerProps, 'children' | 'title'> {
  /**
   * Whether the drawer is open
   */
  open: boolean
  /**
   * Handler called when the drawer is closed
   */
  onClose: () => void
  /**
   * List of dimension columns
   */
  dimensions: IColumnItem[]
  /**
   * List of metric columns
   */
  metrics: IColumnItem[]
  /**
   * Handler called when dimensions are reordered
   */
  onDimensionsChange: (dimensions: IColumnItem[]) => void
  /**
   * Handler called when metrics are reordered
   */
  onMetricsChange: (metrics: IColumnItem[]) => void
  /**
   * Handler called when a column is renamed
   */
  onRenameColumn?: (columnId: string, type: 'dimension' | 'metric') => void
  /**
   * Handler called when a column is removed
   */
  onRemoveColumn?: (columnId: string, type: 'dimension' | 'metric') => void
  /**
   * Custom title for the drawer
   */
  title?: string
  /**
   * Custom description text
   */
  description?: string
  /**
   * Label for the dimensions section
   */
  dimensionsLabel?: string
  /**
   * Label for the metrics section
   */
  metricsLabel?: string
  /**
   * Width of the drawer
   */
  width?: number
}

interface IColumnRowProps {
  item: IColumnItem
  type: 'dimension' | 'metric'
  index: number
  onDragStart: (e: React.DragEvent, index: number, type: 'dimension' | 'metric') => void
  onDragOver: (e: React.DragEvent, index: number) => void
  onDragEnd: () => void
  onDrop: (e: React.DragEvent, index: number, type: 'dimension' | 'metric') => void
  isDragging: boolean
  isDraggedOver: boolean
  onRename?: () => void
  onRemove?: () => void
}

const ColumnRow: React.FC<IColumnRowProps> = ({
  item,
  type,
  index,
  onDragStart,
  onDragOver,
  onDragEnd,
  onDrop,
  isDragging,
  isDraggedOver,
  onRename,
  onRemove,
}) => {
  const menuItems = {
    items: [
      ...(onRename
        ? [
            {
              key: 'rename',
              label: (
                <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12 }}>
                  <Icon name="edit" size="xs" />
                  Rename
                </span>
              ),
              onClick: onRename,
            },
          ]
        : []),
      ...(onRemove
        ? [
            {
              key: 'remove',
              className: 'manage-columns-menu-item--remove',
              label: (
                <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12 }}>
                  <Icon name="delete" size="xs" />
                  Remove
                </span>
              ),
              onClick: onRemove,
            },
          ]
        : []),
    ],
  }

  const showMoreActions = onRename ?? onRemove

  return (
    <div
      className={`manage-columns-row ${isDragging ? 'manage-columns-row--dragging' : ''} ${
        isDraggedOver ? 'manage-columns-row--drag-over' : ''
      }`}
      draggable
      onDragStart={e => onDragStart(e, index, type)}
      onDragOver={e => onDragOver(e, index)}
      onDragEnd={onDragEnd}
      onDrop={e => onDrop(e, index, type)}>
      <div className="manage-columns-row__drag-handle">
        <Icon name="dragAndDrop" size="md" color="default" />
      </div>
      <div className="manage-columns-row__label">
        <Typography.Text>{item.label}</Typography.Text>
      </div>
      {showMoreActions && (
        <div className="manage-columns-row__actions">
          <MoreActionsButton menuItems={menuItems} />
        </div>
      )}
    </div>
  )
}

export const ManageColumnsDrawer: React.FC<IManageColumnsDrawerProps> = ({
  open,
  onClose,
  dimensions,
  metrics,
  onDimensionsChange,
  onMetricsChange,
  onRenameColumn,
  onRemoveColumn,
  title = 'Manage columns',
  description = 'Reorder columns by dragging, or use the dropdown to rename or remove.',
  dimensionsLabel = 'Current dimensions',
  metricsLabel = 'Current metrics',
  width = 440,
  ...drawerProps
}) => {
  const [dragState, setDragState] = useState<{
    draggedIndex: number | null
    draggedType: 'dimension' | 'metric' | null
    dragOverIndex: number | null
    dragOverType: 'dimension' | 'metric' | null
  }>({
    draggedIndex: null,
    draggedType: null,
    dragOverIndex: null,
    dragOverType: null,
  })

  const handleDragStart = useCallback((e: React.DragEvent, index: number, type: 'dimension' | 'metric') => {
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/plain', '') // Required for Firefox
    setDragState(prev => ({
      ...prev,
      draggedIndex: index,
      draggedType: type,
    }))
  }, [])

  const handleDragOver = useCallback(
    (e: React.DragEvent, index: number, type: 'dimension' | 'metric') => {
      e.preventDefault()
      e.dataTransfer.dropEffect = 'move'

      if (dragState.draggedType === type) {
        setDragState(prev => ({
          ...prev,
          dragOverIndex: index,
          dragOverType: type,
        }))
      }
    },
    [dragState.draggedType],
  )

  const handleDragEnd = useCallback(() => {
    setDragState({
      draggedIndex: null,
      draggedType: null,
      dragOverIndex: null,
      dragOverType: null,
    })
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent, dropIndex: number, type: 'dimension' | 'metric') => {
      e.preventDefault()

      const { draggedIndex, draggedType } = dragState

      if (draggedIndex === null || draggedType === null || draggedType !== type) {
        handleDragEnd()
        return
      }

      if (draggedIndex === dropIndex) {
        handleDragEnd()
        return
      }

      const items = type === 'dimension' ? [...dimensions] : [...metrics]
      const [draggedItem] = items.splice(draggedIndex, 1)
      items.splice(dropIndex, 0, draggedItem)

      if (type === 'dimension') {
        onDimensionsChange(items)
      } else {
        onMetricsChange(items)
      }

      handleDragEnd()
    },
    [dragState, dimensions, metrics, onDimensionsChange, onMetricsChange, handleDragEnd],
  )

  const renderSection = (items: IColumnItem[], type: 'dimension' | 'metric', label: string) => (
    <div className="manage-columns-section">
      <div className="manage-columns-section__header">
        <Typography.Text type="secondary" size="sm">
          {label}
        </Typography.Text>
      </div>
      <div className="manage-columns-section__list">
        {items.map((item, index) => (
          <ColumnRow
            key={item.id}
            item={item}
            type={type}
            index={index}
            onDragStart={handleDragStart}
            onDragOver={e => handleDragOver(e, index, type)}
            onDragEnd={handleDragEnd}
            onDrop={handleDrop}
            isDragging={dragState.draggedIndex === index && dragState.draggedType === type}
            isDraggedOver={dragState.dragOverIndex === index && dragState.dragOverType === type}
            onRename={onRenameColumn ? () => onRenameColumn(item.id, type) : undefined}
            onRemove={onRemoveColumn ? () => onRemoveColumn(item.id, type) : undefined}
          />
        ))}
      </div>
    </div>
  )

  return (
    <Drawer
      title={
        <Typography.Text size="lg" strong>
          {title}
        </Typography.Text>
      }
      open={open}
      onClose={onClose}
      width={width}
      className="manage-columns-drawer"
      {...drawerProps}>
      <div className="manage-columns-content">
        <div className="manage-columns-description">
          <Typography.Text type="secondary">{description}</Typography.Text>
        </div>

        {dimensions.length > 0 && renderSection(dimensions, 'dimension', dimensionsLabel)}
        {metrics.length > 0 && renderSection(metrics, 'metric', metricsLabel)}
      </div>
    </Drawer>
  )
}
