import { ReactNode } from 'react';

const Container = ({children}:{children:ReactNode}) => {
    return (
        <div className='max-w-[1920px] w-full mx-auto px-4 md:px-8 xl:px-[60px] 2xl:px-[120px]'>
            {children}
        </div>
    );
};

export default Container;
