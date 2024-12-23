import React from 'react';
import EmailTemplate from '../EmailTemplate';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Components/EmailTemplate',
    component: EmailTemplate,
    tags: ['autodocs'],
    argTypes: {
        themeColor: { control: 'color' },
        headerText: { control: 'text' },
        bodyText: { control: 'text' },
        footerText: { control: 'text' },
        imageUrl: { control: 'text' },
        rows: { control: 'array' },
        borderWidth: { control: 'number', defaultValue: 2 },
        padding: { control: 'text', defaultValue: '10px' },
        borderStyle: { control: 'select', options: ['solid', 'dashed', 'dotted'], defaultValue: 'solid' },
        fontSize: { control: 'number', defaultValue: 16 },
    },
};

const Template = (args) => (
    <div>
        <EmailTemplate {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = {
    headerText: 'Welcome to Our Service!',
    bodyText: 'We are excited to have you on board. Explore all our features and enjoy the benefits.',
    footerText: 'Best regards, Your Team',
    themeColor: '#007bff',
    imageUrl: 'https://via.placeholder.com/600x200',
    rows: [
        { text: 'Row 1' },
        { text: 'Row 2' },
    ],
    borderStyle: 'solid',
    fontSize: 16,
};

export const CustomColors = Template.bind({});
CustomColors.args = {
    ...Default.args,
    themeColor: '#28a745',
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
    ...Default.args,
    imageUrl: '',
};

export const DarkMode = Template.bind({});
DarkMode.args = {
    ...Default.args,
    headerText: 'Dark Mode Enabled',
    bodyText: 'This is a template designed for dark mode.',
    footerText: 'Switch to dark mode for better readability at night.',
    themeColor: '#333',
};
DarkMode.parameters = {
    backgrounds: {
        default: 'dark',
    },
};

export const DynamicLayout = Template.bind({});
DynamicLayout.args = {
    headerText: 'Custom Header and Rows',
    bodyText: 'In this story, you can add rows dynamically.',
    footerText: 'You can also modify me.',
    themeColor: '#0d6efd',
    rows: [
        { text: 'Row 1' },
        { text: 'Row 2' },
    ],
    borderStyle: 'dashed',
};
DynamicLayout.argTypes = {
    headerText: { control: 'text' },
    bodyText: { control: 'text' },
    footerText: { control: 'text' },
    rows: { control: 'array' },
};

export const CustomizedLayout = Template.bind({});
CustomizedLayout.args = {
    ...Default.args,
    headerText: 'Customized Layout',
    bodyText: 'You can modify the border color and paddings.',
    footerText: 'Adjust to fit the layout.',
    themeColor: '#f39c12',
    borderStyle: 'dotted',
    fontSize: 18,
};
CustomizedLayout.argTypes = {
    themeColor: { control: 'color' },
    borderWidth: { control: 'number' },
    padding: { control: 'text' },
    borderStyle: { control: 'select' },
    fontSize: { control: 'number' },
};

export const Actions = Template.bind({});
Actions.args = {
    ...Default.args,
    headerText: 'Click the Button',
    bodyText: 'Test actions by interacting with elements.',
};
Actions.decorators = [
    (Story) => (
        <div>
            {Story()}
            <button onClick={action('button-clicked')}>Test Action</button>
            <input
                type="text"
                placeholder="Type here"
                onChange={action('input-changed')}
            />
            <select onChange={action('select-changed')}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
        </div>
    ),
];
