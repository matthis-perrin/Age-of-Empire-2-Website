import * as React from 'react';
import styled from 'styled-components';

export function Linky(props: {text: string}): JSX.Element {
return <Wrapper>{props.text}</Wrapper>;
}
Linky.displayName = 'Linky';

const Wrapper = styled.a`
  color: blue;
  text-decoration: underline;
`;
