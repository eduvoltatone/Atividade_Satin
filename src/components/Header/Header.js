import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = ({ titulo }) => {
    return (
        <header className={styles.header}>
            <h1>{titulo}</h1>
        </header>
    );
};

Header.propTypes = {
    titulo: PropTypes.string.isRequired,
};

export default Header;
