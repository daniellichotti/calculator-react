import styles from './Fundo.module.css';

export function Fundo() {
    return (
        <div className={styles.fundo}>
            <div className={styles.tela}>2+2</div>
            <div className={styles.botoesContainer}>
                <button className={styles.ac}>AC</button>
                <button className={styles.comum}>/</button>
                <button className={styles.comum}>7</button>
                <button className={styles.comum}>8</button>
                <button className={styles.comum}>9</button>
                <button className={styles.comum}>*</button>
                <button className={styles.comum}>4</button>
                <button className={styles.comum}>5</button>
                <button className={styles.comum}>6</button>
                <button className={styles.comum}>-</button>
                <button className={styles.comum}>1</button>
                <button className={styles.comum}>2</button>
                <button className={styles.comum}>3</button>
                <button className={styles.comum}>+</button>
                <button className={styles.zero}>0</button>
                <button className={styles.comum}>.</button>
                <button className={styles.comum}>=</button>
            </div>
        </div>
    );
}
