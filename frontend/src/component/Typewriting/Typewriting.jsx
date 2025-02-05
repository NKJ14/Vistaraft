import React from 'react';
import TextTransition, { presets } from 'react-text-transition';
const TEXTS = ['Stories', 'Memories','Experiences'];

function Typewriting(){
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(
          () => setIndex((index) => index + 1),
          3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);

    return(
        <div class="flex gap-5">
            <h1 class="block text-4xl font-bold text-teal-300 text-left sm:text-4xl lg:text-6xl lg:leading-tight">
            We create 
            </h1>
            <h1 class="text-4xl font-bold text-blue-300 py-1 sm:text-4xl lg:text-6xl lg:leading-tight px-0" >
                <TextTransition springConfig={presets.wobbly} > {TEXTS[index % TEXTS.length]}</TextTransition>
            </h1>
        </div>
    );
}

export default Typewriting;