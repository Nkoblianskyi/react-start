import styled from 'styled-components';

const Button = styled.button`
    background-color: ${(props) => (props.close ? 'red' : 'blue')};
    border: none;
    color: ${(props) => (props.isRed ? 'blue' : 'white')};
    border-radius: 5px;
`;

export const NormalButton = () => <Button>o</Button>;

export const CloseButton = ({ item = {}, onRemoveItem }) => (
    <Button close isRed={item.count > 0} onClick={onRemoveItem}>
        x
    </Button>
);

export default Button;