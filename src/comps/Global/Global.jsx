import React from 'react';
import styles from './Global.module.css';

const Global = ({ data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed) {
        return 'Loading...';
    }

    return (
        <div className={styles.container}>
            <h5>Last Update : {new Date(lastUpdate).toString()}</h5>
            <ul className={styles.grid}>
                <ul className={styles.card1}>
           
           <h5>P O S I T I V E</h5>
           <p>{confirmed.value}</p>
        
           </ul>
           <ul className={styles.card2}>
           
           <h5>R E C O V E R E D</h5>
           <p>{recovered.value}</p>
         
           </ul>
           <ul className={styles.card3}>
         
           <h5>D E A T H</h5>
           <p>{deaths.value}</p>
      
           </ul>
           </ul>

        </div>
    )
}

export default Global;