# Payrun Platform
A task to build a platform for accountants to easily manage weekly payruns (list of invoices)

## Usage 
1. Clone this repo
2. Run `npm install`
3. Start the site locally by running `npm run start`
4. Visit http://localhost:8080/


## Links
1. [Figma File](https://www.figma.com/design/PKwsaaKFhnKxh02ZmUXOHy/PayWorks-Task?node-id=0-1&t=eApaTkglBl4mYDY7-1)
2. [Storybook](https://6662e178cd8e18e2d82f60b8-kpoilyvafo.chromatic.com/?path=/story/)
3. [Deployed Website](https://payrun-platform.vercel.app/)

## How I tackled it...
1. Built a use case from the brief, focusing on the user's pain points and what a successful platform looks like to them.  
2. Wireframed the page by hand and in Figma.
2. Created a mini design system to apply to components built. 
3. Mocked up a high fidelity design for multiple breakpoints
4. Built components in Storybook and enabled visual testing. 
5. Built app with React, using a mix of custom components and customised ones from a library (AntD). 
6. Works across multiple breakpoints (mobile to large desktop).  


## If I had more time...
1. Add notifications for success/error state (customised with something like Toastify)
2. Write some unit tests for components, their various states and function executions. But... visual testing is enabled on components in Storybook 
3. Ideally I would've built all components through Storybook  
4. I created an alert icon which I wanted to be visible on rows where a supplier sent multiple invoices of the same amount. With more time I would've slightly altered the data to simulate this case and added a tooltip with a warning for potential duplicate payments.
5. Use LocalStorage so my state survives through accidental browser refreshes.  
6. If I had more time and knew of any, I would have asked some accountants for feedback on their desired platform.      