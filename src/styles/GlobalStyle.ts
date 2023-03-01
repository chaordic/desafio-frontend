import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    scrollbar-width: auto;
    scrollbar-color: #D7D4D8 #FFFFFF;
  }
  *::-webkit-scrollbar {
    width: 6px;
  }
  *::-webkit-scrollbar-track {
    background: var( --color-gray-0);
    border-radius:0 4px 4px 0;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #FFFFFF;
    border-radius: 10px;
    border: 3px solid #D7D4D8;
  }
  ul,ol{
    list-style: none;
  }
    :root{
        --color-primary:#2d2a2b;
        --color-micro:#00d1b2;
        --color-contract:#363636;
        --color-brewpub:#ffdd57;
        --color-nano:#f85149;
        --color-regional:#3273dc;
        --color-large:#852386;
        --color-planning:#858623;
        --color-bar:#2ad100;
        --color-proprieter:#ffdd57;
        --color-closed:#0a0c10;
        --color-bg:#ffffff;
        --color-footer:#fafafa;
    }
    body{
      background-color: var( --color-bg);
      color: var(--color-contract);
    }
`;
