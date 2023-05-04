# File structure

```
src:  
    components: Button, Panel, NavBar, etc.  
    pages:  
        `index.js`: Homepage  
            about_us: (ic.com/about_us)  
                `layout.js`
                `index.js`
            get_involve: (ic.com/get_involve)  
                `index.js`  
                `layout.js`  
            programs_projects: (ic.com/program_projects)  
                `index.js`  
                `layout.js`  
            [...]  
    styles  
        globals.css  
```

- Everything is in `src` directory. In `src/pages`, there are multiple other directories correspond to each specific page of our website. 
- The `index.js` file in each page directory can be replaced by `index.mdx` to use markdown instead of JavaScript.
- The `index.js` file in the `src/pages` directory is the entry point or the homepage.
