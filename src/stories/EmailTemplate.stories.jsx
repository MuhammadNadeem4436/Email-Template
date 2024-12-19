import React from 'react';
import EmailTemplate from '../EmailTemplate';
import { background } from 'storybook/internal/theming';
import { action } from '@storybook/addon-actions'
import { Docs, Meta } from '@storybook/addon-docs';

export default {
    title: 'Components/EmailTemplate',
    component: EmailTemplate,
    tags: ['autodocs'],
    // parameters:{
    //     docs : {
    //         description: {
    //             component: "Email Template"
    //         }
    //     }
    // },
    argTypes: {
        themeColor: { control: 'color' },
        headerText: { control: 'text' },
        bodyText: { control: 'text' },
        footerText: { control: 'text' },
        imageUrl: { control: 'text' },
    },
};
const Template = (args) => <EmailTemplate {...args} />;

export const Default = Template.bind({});
Default.args = {
    headerText: 'Welcome to Our Service!',
    bodyText: 'We are excited to have you on board. Explore all our features and enjoy the benefits.',
    footerText: 'Best regards, Your Team',
    themeColor: '#007bff',
    imageUrl: 'https://via.placeholder.com/600x200',
    rows: [
        { text: 'Row 2' },
    ]

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

// Theme Story 

export const DarkMode = Template.bind({});
DarkMode.args = {
    ...Default.args,
    headerText: 'Dark Mode Enable',
    bodyText: 'This is an template designed for dark mode',
    footerText: 'switch to dark mode for batter readability at night',
    themeColor: '#333',
};
DarkMode.parameters = {
    backgrounds: {
        default: 'dark'
    },
}

// Dynamic Row and Headers 

export const DynamicLayout = Template.bind({});
DynamicLayout.args = {
    headerText: 'Custome Header and Rows',
    bodyText: 'In this story you can add rows',
    footerText: 'You can also modifiy me',
    themeColor: '#0d6efd',
    rows: [
        { text: 'Muhammad Nadeem' },
    ]
}
DynamicLayout.argTypes = {
    headerText: { control: 'text' },
    bodyText: { control: 'text' },
    footerText: { control: 'text' },
    rows: { control: 'array' }
};
DynamicLayout.parameters = {
    a11ly: {
        disable: false,
    }
}

export const CustomizedLayout = Template.bind({});
CustomizedLayout.args = {
    ...Default.args,
    headerText: 'Customized layout',
    bodyText: 'you can modify border color paddings',
    footerText: 'adjust to fit the layout',
    themeColor: '#f39c12',
}

CustomizedLayout.argTypes = {
    themeColor: { control: 'color' },
    borderWidth: { control: 'number', defaultValue: 2 },
    padding: { control: 'text', defaultValue: '10px' }
}

export const Actions = Template.bind({});
Actions.args = {
    ...Default.args,
    headerText: 'Click the Button',
    bodyText: "Test actions by intrecting with element"
};
Actions.decorators = [
    (Story) => (
        <div>
            {Story()}
            <button onClick={action('botton Cliked')}>Test Action</button>
        </div>
    )
]






