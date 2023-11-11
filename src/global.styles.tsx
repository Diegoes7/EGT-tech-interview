import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
	padding: 0;
  box-sizing: border-box;
  border: none;
  }

  html {
    background:rgb(35, 49, 66) ;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont,"Roboto","Segoe UI","Oxygen",
		"Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
		sans-serif;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas,"Roboto", monospace;
  }
  
  a {
    text-decoration: none;
    color: black;
  }
`
