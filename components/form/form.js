import Input from '@components/input';
import Button from '@components/button';
import styles from './Form.module.scss';
import React from 'react';

const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL;

const Form = () => {
    const [resultData, setResultData] = React.useState(null);
    const [isEntitat, setIsEntitat] = React.useState(false);

    const registerUser = async (event) => {
        event.preventDefault();

        const res = await fetch(`${directusUrl}/items/adhesions_manifest`, {
            body: JSON.stringify({
                nom: event.target.nom.value,
                cognoms: event.target.es_entitat.checked ? null : event.target.cognoms.value,
                dni: event.target.dni.value,
                es_entitat: event.target.es_entitat.checked ? 1 : 0,
                mostra_el_meu_nom: event.target.mostra_el_meu_nom.checked ? 1 : 0,
                email: event.target.email.value,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });

        const result = await res.json();
        console.log('result ', result);
        if (!result.error) setResultData(true);
    };

    return (
        <div className={styles.form}>
            {resultData === null ? (
                <form onSubmit={registerUser}>
                    <Input
                        id='es_entitat'
                        name='Sou una entitat?'
                        type='checkbox'
                        autoComplete=''
                        placeholder=''
                        onClick={() => setIsEntitat(!isEntitat)}
                    />
                    <Input
                        id='nom'
                        name={`nom ${isEntitat ? 'de la entitat' : ''}` }
                        type='text'
                        autoComplete='nom'
                        required
                        placeholder='Introduïu-hi el nom'
                    />
                    <Input
                        id='mostra_el_meu_nom'
                        name='Voleu que mostrem el vostre nom?'
                        type='checkbox'
                        autoComplete=''
                        placeholder=''
                    />
                    {isEntitat ? null : (
                        <>
                            <Input
                                id='cognoms'
                                name='cognoms'
                                type='text'
                                autoComplete='cognoms'
                                required
                                placeholder='Introduïu-hi els cognoms'
                            />
                        </>
                    )}
                    <Input
                        id='dni'
                        name={isEntitat ? 'cif' : 'dni'}
                        type='text'
                        autoComplete='dni'
                        required
                        placeholder={`Introduïu-hi el ${isEntitat ? 'CIF' : 'DNI'}`}
                        pattern='([a-z]|[A-Z]|[0-9])[0-9]{7}([a-z]|[A-Z]|[0-9])'
                        title='Calen 8 números i una lletra'
                    />
                    <Input
                        id='email'
                        name='correu-e'
                        type='email'
                        autoComplete='email'
                        placeholder='Introduïu-hi el correu-e'
                    />
                    <Button type={'submit'} name={'adheriu-me'} />
                </form>
            ) : (
                <p className={styles.thanks}>
                    Gràcies per adherir-vos-hi! Revisarem la vostra petició, abans de publicar-la.
                </p>
            )}
        </div>
    );
};

export default Form;
