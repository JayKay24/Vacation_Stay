import styled from 'styled-components';

const StyledDisplayVacationStay = styled.div`
    border: 1px solid black;
    padding: 5px;

    > .languages, .amenities, .policies {
        border: 1px solid black;
        margin-top: 5px;
        padding: 5px;
    }

    > .fp-images {
        border: 1px solid black;
        margin-top: 5px;
        padding: 5px;

        > .image-container {
            display: flex;
            flex-wrap: wrap;
            
            justify-content: space-around;
            

            > .image-box {
                border: 1px solid black;
                display: block;
                height: 150px;
                margin-bottom: 5px;
                width: 250px;
            }
        }
    }
`;

export default StyledDisplayVacationStay;
