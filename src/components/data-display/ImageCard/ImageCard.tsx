import React from 'react'
import { Card } from 'src/components/data-display/Card/Card'
import { Image } from 'src/components/data-display/Image/Image'
import { Tag } from 'src/components/data-display/Tag/Tag'
import { Spin } from 'src/components/feedback/Spin/Spin'
import { CheckOutlined } from '@ant-design/icons'
import { BorderRadiusSm, ColorBgBase, PaddingSm, PaddingXs } from 'src/styles/style'

const ColorBeetroot = '#A8203E'

export interface IImageCardProps {
  src: string
  alt?: string
  selected?: boolean
  onChange?: (selected: boolean) => void
  tag?: React.ReactNode | string
  tagColor?: string
  loading?: boolean
  width?: number | string
  height?: number | string
  className?: string
  style?: React.CSSProperties
  onClick?: (e: React.MouseEvent) => void
  'data-testid'?: string
}

export const ImageCard = (props: IImageCardProps): React.JSX.Element => {
  const {
    src,
    alt = 'Image',
    selected = false,
    onChange,
    tag,
    tagColor,
    loading = false,
    width,
    height,
    className = '',
    style,
    onClick,
    'data-testid': dataTestId,
  } = props

  const handleClick = (e: React.MouseEvent): void => {
    onChange?.(!selected)
    onClick?.(e)
  }

  return (
    <div
      onClick={handleClick}
      style={{
        position: 'relative',
        width,
        height,
        cursor: 'pointer',
      }}
      data-testid={dataTestId}>
      <Card
        className={className}
        cover={<Image src={src} alt={alt} preview={false} width="100%" height="100%" />}
        style={{
          boxShadow: selected ? `0 0 0 2px ${ColorBeetroot}` : undefined,
          height: '100%',
          ...style,
        }}
      />

      {loading && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: `${ColorBgBase}cc`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Spin />
        </div>
      )}

      {selected && (
        <div
          style={{
            position: 'absolute',
            top: PaddingSm,
            left: PaddingSm,
            padding: 2,
            borderRadius: BorderRadiusSm,
            backgroundColor: ColorBeetroot,
          }}>
          <div
            style={{
              width: 16,
              height: 16,
              padding: 2,
              borderRadius: BorderRadiusSm,
              backgroundColor: ColorBeetroot,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <CheckOutlined style={{ color: ColorBgBase }} />
          </div>
        </div>
      )}

      {tag && selected && (
        <div style={{ position: 'absolute', bottom: PaddingXs, right: PaddingXs }}>
          {typeof tag === 'string' ? <Tag color={tagColor}>{tag}</Tag> : tag}
        </div>
      )}
    </div>
  )
}
