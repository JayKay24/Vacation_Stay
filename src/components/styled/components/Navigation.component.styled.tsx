import styled from 'styled-components';

const StyledNavBar = styled.nav`
    background-color: #faff33;
    border: 1px solid black;
    display: flex;
    height: 70px;
    justify-content: space-around;

    > h2 {        
        > a {
            color: black;
            text-decoration: none;
        }
    }

    @media screen and (max-width: 400px) {
        text-align: center;
    }
`;

export default StyledNavBar;
