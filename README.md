# Work In Progress

```javascript
const config = {
    margin: [0, 0.25, 0.5, 1, 1.5, 2, 4, 8, 16],
    padding: [0, 0.25, 0.5, 1, 1.5, 2, 4, 8, 16],
    color: ["red", "blue", "green"],
    backgroundColor: ["red", "blue", "green"]
};

const css = generateCSS(config);
console.log(css);

// result

// .ma0: { margin: 0rem; }
// .mv0: { margin: 0rem 0; }
// .mh0: { margin: 0 0rem; }
 
 
// .ma1: { margin: 0.25rem; }
// .mv1: { margin: 0.25rem 0; }
// .mh1: { margin: 0 0.25rem; }
 
 
// .ma2: { margin: 0.5rem; }
// .mv2: { margin: 0.5rem 0; }
// .mh2: { margin: 0 0.5rem; }
 
 
// .ma3: { margin: 1rem; }
// .mv3: { margin: 1rem 0; }
// .mh3: { margin: 0 1rem; }
 
 
// .ma4: { margin: 1.5rem; }
// .mv4: { margin: 1.5rem 0; }
// .mh4: { margin: 0 1.5rem; }
 
 
// .ma5: { margin: 2rem; }
// .mv5: { margin: 2rem 0; }
// .mh5: { margin: 0 2rem; }
 
 
// .ma6: { margin: 4rem; }
// .mv6: { margin: 4rem 0; }
// .mh6: { margin: 0 4rem; }
 
 
// .ma7: { margin: 8rem; }
// .mv7: { margin: 8rem 0; }
// .mh7: { margin: 0 8rem; }
 
 
// .ma8: { margin: 16rem; }
// .mv8: { margin: 16rem 0; }
// .mh8: { margin: 0 16rem; }
 
 
// .pa0: { padding: 0rem; }
// .pv0: { padding: 0rem 0; }
// .ph0: { padding: 0 0rem; }
 
 
// .pa1: { padding: 0.25rem; }
// .pv1: { padding: 0.25rem 0; }
// .ph1: { padding: 0 0.25rem; }
 
 
// .pa2: { padding: 0.5rem; }
// .pv2: { padding: 0.5rem 0; }
// .ph2: { padding: 0 0.5rem; }
 
 
// .pa3: { padding: 1rem; }
// .pv3: { padding: 1rem 0; }
// .ph3: { padding: 0 1rem; }
 
 
// .pa4: { padding: 1.5rem; }
// .pv4: { padding: 1.5rem 0; }
// .ph4: { padding: 0 1.5rem; }
 
 
// .pa5: { padding: 2rem; }
// .pv5: { padding: 2rem 0; }
// .ph5: { padding: 0 2rem; }
 
 
// .pa6: { padding: 4rem; }
// .pv6: { padding: 4rem 0; }
// .ph6: { padding: 0 4rem; }
 
 
// .pa7: { padding: 8rem; }
// .pv7: { padding: 8rem 0; }
// .ph7: { padding: 0 8rem; }
 
 
// .pa8: { padding: 16rem; }
// .pv8: { padding: 16rem 0; }
// .ph8: { padding: 0 16rem; }
 
//  .red: { color: red; } 
//  .blue: { color: blue; } 
//  .green: { color: green; } 
//  .bg-red: { backgroundColor: red; } 
//  .bg-blue: { backgroundColor: blue; } 
//  .bg-green: { backgroundColor: green; } 
```