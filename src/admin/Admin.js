import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import VendorList from './VendorList'
import VendorCreate from './VendorCreate'
import VendorEdit from './VendorEdit'

function AdminAccess() {
    return (
        <Admin dataProvider={restProvider('http://localhost:3000')}>
            <Resource name='posts' list={VendorList} create={VendorCreate} edit={VendorEdit} />
        </Admin>
    );
}
export default AdminAccess;