import React from 'react'
import { Create, SimpleForm, TextInput, EmailField } from 'react-admin'
const VendorCreate = (props) => {
    return (
        <Create title="Crate a user" {...props}>
            <SimpleForm>
                <TextInput source="name" />
                <EmailField source="email" />
            </SimpleForm>
        </Create>
    )
}

export default VendorCreate
