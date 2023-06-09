import React from 'react';
import styles from '../../styles/ATM.module.css';


function ATM(props) {
    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      return 'card mb-3 ' + bg + txt;
    }

    return (
       <div id="atmCard" className={classes()} style={{maxWidth: "18rem",  boxShadow: '2px 2px 13px rgba(0, 0, 0, 0.7)'}}>
        <div className={styles.card}>
          <div className={styles.card_header} >{props.header}</div>
          <div className={styles.card_body} >
            {props.title && (<h3 className={styles.card_title}>{props.title}<span className={styles.card_balance}>&emsp;{props.balance}</span></h3> )  }
            {props.body}
            {props.status && (<div id='createStatus'>{props.status}</div>)}
            {props.submit && (<Button id='Submit'>{props.status}</Button>)}
          </div>
        </div>      
      </div>
    );
  }

  export default ATM;