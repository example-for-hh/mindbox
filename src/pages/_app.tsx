import React, { useRef } from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';


import { AppStore, makeStore } from '@store/store';
import ModalView from '@components/Modal/ModalView';

import '../styles/globals.scss';

const MyApp = ({ Component, router, ...rest }: AppProps) => {

    const storeRef = useRef<AppStore | null>(null)
    if (!storeRef.current) {
        storeRef.current = makeStore()
       
    }


    return (

        <>
            <Provider store={storeRef.current}>
                <Component key={router.asPath} {...rest} />
                <ModalView />
            </Provider>
        </>
    )
};

export default MyApp;