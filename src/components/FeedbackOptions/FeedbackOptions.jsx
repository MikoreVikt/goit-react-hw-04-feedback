import PropTypes from 'prop-types';
import { ButtonsWrapper, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) =>
    <ButtonsWrapper>
        {options.map(option =>
            <Button key={option} onClick={() => onLeaveFeedback(option)}>
                {option}
            </Button>
        )}
    </ButtonsWrapper>

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
