// in src/posts.js
import React from 'react';
import RichTextInput from 'ra-input-rich-text';
import { List, Edit, Create, Datagrid, TextField, EditButton, SimpleForm, TextInput } from 'react-admin';


export const AdminBlog = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <EditButton/>
        </Datagrid>
    </List>
);

const BlogTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const BlogEdit = (props) => {
    return (
        <Edit title={<BlogTitle />} {...props}>
            <SimpleForm>
                <TextInput source="id"/>
                <TextInput source="title"/>
                <RichTextInput source="content"/>
            </SimpleForm>
        </Edit>
    )
};

export const BlogCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <RichTextInput source="content" />
        </SimpleForm>
    </Create>
);