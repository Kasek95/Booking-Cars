import React from 'react';
import GreetingSection from "./greetingSection/GreetingSection";
import AboutUs from "./aboutus/AboutUs";
import Opinion from "./opinion/Opinion";
import Concat from "./concat/Concat";



const Main = () => {
    return (
        <main>
            <GreetingSection/>
            <AboutUs/>
            <Opinion/>
            <Concat/>
        </main>
    )
}

export default Main;
