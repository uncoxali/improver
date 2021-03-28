import { isServer } from '@lib/isServer';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Home from './home';
// import Comments from '@components/Comments/AddingComments/index';
export default function IndexPage() {
    const router = useRouter();
    useEffect(() => {
        if (router.query) {
            localStorage.setItem('app', router.query.app as string);
        } else {
            localStorage.setItem('app', 'false');
        }
    }, [router.query]);
    return (
        <div>
            <Home />
        </div>
    );
}
