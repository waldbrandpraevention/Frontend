//@ts-nocheck
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ErrorAlert from "../alerts/ErrorAlert";
import Tile from "../Tile";
import LoadingTile from "./LoadingTile";
import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import Plotly, { Data, Layout } from "plotly.js";


const Map = () => {
    const data: Data[] = [
        {
            type: "scattermapbox",
            text: ["Value 1", "Value 2", "Value 3"],
            lon: [-77.0323, -73.935242, -78.928],
            lat: [38.913, 40.7128, 37.775],
            marker: { color: "fuchsia", size: 4 }
        }
    ];

    const layout: Partial<Layout> = {
        dragmode: "zoom",
        mapbox: {
            style: 'white-bg',
            layers: [
                {
                    "below": 'traces',
                    "sourcetype": "raster",
                    "source": [
                        "https://tile.opentopomap.org/{z}/{x}/{y}.png"
                    ]
                }],
            below: 'traces',
            center: { lat: 38, lon: -90 }, zoom: 4
        },
        margin: { r: 0, t: 0, b: 0, l: 0 },
        showlegend: false
    };

    //const { data, isLoading, isError } = useQuery(["map"], () => {
    //    return axios.get("/map").then(e => e.data);
    //});

    //if (isLoading) return <LoadingTile />

    //if (isError) return <ErrorAlert> Karte konnte nicht geladen werden.</ErrorAlert>;

    return (<Tile>
        <Plot data={data} layout={layout} />
    </Tile>);

}

export default Map;