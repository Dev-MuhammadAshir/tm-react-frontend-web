// /ui/button/Button.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.css'

const Button = ({
  as: Component = 'button', // can be 'button', Link, or any component
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  ...rest // includes onClick, disabled, to, etc.
}) => {
  const btnClass = `${styles.btn} ${styles[variant]} ${styles[size]} ${fullWidth ? styles.fullWidth : ''}`

  return (
    <Component className={btnClass} {...rest}>
      {children}
    </Component>
  )
}

export default Button
