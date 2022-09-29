import React from 'react';

const FaQ = () => {
    return (
        <div><br />
            <h2 >How does react work?</h2>
            <div class="accordion-body">React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</div><br />
            
            <h2 >What are the differences between props and state ?</h2>
            <div class="accordion-body">The Data is passed from one component to another in props and The Data is passed within the component onlyin state.<br/>
                props is Immutable. State is Mutable.<br/>
                Props can be used with state and functional components.	State can be used only with the state components/class component. <br/> 
                Props are read-only. State is both read and write.</div><br />

            <h2>Why is useEffect used?</h2>
            <div class="accordion-body">The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class -based components.<br/>
                1. Tasks like updating the DOM.<br/> 
                2. Fetching data from API end-points.<br/> 
                3. Setting up subscriptions or timers
            </div>
            </div>
    );
};

export default FaQ;