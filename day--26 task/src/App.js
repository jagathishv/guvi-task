import React from "react";

import Pricing from "./pricing";

import "./app.css";

function app() {
    const pricing = [
        {
            name: "FREE",
            price: "0",
            curency: "$",
            priceper: "month",
            features:  [
                {
                    name: "SingleUser",
                    access: true,
                },
                {
                    name: "5GBStorage",
                    access: true,
                },
                {
                    name: "UnlimitedPublicProjects",
                    access: true,
                },
                {
                    name: "CommunityAccess",
                access: true,
                },
                {
                    name: "UnlimitedPrivateProjects",
                access: false,
                },
                {
                    name: "DedicatedPhoneSupport",
               access: false,
                },
                {
                    name: "FreeSubdomain",
                access:false,
                },
                {
                    name: "MonthlyStatusReports",
                    access: false
                }

            ],
        },
        {
            name: "PLUS",
            price: "9",
            curency: "$",
            priceper: "month",
            features: [
                {
                    name: "SingleUser",
                    access: true,
                },
                {
                    name: "5GBStorage",
                    access: true,
                },
                {
                    name: "UnlimitedPublicProjects",
                    access: true,
                },
                {
                    name: "CommunityAccess",
                access: true,
                },
                {
                    name: "UnlimitedPrivateProjects",
                access: true,
                },
                {
                    name: "DedicatedPhoneSupport",
               access: true,
                },
                {
                    name: "FreeSubdomain",
                access: true,
                },
                {
                    name: "MonthlyStatusReports",
                    access: false
                }

            ],
        },
        {
            name: "PRO",
            price: "49",
            curency: "$",
            priceper: "month",
            features: [
                {
                    name: "SingleUser",
                    access: true,
                },
                {
                    name: "5GBStorage",
                    access: true,
                },
                {
                    name: "UnlimitedPublicProjects",
                    access: true,
                },
                {
                    name: "CommunityAccess",
                access: true,
                },
                {
                    name: "UnlimitedPrivateProjects",
                access: true,
                },
                {
                    name: "DedicatedPhoneSupport",
               access: true,
                },
                {
                    name: "Unlimited FreeSubdomain",
                access: true,
                },
                {
                    name: "MonthlyStatusReports",
                    access: true
                }

            ],
        }
    ]
    return (
        <section className="pricing py-5">
            <div className="container">
                <div className="row">
                    {pricing.map(price => <Pricing {...price} />)}
                </div>
            </div>
        </section>

    );
}

export default app;