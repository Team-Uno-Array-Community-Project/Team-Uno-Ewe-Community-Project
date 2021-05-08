import React from 'react'
import {Edit, SimpleForm, TextInput} from 'react-admin'
const VendorEdit = (props) => {
    return (
       <Edit title="Edit user" {...props}>
           <SimpleForm>
               <TextInput disabled source="id"/>
               <TextInput source="name"/>
               <TextInput source="email"/>
           </SimpleForm>
       </Edit>
    )
}

export default VendorEdit