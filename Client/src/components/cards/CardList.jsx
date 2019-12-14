import React from "react";
import Card from "./Card";
import { data } from "../../data";

const CardList = () => {
    return data.map(app => {
        return (
            <div className="logoSesion">
            <Card {...app} key={app.name} />
            <br />
            </div>
        );
    });
};

export default CardList;