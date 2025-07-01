import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const FormInput = ({ 
  type, 
  placeholder, 
  value, 
  onChange, 
  error, 
  showPassword, 
  toggleShowPassword 
}) => {
  return (
    <div className="form-input-container">
      <div className="input-wrapper">
        <input
          type={type === 'password' && showPassword ? 'text' : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`form-input ${error ? 'error' : ''}`}
        />
        {type === 'password' && (
          <button 
            type="button" 
            className="password-toggle"
            onClick={toggleShowPassword}
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </button>
        )}
      </div>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default FormInput;