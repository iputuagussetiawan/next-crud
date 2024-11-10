import { CreateButton } from '@/components/buttons'
import ContactTable from '@/components/contact-table'
import Search from '@/components/search'
import React from 'react'

const Contacts = () => {
    return (
        <div className="max-w-screen-md mx-auto mt-5">
            <div className="flex items-center justify-between gap-1 mb-5">
                <h1 className='title text-2xl'>My Contact</h1>
            </div>
            
            <div className="flex items-center justify-between gap-1 mb-5">
                <Search />
                <CreateButton />
            </div>
            <div className="flex justify-center mt-4">
                <ContactTable/>
            </div>
        </div>
    )
}

export default Contacts