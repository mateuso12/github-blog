import styled from 'styled-components'

export const PostContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 2rem;
  margin-bottom: 8rem;
  max-width: 895px;
  color: white;

  img {
    width: 100%;
  }

  h1,
  h2,
  h3 {
    color: '#3294F8';
  }

  ul {
    list-style: inherit;
    padding-left: 1.5rem;
  }

  pre {
    background: '#112131';
    padding: 1rem;

    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;

      code {
        font-family: 'FiraCode', monospace !important;
        line-height: 160% !important;
      }
    }
  }
`
