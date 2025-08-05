import {Meta, StoryObj} from '@storybook/react-vite';

import {Header} from '@mythmaker/ui';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    control: {
        expanded: true,
    }
  }
};

export default meta;

export const Default: StoryObj<typeof Header> = {
    args: {
      title: 'Mythmaker',
    }
}