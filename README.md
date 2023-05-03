# File structure

```
src:  
    components: Button, Panel, NavBar, etc.  
    pages:  
        `index.js`: Homepage  
            [route_1_name]: (ic.com/route_1_name)  
                `layout.js`: Should contain JSX code for the page layout  
                `index.js`: Should only contain page content  
            [route_2_name]: (ic.com/route_2_name)  
                `index.js`  
                `layout.js`  
            [...]  
    styles  
        globals.css  
```

- Everything is in `src` directory. In `src/pages`, there are multiple other directories correspond to each specific page of our website. 
- The `index.js` file in each page directory can be replaced by `index.mdx` to use markdown instead of JavaScript.
- The `index.js` file in the `src/pages` directory is the entry point for the IC's home page.

 
