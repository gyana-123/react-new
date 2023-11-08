       import React from 'react';
       import  ReactDOM  from 'react-dom/client';
        
       // functional comonent
       
       // component composing ----> component inside a component
        const Title =()=>{                    // arrow function
          return  <h1 className='head'>
                I am learning react js
            </h1>
        }

        // const Title =()=>(                   
        //      <h1 className='head'>
        //           I am learning react js
        //       </h1>
        // )


        const heading =                            // react element
         <h1 className='head'>
        I am learning react js
        </h1>

        // const Title = function(){            // normal function
        //     return (
        //          <h1 className='head'>
        //              I am learning react js
        //          </h1>
        //      )}

        const HeadingComponet = () => (         
            <div id='container'>
                {Title()}
                <Title/>
                <Title></Title>                     
                 {/* we can write like three ways */}
                <h1 className='heading'>
                     functional component
                </h1>
            </div>
        )





        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<HeadingComponet/>);