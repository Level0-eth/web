import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import './index.css';

import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <Header />
            <Banner />
        </>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
