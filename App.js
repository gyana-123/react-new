       import React from 'react';
       import  ReactDOM  from 'react-dom/client';
        
        
        const heading = React.createElement("div", { id: "parent"} ,     // core react
                        React.createElement("div", { id: "child"} ,
                        [React.createElement("h1", { } ,
                        "H1 tag hello"),
                        React.createElement("h2", { } ,
                        "H2 Tag")]));

        // heading is a react object ---- javascript normal object

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(heading);