import React from 'react';
import ListItems from "../ListItems";
import ListMenu from '../ListMenu'



const Dashboard =() => {
    return (
        <div>
            <div className='weddings-top'></div>
            <div className='container-fluid'>
                <section>
                    <h1 >Wedding INCLUSIONS</h1>
                    <p>No matter how you design your special day, you'll find that we've included
                        some of the finer details. From seating and cocktails,
                        to music and more, we give you the perfect foundation to start creating the wedding of your dreams.</p>
                </section>
                <ListMenu/>
                <ListItems />
            </div>

        </div>

    )
};

export default Dashboard;
