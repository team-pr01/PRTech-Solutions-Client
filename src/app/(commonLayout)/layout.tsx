// import Footer from '@/components/Shared/Footer/Footer';
import Navbar from '@/components/Shared/Navbar/Navbar';
import React, { ReactNode } from 'react';

const MainLayout = ({children} : {children:ReactNode}) => {
    return (
        <div className=' relative flex flex-col justify-between items-center w-screen '>
            <div className='absolute top-5 margin-10 w-full flex justify-center z-50'><Navbar/></div>
            
            {children}
            {/* <Footer/> */}
        </div>
    );
};

export default MainLayout;