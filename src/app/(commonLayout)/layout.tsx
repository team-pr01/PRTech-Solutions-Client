// import Footer from '@/components/Shared/Footer/Footer';
import Navbar from '@/components/Shared/Navbar/Navbar';
import React, { ReactNode } from 'react';

const MainLayout = ({children} : {children:ReactNode}) => {
    return (
        <div className='flex flex-col justify-between items-center bg-primary-20'>
            <Navbar/>
            {children}
            {/* <Footer/> */}
        </div>
    );
};

export default MainLayout;