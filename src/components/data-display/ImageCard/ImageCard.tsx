import React from 'react'
import { Card } from 'src/components/data-display/Card/Card'
import { Image } from 'src/components/data-display/Image/Image'
import { Tag } from 'src/components/data-display/Tag/Tag'
import { Spin } from 'src/components/feedback/Spin/Spin'
import { CheckOutlined } from '@ant-design/icons'
import { BorderRadiusSm, ColorBgBase, PaddingSm, PaddingXs } from 'src/styles/style'
import { Flex } from 'src/components/layout/Flex/Flex'
import { Typography } from 'src/components/general/Typography/Typography'

const ColorBeetroot = '#C20075'

export interface IImageCardProps {
  src: string
  alt?: string
  selected?: boolean
  onChange?: (selected: boolean) => void
  tag?: React.ReactNode | string
  tagColor?: string
  loading?: boolean
  size?: number | string
  title: string
  description: string
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
    size,
    title,
    description,
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
    <Flex vertical gap={PaddingXs} style={{ width: 'fit-content' }}>
      <div
        style={{
          position: 'relative',
          height: size,
          width: size,
          flexShrink: 0,
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

        {/* Clickable overlay */}
        <div
          onClick={handleClick}
          style={{
            position: 'absolute',
            inset: 0,
            cursor: 'pointer',
            zIndex: 1,
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
              zIndex: 2,
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
              zIndex: 2,
            }}>
            <div
              style={{
                width: 12,
                height: 12,
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

        {tag && (
          <div style={{ position: 'absolute', bottom: PaddingXs, right: PaddingXs, zIndex: 2 }}>
            {typeof tag === 'string' ? (
              <Tag color={tagColor}>
                <Flex gap={4} align="center">
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      backgroundColor: 'currentColor',
                    }}
                  />
                  {tag}
                </Flex>
              </Tag>
            ) : (
              tag
            )}
          </div>
        )}
      </div>

      <Flex vertical style={{ pointerEvents: 'none', userSelect: 'none', width: size }}>
        <Typography.Text
          style={{
            color: '#181D27',
            fontWeight: 600,
          }}>
          {title}
        </Typography.Text>
        <Typography.Text
          size="sm"
          style={{
            color: ColorBeetroot,
          }}>
          {description}
        </Typography.Text>
      </Flex>
    </Flex>
  )
}
