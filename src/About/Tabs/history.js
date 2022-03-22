import React, { useContext } from "react";
import { aboutContext } from "../../components/context";

export function History() {
    const {historyStyle} = useContext(aboutContext);

    return (
        <div className="history-main" style={historyStyle}>
            <h1>Our History</h1>
            <p>Table of Grace Feeding Ministry was founded on the basis of food rescue. Food rescue is the act of gathering food from establishments that is no longer saleable but is still edible. Approximately 40% of our food is wasted and 1 in 6 people go hungry.</p>
            <p>In spring of 2014 Tanis and her husband, Ron, started picking up excess food from various feeding establishments, distributing the food to caring agencies throughout Beaver and Lawrence Counties. We also worked closely with the men's shelter in Beaver Falls and helped with their needs. We begin networking with other ministries and volunteers came on board to help with pick-ups and deliveries. In December of 2015 we formed a 501 C3 nonprofit.</p>
            <p>In January of 2019 we fulfilled a need for a Thursday night meal in Beaver Falls. We served between 60 and 80 meals a night. In March of 2020 we relocated to our current location at Central United Methodist Church where we were serving 150-200 people Mondays and Thursdays evenings. We also provide nonperishable foods and hygiene products for our guests.</p>
        </div>
    );
}