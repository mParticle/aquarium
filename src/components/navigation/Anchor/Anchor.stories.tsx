import { type Meta, type StoryObj } from '@storybook/react'
import { Anchor } from 'src/components/navigation/Anchor/Anchor'
import { ExampleStory } from 'src/utils/ExampleStory'
import { Row } from 'src/components'
import { Col } from 'src/components'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'

const meta: Meta<typeof Anchor> = {
  title: 'Components/Navigation/Anchor',
  component: Anchor,

  args: {
    affix: true,
    bounds: 5,
    offsetTop: 0,
    showInkInFixed: false,
    targetOffset: undefined,
    direction: 'vertical',
    replace: false,
    items: [
      {
        key: '1',
        href: '#section1',
        title: 'Section 1',
        target: '_blank',
        children: [],
      },
      {
        key: '2',
        href: '#section2',
        title: 'Section 2',
        target: '_blank',
        children: [],
      },
    ],
    onClick: (e: React.MouseEvent, link: object) => {
      alert('Anchor Click')
    },
    // onChange: (currentActiveLink: string) => { alert('Anchor Change') },
    // getContainer: () => window,
    // getCurrentAnchor: (activeLink: string) => activeLink,
  },

  argTypes: {
    direction: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
  },
}
export default meta

type Story = StoryObj<typeof Anchor>

/*
  Initial story templates generated by AI.
  Customize the stories based on specific requirements.
*/

export const Primary: Story = {}

export const HorizontalDirection: Story = {
  args: {
    direction: 'horizontal',
  },
}

export const WithCustomItems: Story = {
  args: {
    items: [
      {
        key: 'a',
        href: '#itemA',
        title: 'Item A',
        target: '_blank',
        children: [],
      },
      {
        key: 'b',
        href: '#itemB',
        title: 'Item B',
        target: '_blank',
        children: [],
      },
      {
        key: 'c',
        href: '#itemC',
        title: 'Item C',
        target: '_blank',
        children: [],
      },
      {
        key: 'd',
        href: '#itemD',
        title: 'Item D',
        target: '_blank',
        children: [],
      },
    ],
  },
}

export const ShowInkInFixed: Story = {
  args: {
    affix: false,
    showInkInFixed: true,
  },
}

export const ExampleBasic: Story = {
  render: () => {
    return (
      <ExampleStory title="Basic usage">
        <Row>
          <Col span={16}>
            <div id="part-1" style={{ height: '100vh', background: 'rgba(255,0,0,0.02)' }} />
            <div id="part-2" style={{ height: '100vh', background: 'rgba(0,255,0,0.02)' }} />
            <div id="part-3" style={{ height: '100vh', background: 'rgba(0,0,255,0.02)' }} />
          </Col>
          <Col span={8}>
            <Anchor
              items={[
                {
                  key: 'part-1',
                  href: '#part-1',
                  title: 'Part 1',
                },
                {
                  key: 'part-2',
                  href: '#part-2',
                  title: 'Part 2',
                },
                {
                  key: 'part-3',
                  href: '#part-3',
                  title: 'Part 3',
                },
              ]}
            />
          </Col>
        </Row>
      </ExampleStory>
    )
  },
}

export const ExampleHorizontal: Story = {
  render: () => {
    return (
      <ExampleStory title="Horizontally aligned anchors.">
        <div style={{ padding: '20px' }}>
          <Anchor
            direction="horizontal"
            items={[
              {
                key: 'part-1',
                href: '#part-1',
                title: 'Part 1',
              },
              {
                key: 'part-2',
                href: '#part-2',
                title: 'Part 2',
              },
              {
                key: 'part-3',
                href: '#part-3',
                title: 'Part 3',
              },
            ]}
          />
        </div>
        <div>
          <div
            id="part-1"
            style={{
              width: '100vw',
              height: '100vh',
              textAlign: 'center',
              background: 'rgba(0,255,0,0.02)',
            }}
          />
          <div
            id="part-2"
            style={{
              width: '100vw',
              height: '100vh',
              textAlign: 'center',
              background: 'rgba(0,0,255,0.02)',
            }}
          />
          <div id="part-3" style={{ width: '100vw', height: '100vh', textAlign: 'center', background: '#fffbe9' }} />
        </div>
      </ExampleStory>
    )
  },
}

export const ExampleAnchorStatic: Story = {
  render: () => {
    return (
      <ExampleStory title="Do not change state when page is scrolling.">
        <Anchor
          affix={false}
          items={[
            {
              key: '1',
              href: '#components-anchor-demo-basic',
              title: 'Basic demo',
            },
            {
              key: '2',
              href: '#components-anchor-demo-static',
              title: 'Static demo',
            },
            {
              key: '3',
              href: '#api',
              title: 'API',
              children: [
                {
                  key: '4',
                  href: '#anchor-props',
                  title: 'Anchor Props',
                },
                {
                  key: '5',
                  href: '#link-props',
                  title: 'Link Props',
                },
              ],
            },
          ]}
        />
      </ExampleStory>
    )
  },
}

export const ExampleOnclick: Story = {
  render: () => {
    const handleClick = (
      e: React.MouseEvent<HTMLElement>,
      link: {
        title: React.ReactNode
        href: string
      },
    ) => {
      e.preventDefault()
      console.log(link)
    }
    return (
      <ExampleStory title="Customize the onClick event.">
        <Anchor
          affix={false}
          onClick={handleClick}
          items={[
            {
              key: '1',
              href: '#components-anchor-demo-basic',
              title: 'Basic demo',
            },
            {
              key: '2',
              href: '#components-anchor-demo-static',
              title: 'Static demo',
            },
            {
              key: '3',
              href: '#api',
              title: 'API',
              children: [
                {
                  key: '4',
                  href: '#anchor-props',
                  title: 'Anchor Props',
                },
                {
                  key: '5',
                  href: '#link-props',
                  title: 'Link Props',
                },
              ],
            },
          ]}
        />
      </ExampleStory>
    )
  },
}

export const ExampleScrollOffset: Story = {
  render: () => {
    const topRef = useRef<HTMLDivElement>(null)
    const [targetOffset, setTargetOffset] = useState<number>()

    useEffect(() => {
      setTargetOffset(topRef.current?.clientHeight)
    }, [])

    return (
      <ExampleStory title="Anchor target scroll to screen center.">
        <div>
          <Row>
            <Col span={18}>
              <div id="part-1" style={{ height: '100vh', background: 'rgba(255,0,0,0.02)', marginTop: '30vh' }}>
                Part 1
              </div>
              <div id="part-2" style={{ height: '100vh', background: 'rgba(0,255,0,0.02)' }}>
                Part 2
              </div>
              <div id="part-3" style={{ height: '100vh', background: 'rgba(0,0,255,0.02)' }}>
                Part 3
              </div>
            </Col>
            <Col span={6}>
              <Anchor
                targetOffset={targetOffset}
                items={[
                  {
                    key: 'part-1',
                    href: '#part-1',
                    title: 'Part 1',
                  },
                  {
                    key: 'part-2',
                    href: '#part-2',
                    title: 'Part 2',
                  },
                  {
                    key: 'part-3',
                    href: '#part-3',
                    title: 'Part 3',
                  },
                ]}
              />
            </Col>
          </Row>

          <div
            style={{
              height: '30vh',
              background: 'rgba(0,0,0,0.15)',
              position: 'fixed',
              top: 0,
              left: 0,
              width: '75%',
              color: '#000',
            }}
            ref={topRef}>
            <div>Fixed Top Block</div>
          </div>
        </div>
      </ExampleStory>
    )
  },
}

export const ExampleLinkChange: Story = {
  render: () => {
    const onChange = (link: string) => {
      console.log('Anchor:OnChange', link)
    }
    return (
      <ExampleStory title="Listening for anchor link change.">
        <Anchor
          affix={false}
          onChange={onChange}
          items={[
            {
              key: '1',
              href: '#components-anchor-demo-basic',
              title: 'Basic demo',
            },
            {
              key: '2',
              href: '#components-anchor-demo-static',
              title: 'Static demo',
            },
            {
              key: '3',
              href: '#api',
              title: 'API',
              children: [
                {
                  key: '4',
                  href: '#anchor-props',
                  title: 'Anchor Props',
                },
                {
                  key: '5',
                  href: '#link-props',
                  title: 'Link Props',
                },
              ],
            },
          ]}
        />
      </ExampleStory>
    )
  },
}

export const ExampleReplaceHistory: Story = {
  render: () => {
    return (
      <ExampleStory title="Replace path in browser history, so back button returns to previous page instead of previous anchor item.">
        <Row>
          <Col span={16}>
            <div id="part-1" style={{ height: '100vh', background: 'rgba(255,0,0,0.02)' }} />
            <div id="part-2" style={{ height: '100vh', background: 'rgba(0,255,0,0.02)' }} />
            <div id="part-3" style={{ height: '100vh', background: 'rgba(0,0,255,0.02)' }} />
          </Col>
          <Col span={8}>
            <Anchor
              replace
              items={[
                {
                  key: 'part-1',
                  href: '#part-1',
                  title: 'Part 1',
                },
                {
                  key: 'part-2',
                  href: '#part-2',
                  title: 'Part 2',
                },
                {
                  key: 'part-3',
                  href: '#part-3',
                  title: 'Part 3',
                },
              ]}
            />
          </Col>
        </Row>
      </ExampleStory>
    )
  },
}
