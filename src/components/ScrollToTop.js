import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// Need to debug for dependency issue--code works, but throws lint warning. See https://dennyscott.io/use-effect-dependency-array/

function ScrollToTop({ history, children }) {
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
            });
        return () => {
            unlisten();
        }
    }, []);

    return <>{children}</>;
}

export default withRouter(ScrollToTop);