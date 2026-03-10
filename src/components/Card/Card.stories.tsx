import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  args: {
    title: 'Quarterly report',
    description: 'A quick summary of this quarter’s progress.',
    children: 'Revenue is up 12% QoQ and churn is down 3%.',
    footer: (
      <>
        <button style={{ padding: '8px 10px', borderRadius: 10, border: '1px solid var(--poc-border)', background: 'transparent', color: 'var(--poc-text)' }}>
          Dismiss
        </button>
        <button style={{ padding: '8px 10px', borderRadius: 10, border: '1px solid var(--poc-border)', background: 'var(--poc-text)', color: 'var(--poc-bg)' }}>
          View details
        </button>
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};

