import React from 'react';
import styles from './Input.module.scss';

const Input = ({ label, input, meta, ...rest }) => {
  console.log(meta)
  return (
    <label title={ label }>
      <span className={ styles.label }>{ label }</span>
      <input { ...input }/>
    </label>
  );
};

export default Input;