import React from 'react';
import PropTypes from 'prop-types';
import styles from './EmailTemplate.module.css';

const EmailTemplate = ({
  headerText,
  bodyText,
  footerText,
  imageUrl,
  themeColor,
  borderWidth,
  padding,
  rows,
}) => {
  return (
    <div
      className={styles.container}
      style={{
        borderColor: themeColor,
        borderWidth: `${borderWidth}px`,
        padding,
      }}
    >
      {/* Header */}
      <div className={styles.header} style={{ backgroundColor: themeColor }}>
        <h1>{headerText}</h1>
      </div>

      {/* Image */}
      {imageUrl && (
        <div className={styles.image}>
          <img src={imageUrl} alt="email visual" />
        </div>
      )}

      {/* Body */}
      <div className={styles.body}>
        <p>{bodyText}</p>
        {rows.map((row, index) => (
          <p key={index}>{row.text}</p>
        ))}
      </div>

      {/* Footer */}
      <div className={styles.footer} style={{ backgroundColor: themeColor }}>
        <p>{footerText}</p>
      </div>
    </div>
  );
};

EmailTemplate.propTypes = {
  headerText: PropTypes.string,
  bodyText: PropTypes.string,
  footerText: PropTypes.string,
  imageUrl: PropTypes.string,
  themeColor: PropTypes.string,
  borderWidth: PropTypes.number,
  padding: PropTypes.string,
  rows: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string })),
};

EmailTemplate.defaultProps = {
  headerText: 'Welcome!',
  bodyText: 'This is a sample email body.',
  footerText: 'Thank you for reading.',
  imageUrl: '',
  themeColor: '#007bff',
  borderWidth: 2,
  padding: '10px',
  rows: [],
};

export default EmailTemplate;