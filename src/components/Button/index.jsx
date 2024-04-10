import styled from 'styled-components';

const Button = styled.button`
    background-color: ${(props) => (props.close ? 'red' : 'blue')};
    border: none;
    color: ${(props) => (props.isRed ? 'red' : 'white')};
    border-radius: 5px;
`;

// export const NormalButton = () => <Button>o</Button>;

export const CloseButton = ({ item = {}, onRemoveItem, isRed }) => (
    <Button isRed={isRed} onClick={onRemoveItem}>
        x
    </Button>
);

export default Button;