# Content editing guide

1. Go to [IC-website Github](https://github.com/ImpressiveCommunity/IC-website)
2. Everything is in `src` $\rightarrow$ `pages` 
3. Each folder in `pages` (about_us, get_involve, programs_projects) should contain `content.js`
4. There are two importants type of contents:
	1. Paragraph: It is in the form `export const section_name = "Paragraph"`. The only thing you should change is the text that is inside of "". `section_name` should tell which part of the page it is related to. The "", sometime, can be '', or \`\` (newline or ចុះបន្ទាត់ does't matter). 
	2. Array: A list of contents separated by ",". Copy and Paste the `{ ... }` block to create more.
5. For the images, we will have to discuss more on where should we upload it.
 
---

## Programs and Projects
 
![image 1](https://github.com/ImpressiveCommunity/IC-website/blob/montrey/guide%20images/program_project_guide_1.png)
![image 2](https://github.com/ImpressiveCommunity/IC-website/blob/montrey/guide%20images/about_us_guide_1.png)

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
