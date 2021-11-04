import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// Need to debug for dependency issue--code works, but throws lint warning. See https://dennyscott.io/use-effect-dependency-array/
// Fixed the above issue by removing the dependency array, and also by simply including 'history' in the array at end of useEffect block. Still need to learn more about this topic to understand it's purpose and methods.

function ScrollToTop({ history, children }) {
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
            });
        return () => {
            unlisten();
        }
    }, [history]);

    return <>{children}</>;
}

export default withRouter(ScrollToTop);