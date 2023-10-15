       /**  <div id="parent">
            <div id="child">
                <h1>h1 tag</h1>
                <h2>h2 tag</h2>

            </div>

        </div> */
        
        
        
        
        
        
        const heading = React.createElement("div", { id: "parent"} ,     // core react
                        React.createElement("div", { id: "child"} ,
                        [React.createElement("h1", { } ,
                        "H1 tag"),
                        React.createElement("h2", { } ,
                        "H2 Tag")]));

        // heading is a react object ---- javascript normal object

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(heading);