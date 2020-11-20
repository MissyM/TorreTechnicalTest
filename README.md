# TorreTechnicalTest

The front-end of this app is built using React.js.

The server is built using Firebase Functions with Express.js and Node. It consist of two functions that allow the front-end to access the Torre API, that otherwise is not accessible because of the CORS policy.

The link to the front-end is: https://torretechnicaltest.web.app/.
The link to the back-end is: https://us-central1-torretechnicaltest.cloudfunctions.net/bios/.

What I did was two thigs: Reprioritize the Genome in Figma, and implemented the Reputation bar so the redundant signaler icon is removed.

### Redesign the Genome

If I were hiring, what I need/want to see/know about the candidate?

- [x] Reprioritize the genome [Genoma redesign](https://www.figma.com/file/OXcRllSyUHMSLUqgFFTHfO/TorreDesign?node-id=0%3A1). Make the genoma look less loaded, deleting redudndant information, such as people signaled.
- [x] Delete stats\_\_wight-graph. This generate noise.
- [x] Avoid scrolling to the right, because the content there goes unnoticed.
- [x] Move reputation to the top of the page because it is a differrentiating characteristic of the platform that provides relevant information.

### Implement Reputation bar in Genome, according to design

- [x] Implement new design Reputation component
- [x] Implement Firebase function
- [x] Display results in the interface
- [x] Upload to firebase hosting
