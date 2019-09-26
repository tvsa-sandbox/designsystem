import React from "react";
import { withPrefix } from "gatsby";

const DataLight_ListE = () => (    
            <div className="DataLight__ListElement WhiteLabel">
                <div className="DataLight__ListNumberContainer WhiteLabel">
                    <span className="DataLight__ListNumber WhiteLabel">
                        # 5
                    </span>
                </div>
                <div className="DataLight__ListImageContainer WhiteLabel">
                    <picture>
                    <source media="(min-width: 0px)" srcSet={withPrefix("/static/aspect-ratio-images/1x1-220x220.jpg")} />
                        <img className="DataLight__ListImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/1x1-220x220.jpg")} alt="Test" />
                    </picture>
                </div>
                <div className="DataLight__ListTitleContainer WhiteLabel" ds-title="Divi Soup">
                    <h3 className="DataLight__ListTitle WhiteLabel">
                        Paris Saint Germain
                    </h3>
                </div>
                <div className="DataLight__ListInfoContainer-First WhiteLabel">
                    <span className="DataLight__ListInfo WhiteLabel">
                        16
                    </span>
                </div>
                <div className="DataLight__ListInfoContainer-First WhiteLabel">
                    <span className="DataLight__ListInfo WhiteLabel">
                        10
                    </span>
                </div>
                <div className="DataLight__ListInfoContainer-First WhiteLabel">
                    <span className="DataLight__ListInfo WhiteLabel">
                        2
                    </span>
                </div>
                <div className="DataLight__ListInfoContainer-First WhiteLabel">
                    <span className="DataLight__ListInfo WhiteLabel">
                        4
                    </span>
                </div>
                <div className="DataLight__ListInfoContainer WhiteLabel">
                    <span className="DataLight__ListInfo WhiteLabel">
                        1
                    </span>
                </div>
                <div className="DataLight__ListInfoContainer WhiteLabel">
                    <span className="DataLight__ListInfo WhiteLabel">
                        1
                    </span>
                </div>
                <div className="DataLight__ListInfoContainer WhiteLabel">
                    <span className="DataLight__ListInfo WhiteLabel">
                        10
                    </span>
                </div>
                <div className="DataLight__ListInfoContainer-First WhiteLabel">
                    <span className="DataLight__ListInfo WhiteLabel">
                        13
                    </span>
                </div>
            </div>
);

export default DataLight_ListE;
