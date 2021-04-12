import Input from '@components/input';
import Button from '@components/button';
import styles from './Form.module.scss';
import React from 'react';

const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL;

const Form = () => {
    const [resultData, setResultData] = React.useState(null);
    const registerUser = async (event) => {
        event.preventDefault();

        const res = await fetch(`${directusUrl}/items/adhesions_manifest`, {
            body: JSON.stringify({
                nom: event.target.nom.value,
                cognoms: event.target.cognoms.value,
                dni: event.target.dni.value,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });

        const result = await res.json();
        setResultData(result.data.nom);
    };

    return (
        <div className={styles.form}>
            {resultData === null ? (
                <form onSubmit={registerUser}>
                    <Input
                        id='nom'
                        name='nom'
                        type='text'
                        autoComplete='nom'
                        required
                        placeholder='Introduïu el vostre nom'
                    />
                    <Input
                        id='cognoms'
                        name='cognoms'
                        type='text'
                        autoComplete='cognoms'
                        required
                        placeholder='Introduïu els vostres cognoms'
                    />
                    <Input
                        id='dni'
                        name='dni'
                        type='text'
                        autoComplete='dni'
                        required
                        placeholder='Introduïu el vostre DNI'
                        pattern='[0-9]{8}[A-Za-z]{1}'
                        title='Calen 8 números i una lletra'
                    />
                    <Button type={'submit'} name={'adheriu-me'} />
                </form>
            ) : (
                <p>Gràcies, {resultData}, per adherir-vos-hi!</p>
            )}
        </div>
    );
};

export default Form;
