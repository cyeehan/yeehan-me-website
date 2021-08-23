import styled from 'styled-components';
import dosisRegularTTF from '../fonts/Dosis-Regular.ttf';

export const ContainerWrapper = styled.div`
  /* background-attachment: fixed;
  background-color: #ffffff;
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj48ZGVmcz48cGF0dGVybiBpZD0icGF0dGVybiIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHZpZXdCb3g9IjAgMCA0MCw0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDIwNSkgIj48cmVjdCBpZD0icGF0dGVybi1iYWNrZ3JvdW5kIiB3aWR0aD0iNDAwJSIgaGVpZ2h0PSI0MDAlIiBmaWxsPSJyZ2JhKDI1NSwgMjUwLCAyNDAsMSkiPjwvcmVjdD4gPHBhdGggZmlsbD0icmdiYSgyNTUsIDI1MCwgMjQwLDEpIiBkPSIKICAgICAgICAgICAgICAgIE0tMjAgMzEgbDIwIC0yMCBsMjAgMjAgbDIwIC0yMCBsMjAgMjAgbDIwIC0yMCBsMjAgMjAgdi0yIGwtMjAgLTIwIGwtMjAgMjAgbC0yMCAtMjAgbC0yMCAyMCBsLTIwIC0yMCBsLTIwIDIwIHoKICAgICAgICAgICAgICAgIE0tMjAgLTkgbDIwIC0yMCBsMjAgMjAgbDIwIC0yMCBsMjAgMjAgbDIwIC0yMCBsMjAgMjAgdi0yIGwtMjAgLTIwIGwtMjAgMjAgbC0yMCAtMjAgbC0yMCAyMCBsLTIwIC0yMCBsLTIwIDIwIHoKICAgICAgICAgICAgICAgIE0tMjAgNzEgbDIwIC0yMCBsMjAgMjAgbDIwIC0yMCBsMjAgMjAgbDIwIC0yMCBsMjAgMjAgdi0yIGwtMjAgLTIwIGwtMjAgMjAgbC0yMCAtMjAgbC0yMCAyMCBsLTIwIC0yMCBsLTIwIDIwIHoKICAgICAgICAgICAgICAgICI+PC9wYXRoPjxwYXRoIGZpbGw9InJnYmEoMjM1LCAyNDgsIDI1NSwxKSIgZD0iCiAgICAgICAgICAgICAgICBNLTYwIDMwLjUgbDIwIC0yMCBsMjAgMjAgbDIwIC0yMCBsMjAgMjAgbDIwIC0yMCBsMjAgMjAgbDIwIC0yMCBsMjAgMjAgdi0xIGwtMjAgLTIwIGwtMjAgMjAgbC0yMCAtMjAgbC0yMCAyMCBsLTIwIC0yMCBsLTIwIDIwIGwtMjAgLTIwIGwtMjAgMjAgegogICAgICAgICAgICAgICAgTS02MCAtOS41IGwyMCAtMjAgbDIwIDIwIGwyMCAtMjAgbDIwIDIwIGwyMCAtMjAgbDIwIDIwIGwyMCAtMjAgbDIwIDIwIHYtMSBsLTIwIC0yMCBsLTIwIDIwIGwtMjAgLTIwIGwtMjAgMjAgbC0yMCAtMjAgbC0yMCAyMCBsLTIwIC0yMCBsLTIwIDIwIHoKICAgICAgICAgICAgICAgIE0tNjAgNzAuNSBsMjAgLTIwIGwyMCAyMCBsMjAgLTIwIGwyMCAyMCBsMjAgLTIwIGwyMCAyMCBsMjAgLTIwIGwyMCAyMCB2LTEgbC0yMCAtMjAgbC0yMCAyMCBsLTIwIC0yMCBsLTIwIDIwIGwtMjAgLTIwIGwtMjAgMjAgbC0yMCAtMjAgbC0yMCAyMCB6CiAgICAgICAgICAgICAgICAiPjwvcGF0aD48L3BhdHRlcm4+ICA8L2RlZnM+IDxyZWN0IGZpbGw9InVybCgjcGF0dGVybikiIGhlaWdodD0iMTAwJSIgd2lkdGg9IjEwMCUiPjwvcmVjdD48L3N2Zz4=');
  display: grid;
  gap: 0 2rem;
  grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
  grid-template-rows: 7.8rem 20rem 5rem auto;
  height: 100%;

  @media ${(
    props,
  ) =>
    props.theme.breakpoints
      .tablet} {
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    grid-gap: 0 1rem;
  }

  @media ${(
    props,
  ) =>
    props.theme.breakpoints
      .mobile} {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
  } */

  @font-face {
    font-family: 'Dosis, sans-serif';
    src: url(${dosisRegularTTF}) format('truetype');
    font-style: normal;
  }
  * {
    /* font-family: 'Merriweather, sans-serif'; */
  }
  /* font-family: 'Dosis'; */
  display: block;
  height: 100%;
  margin: 1rem;

  /* @media ${(props) => props.theme.breakpoints.tablet} { */
  /* padding: ${(props) =>
    `${props.theme.spacings.xLarge} ${props.theme.spacings.small}`}; */
  /* padding: 2rem 1rem; */
  /* margin: 1rem; */
  /* } */

  /* @media ${(props) => props.theme.breakpoints.mobile} { */
  /* padding: ${(props) =>
    `${props.theme.spacings.xLarge} ${props.theme.spacings.small}`}; */
  /* padding: 2rem 1rem; */
  /* margin: 1rem; */
  /* } */

  /* https://github.com/JimmyBeldone/gatsby-plugin-breakpoints */
`;
