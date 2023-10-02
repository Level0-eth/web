import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import './index.css';

import Header from '../components/Header/Header';

const IndexPage: React.FC<PageProps> = () => {
    return (
        <body>
            <Header />
        </body>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
