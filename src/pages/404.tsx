import type { NextPage } from 'next';

import Link from 'next/link';

const PageNotFound: NextPage = () => {
    return (
        <div>
            <h1>Page not found</h1>
            <h3>Chack if you are at the right page.</h3>
            <Link href="/">Click here to go home!</Link>
        </div>
    )
};

export default PageNotFound;