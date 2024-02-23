import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { Outlet } from 'react-router-dom'
import TopBarHeader from '../../components/topbarheader'

const PublicLayout = () => {
    return (
        <div>
            <TopBarHeader/>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default PublicLayout
