Live version:
https://memory-card-project.pages.dev/

Special thanks to https://pokeapi.co/?ref=public-apis for their open RESTful API that this project is built upon.

#To play: 

Open the first link, wait for the components to load, and begin!

The rules are as such:
1 - Get points by clicking cards
2 - Don't click the same card twice, as you will loose your score and start over again
3 - Try to do it as fast as possible as a challenge!

If you encounter any issues, please open a PR or and Issue and let me know - or just contact me directly. 

This project is part of The Odin Project learning path, and is supported through supplimentary React's official docs. The main focus of this is to understand:
1 - Side Effects
2 - useEffect and how to use it to synchronyze with external APIs 
3 - Caching the response (through an empty dependency array in useEffect), as to not overburden the RESTful API provider. No GC / desync required in our case. 

I have sharpened my skills in: 
-Moving dataflow in components from Parents to Children by using useState at higher levels (helps pass data along).
-useEffect
-Revisited async await function patterns, and Promises. 

Mistakes that were made:
-Cors decided to be a bully, not even connecting to the server
-Made a mistake by using a synchronous method (forEach) for an asynchronous task. At later points trying to coerce it into working,
which led to the project taking a bit longer than expected. However, I did also take a break.
-For some reason it felt very right to use useMemo to cache when starting out, and call fetch on separate modules. However, this pattern is *not* reccomended as per current React docs. 

Successes: 
-The project was done relatively quick, with the remaining 70% being completed within 2/3 hours.
-Much of the time spent on the project, was actually on reading the documentation. I have bookmarked articles over interesting sorting algorithms, as I also doubt my current 
understanding of the one implemented in the project is correct - however, it does work flawlessly. 
-Overall, the project is a big win: It helped me identify a few gaps in my knowledge that I was able to fill in through the initial frustration.
