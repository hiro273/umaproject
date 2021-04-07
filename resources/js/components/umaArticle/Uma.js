import React from "react";
import UmaArticle from "./UmaArticle";
import {
    Teio,
    Teio2,
    Mac,
    Mac2,
    Hayahide,
    Burubon,
    Operao,
    Supe,
    Suzuka,
    Maruzen,
    Oguri,
    Taiki,
    Koutei,
    Rice,
    Gorusi,
    Wokka,
    Suka,
    Glass,
    El,
    Air,
    Topgun,
    Creek,
    Raian,
    Takion,
    Winning,
    Sakura,
    Urara,
    Matikane,
    Nice,
    King,
} from "./Export";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Uma = () => {
    return (
        <Router>
            <div>
                <UmaArticle />
                <Switch>
                    <Route path="/uma/teio" component={Teio} />
                    <Route path="/uma/teio2" component={Teio2} />
                    <Route path="/uma/mac" component={Mac} />
                    <Route path="/uma/mac2" component={Mac2} />
                    <Route path="/uma/hayahide" component={Hayahide} />
                    <Route path="/uma/burubon" component={Burubon} />
                    <Route path="/uma/operao" component={Operao} />
                    <Route path="/uma/supe" component={Supe} />
                    <Route path="/uma/suzuka" component={Suzuka} />
                    <Route path="/uma/maruzen" component={Maruzen} />
                    <Route path="/uma/oguri" component={Oguri} />
                    <Route path="/uma/taiki" component={Taiki} />
                    <Route path="/uma/koutei" component={Koutei} />
                    <Route path="/uma/rice" component={Rice} />
                    <Route path="/uma/gorusi" component={Gorusi} />
                    <Route path="/uma/wokka" component={Wokka} />
                    <Route path="/uma/suka" component={Suka} />
                    <Route path="/uma/glass" component={Glass} />
                    <Route path="/uma/el" component={El} />
                    <Route path="/uma/air" component={Air} />
                    <Route path="/uma/topgun" component={Topgun} />
                    <Route path="/uma/creek" component={Creek} />
                    <Route path="/uma/raian" component={Raian} />
                    <Route path="/uma/takion" component={Takion} />
                    <Route path="/uma/winning" component={Winning} />
                    <Route path="/uma/sakura" component={Sakura} />
                    <Route path="/uma/urara" component={Urara} />
                    <Route path="/uma/matikane" component={Matikane} />
                    <Route path="/uma/nice" component={Nice} />
                    <Route path="/uma/king" component={King} />
                </Switch>
            </div>
        </Router>
    );
};

export default Uma;
