## Contents:
1: Dev Readme
2: Component Tree and File Structure
3: Resources, Documentation, & Notes.
3: Muse 
4: Installation
etc..

<<<<<<< HEAD
## Dev Readme: FEATURE-NAVBAR
=======
## Dev Readme: FEATURE-NAVBAR:
>>>>>>> dev

JW: [feature-navbar] As per conversation with Charm, goal of feature-navbar is to provide branch:dev with updated <NavBar/> (renamed from AppNav.js), without [Discover...] sibling component tree present in dev branch:layout-and-sizing, to be rendered on User login. Other features dependent on NavBar include [show-user-profile], [edit-user-profile], [open-chat-screen], [log-out]. 

Current conception of component tree includes <NavBar/> as sibling of <MuseWindow/>, which will provide a container/wrapper for rendering the component tree related to the [Discover-Feature], as well as be the element that profile view and chat functionality can be rendered within, or rendered "over" (z-index, elevation). <MuseWindow/> and components re: [Discover-Feature] will be provided by JW in upcoming feature branch. KS will be provided

Additional considerations re: <NavBar/>,: 
- if <App/> is a store of User information in state, whole NavBar may rerender when a) props re: User change from actions performed in siblings, b) CRUD operations re: User are performed in children of NavBar. Be on the lookout for children of NavBar not *immediately* reflecting updated state.
<<<<<<< HEAD
## JW: Notes
=======

>>>>>>> dev
Don't get sidetracked by this, but considerations and notes as we progress to and past MVP, in no particular order:
- After testing MVP, it may be beneficial to determine if we should utilize Suspense *experimental* (upcoming in React18)or lazy loading in re: first paint after login, likely LCP. 
- *quickly* Determine: For [show-user], [edit-user], [open-chat], mui modal vs mui portal vs react-router. Mostly, we want to avoid having to re-perform expensive operations re: user (... or object.assign helps if User info stored in parent state) and ESPECIALLY avoid re-performing expensive operations in <Discover...> sibling component tree. After MVP or if time permits, weigh benefits of memoization or useMemo. 
- Also, weigh benefits of splitting User object from fetch return. After MVP: is cacheing info re: User, OtherUsers more performant?
Resource: https://betterprogramming.pub/exploring-caching-techniques-in-react-d30bbb78d54d
(Not mentioned, useReducer hook, )

to do: cleanup CRA stock files





### Component Tree and File Structure

## Resources, Documentation, & Notes
Example use for IconButton, import individual button by copying import statement from https://mui.com/components/material-icons/ and put component in between IconButton wrapper. The IconButton wrapper is where you will handleclick, hover, etc. 
<!-- <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton> -->

MUI Install/Getting Started : https://mui.com/getting-started/installation/
Please refer to the Components list on the sidebar.

Emotion: https://emotion.sh/docs/introduction
Emotion is the recommended (included) style engine for MUI V5. MUI V5 also supports the usage of styled-components, as well as the system API (( sx={{foo}} props ))

MUI System: https://mui.com/system/basics/
The MUI System API provides utilities related to styling. Important for style-overrides, providing custom components access to theme vars/properties, and so on. See docs. 



## Muse
Muse description here

## Installation
Install instructions here

## Usage
usage instructions here

## Contributing
Instructions to contibute here

## License 
