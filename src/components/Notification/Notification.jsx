import PropTypes from 'prop-types';
import { TfiFaceSad } from 'react-icons/tfi';
import { NotificationWrapper, NotificationMessage } from './Notification.styled';

export const Notification = ({ message }) =>
    <NotificationWrapper>
        <NotificationMessage>{message}</NotificationMessage>
        <TfiFaceSad size={`1.5em`}/>
    </NotificationWrapper>

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}
