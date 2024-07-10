# Testing 
### Testing in Reality
* Users complain to your companies support team about a bug
* Support team gives a workaround to the bug
* Support team gets tired of the 1 million tickets beging filed and tells a project manager about the bug
* Project manager tells an engineering manager that the bug needs to be fixed
* Engineering manager tells you to fix the bug, probably *without* a lot of details
* You need to find the bug, fix it, and **write a test to confirm it is fixed**

### The Bug Fixing Process
1. Find the relevant components in the codebase
2. Figure out how the component is getting its data/state/props
3. Use a debugger, consolelog, or documentation to understand the data
4. implement a fix
5. Test the fix

### Find the relevant compoents 
* React Developer Tools
    * chrome.google.com/ webstore/ detail/ react-developer-tools
* Search the codebase for text/icons/classnames that the component is producing
* if an error is being thrown, look at the stack tree
* Ask another Engineer

### Understanding the Data
* Set a console.log to print out the data
* Set a **debugger** and manually inspect the data
* Use React Developer Tools to view  the props/state
* Watch network request log and inspect the API responses


## Hardest aspects of testing
1. Module mocks
2. Navigation
3. 'act'

### testing router
*  BrowserRouter: stores current URL in the address bar
*  HashRouter: Stores current URL in the # part of the address bar
*  MemoryRouter: stores current URL in memory
    *  ***Many blog posts recommend using this for testing purpose.***

### act() warning
* Will occur frequently if you're doing data fetching in useEffect

### important items
* Unexpected state updates in tests are bad
* The act function defines a window in time where state updates (and should) occur
* React Testing Library uses 'act' behind the scenes for you
* To solve asct warnings, you should use a "findBy". **Usually you don't want to follow the advice of the warning**.

=> When you see an 'act' warning you almost always do not want to add an 'act' to your test
= > The message says you should! Don't do it!
=> Instead, we will use one of RTL's functions instead

### Automatically call 'act' for you
This is the preferred way of using 'act' when using RTL, instead use 'act' directly
* screen.findBy...
* screen.findAllBy..
* waitFor
* user.keyboard
* user.click

### Options For Solving Act Warnings

Best -> Worst

1. Use a 'findBy' or 'findAllBy' to detect when the component has finished its data fetching
2. Use an 'act' to control when the data-fetching request gets resolved.
3. Use a module mock to avoid rendering the troublesome component
4. Use an 'act' with a 'pause'

### Data Fetching in Tests
* We don't want our components to make actual  network requests
* Slow! Data might change
* We fake (or mock) data fetching in tests

### Options for Data Fetching
1. Mock the file that contains the data fetching code
    * Benefit: Easier test! We don't have to understand what the hook does
    * Drawback: Interaction between the hook + component is untested. Who knows if we're  using the hook correctly.

2. Using a library to "mock" axios - get axios to return fake data (msw library)
3. Create a manual  mock for axios

### MSW setup
1. Create a test file
2. Understand the exact URL, method, and return value of requests that your component will make
3. Create a MSW handler to intercept that request and return somoe fake data for your component to use
4. Set up the beforeAll, afterEach, and afterALl hooks in yout test file
5. In a test, render the component. Wait for an element to be visible

### Options for Debugginf Tests
1. Use 'test.only' or 'describe.only' to limit the number of tests executed
2. Set up a debugger
3. Classic console.log's

### Setting up a Debugger
1. Add the following script to package.json:
    * "test:debug": "react-scripts --inspect-brk test --runInBand --no-cache",
2. Add a 'debugger' statement somewhere in your tests or component
3. Use a "test.only" or "describe.only" to limit the tests executed
4. Run the above script command
5. Navigate to *about:inspect* in yout browser

### Testing may happen sometihing unexpectively
1. see some stategies for debugging tests
2. Understand that some libraries don't magically do what you want in a test environment.
