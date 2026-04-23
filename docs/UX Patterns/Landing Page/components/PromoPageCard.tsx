import { Button, Flex, Typography } from 'src/components'
import { MarginXs, Size } from 'src/styles/style'

export interface PromoPageCardDisplayOptions {
  src: string
  text: string
  type: 'link' | 'img'
}

export interface PromoPageCardProps {
  title: string
  description: string
  displayOptions: PromoPageCardDisplayOptions
}

export const PromoPageCard = ({ title, description, displayOptions }: PromoPageCardProps) => {
  const { type, src, text } = displayOptions

  return (
    <Flex vertical gap={Size} style={{ maxWidth: 320 }}>
      {type === 'img' && (
        <img src={src} alt={text} style={{ width: '100%', height: 'auto', borderRadius: 8, display: 'block' }} />
      )}

      <Flex vertical align="center">
        <Typography.Text strong size="lg">
          {title}
        </Typography.Text>

        <Typography.Paragraph
          color="ColorTextDescription"
          style={{ margin: 0, marginBottom: MarginXs, textAlign: 'center' }}>
          {description}
        </Typography.Paragraph>

        {type === 'link' && (
          <Button type="link" href={src} target="_blank" rel="noopener noreferrer">
            {text}
          </Button>
        )}
      </Flex>
    </Flex>
  )
}
