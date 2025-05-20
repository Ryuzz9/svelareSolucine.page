import React, { useState, useEffect } from "react";
import styles from './Contato.module.css';
import 'animate.css';
import AOS from "aos";
import "aos/dist/aos.css";

function Contato() {

    
        useEffect(() => {
            AOS.init({
                duration: 1000, // Duração da animação
                easing: "ease-in-out", // Tipo de easing
                once: true, // Animação ocorre apenas uma vez
            });
        }, []);
    


    return (
        <section className={styles.contato} id="contato">
            <div className={styles.container} data-aos="fade-in">
                
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
            <div className={styles.conntainer2}data-aos="fade-in">
                 <div className={styles.logo}>
    
                    <div className={styles.formulario} data-aos="fade-right">
                        <h2>Preencha com seus dados <br />abaixo</h2>
                         <div className={styles.formularioInfo}>
                        <label htmlFor="text" className={styles.inputText}></label>
                        <input
                            className={styles.input}
                            type="text"
                            id="name"
                            name="name"
                            placeholder="NOME"
                        />
                        <label htmlFor="text" className={styles.inputText}></label>
                        <input
                            className={styles.input}
                            type="text"
                            id="email"
                            name="name"
                            placeholder="Email"
                        />
                        <label htmlFor="text" className={styles.inputText}></label>
                        <input
                            className={styles.input}
                            type="text"
                            id="whatsapp"
                            name="name"
                            placeholder="Whatsapp"
                        />
                        <label htmlFor="message" className={styles.inputText}></label>
                        <textarea
                            className={styles.input}
                            type="text"
                            id="message"
                            name="name"
                            rows="5"
                            placeholder="Mensagem"
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