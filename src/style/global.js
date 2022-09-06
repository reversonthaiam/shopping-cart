import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --red: #e52e4d;
        --blue: #1E90FF;
        --green: #98FB98;
        --green-dark: #006400;
        --blue-light: #6933ff;

        --text-title: #d4d4d4;
        --text-body: #969cb3;

        --shape: #ffffff;
        --background: #969cb3;

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1000px){
            font-size: 93.75%; //15px
        }

        @media( max-width: 720px){
            font-size: 87.5%; //14px
        }
    }

    // REM = 1rem = 16px

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;

    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`
