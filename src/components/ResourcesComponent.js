import React from 'react';

const routes = [
    {
        id: 0,
        name: 'National Forest to end of pavement',
        source: 'American Whitewater',
        class: '2-4',
        url: 'https://www.americanwhitewater.org/content/River/detail/id/3038/'
    },
    {
        id: 1,
        name: 'End of pavement to McClun Wayside',
        source: 'American Whitewater',
        class: '2-3',
        url: 'https://www.americanwhitewater.org/content/River/detail/id/1490/'
    },
    {
        id: 2,
        name: 'McClun Wayside to McKercher Park',
        source: 'American Whitewater',
        class: '2',
        url: 'https://www.americanwhitewater.org/content/River/detail/id/1491/'
    },
    {
        id: 3,
        name: 'McKercher Park to Brownsville',
        source: 'American Whitewater',
        class: '1',
        url: 'https://www.americanwhitewater.org/content/River/detail/id/3039/'
    }
];

function RenderRoute ({route}) {
    if(route) {
        return(
            <div>
                <a href={route.url}>{route.name}</a> is a class {route.classRating} route described on {route.source}.
            </div>
        );
    }
    return <div />;
}


const routesList = routes.map(route => {
    return (
        <div key={route.id}>
            <RenderRoute route={route}/>
        </div>
    )
})



function Resources() {
    return(
        <div>
            <h2>RESOURCES: Welcome to the Calapooia River</h2>
            <h3>River Navigation Routes</h3>
            <div className="row">
                {routesList}
            </div>

        </div>
    );
}

export default Resources;