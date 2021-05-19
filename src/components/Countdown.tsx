import { useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css'

export function Countdown(){
    const { 
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown 
    } = useContext(CountdownContext)

    /**
     * String transforma um numero em string
     * a função split separa os caracteres em um array, como n foi passado um caracter, cada caractere vira uma posição no array
     * exemplo '25' -> '2' e '5'
     * porem se só houver 1 numero nao ha como dividir
     * por isso o padStart, colocando 1 zero no inicio se nao houver pelo menos 2 caracteres
     */
    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');

   
    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button 
                    disabled
                    className={styles.countdownButton}      
                >
                    Ciclo encerrado
                </button>
            ): (
                <>
                    { isActive ? (
                        <button 
                            type='button' 
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            onClick={resetCountdown}
                        >
                            Abandonar ciclo
                        </button>
                    ) : (
                        <button 
                            type='button' 
                            className={styles.countdownButton}
                            onClick={startCountdown}
                        >
                            Iniciar um ciclo
                        </button>
                    ) }
                </>
            )}

            
        </div>
    )
}