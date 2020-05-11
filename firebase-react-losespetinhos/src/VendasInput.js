import React from 'react';
import firebase from './firebase';

export const VendasInput = ({ vendas }) => {
    const [qtd_vendida, setName] = React.useState(vendas.qtd_vendida)

    const onUpdate = () => {
        const db = firebase.firestore()
        db.collection('vendas').doc(vendas.id).set({ ...vendas, qtd_vendida })
    }

    const onDelete = () => {
        const db = firebase.firestore()
        db.collection('vendas').doc(vendas.id).delete()

    }
    return (
        <div>
            <input value={qtd_vendida} onChange={e => {
                setName(e.target.value);
            }} />
            <button onClick={onUpdate}>Update</button>
            <button onClick={onDelete}>Delete</button>

        </div>
    )
}