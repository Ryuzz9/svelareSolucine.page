import React, { useState } from "react";
import styles from './Contato.module.css';
import 'animate.css';
import AOS from "aos";

function Contato() {


    return (
        <section className={styles.contato}>
            <div className={styles.container}>
                
                <div className={styles.tituloContato}>
                    <img src="./src/assets/img/iconContato.png" alt="iconContato" />
                    <h1>FALE CONOSCO</h1>
                    
                </div>
                
                  <div className={styles.subtitle}>
                    <h2>CONTATO</h2>
                    <div className={styles.line}></div>
                    
                    
                    <p>Selecione abaixo o motivo
                        de seu contato:</p>
                    <button className={styles.btn}>Quero ingressar em um processo</button>
                    <button className={styles.btn}>Quero ingressar em um processo</button>
                    <button className={styles.btn}>Quero ingressar em um processo</button>
                    <button className={styles.btn}>Quero ingressar em um processo</button>
                </div>
               
                 

              
            </div>
            <div className={styles.conntainer2}>
                 <div className={styles.logo}>
    
                    <div className={styles.formulario}>
                        <h2>Preencha com seus dados <br />abaixo</h2>
                         <div className={styles.formularioInfo}>
                        <label htmlFor="text" className={styles.inputText}></label>
                        <input
                            className={styles.input}
                            type="text"
                            id="name"
                            name="name"
                        />
                        <label htmlFor="text" className={styles.inputText}></label>
                        <input
                            className={styles.input}
                            type="text"
                            id="email"
                            name="name"
                        />
                        <label htmlFor="text" className={styles.inputText}></label>
                        <input
                            className={styles.input}
                            type="text"
                            id="whatsapp"
                            name="name"
                        />
                        <label htmlFor="message" className={styles.inputText}></label>
                        <textarea
                            className={styles.input}
                            type="text"
                            id="message"
                            name="name"
                            rows="5"
                        />
                        <button className={styles.btn2}>Enviar Mensagem</button>
                        


                    </div>
                    </div>
                </div>

            </div>
            
            



        </section>

    )

}

export default Contato;