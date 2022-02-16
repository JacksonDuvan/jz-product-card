import React, { useContext, CSSProperties, useCallback } from 'react'
import { ProductContext } from './ProductCard'
import styles from '../styles/styles.module.css'

export interface Props {
    className?: string,
    style?: CSSProperties
}

export const ProductButtons = ({ className, style }: Props) => {
    const {increaseBy, counter, maxCount } = useContext(ProductContext)
    const isMaxReached = useCallback(() => !!maxCount && counter === maxCount, [counter, maxCount])
   
    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
                -
            </button>
            <div className={styles.countLabel}>{counter}</div>
            <button 
                disabled={isMaxReached()}
                onClick={() => increaseBy(1)} 
                className={`${styles.buttonAdd} 
                ${isMaxReached() && styles.disabled}`}
            >
                +
            </button>
        </div>
    )
}
