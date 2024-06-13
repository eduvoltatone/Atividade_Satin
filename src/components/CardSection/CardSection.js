import PropTypes from 'prop-types';
import styles from './CardSection.module.css';

const CardSection = ({ titulo, children }) => {
    return (
        <section className={styles.cardSection}>
            <h2 className={styles.title}>{titulo}</h2>
            <div className={styles.content}>
                {children}
            </div>
        </section>
    );
};

CardSection.propTypes = {
    titulo: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default CardSection;
