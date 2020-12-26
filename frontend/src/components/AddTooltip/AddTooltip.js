import React from 'react';
import Popup from 'reactjs-popup';
import {useForm} from "react-hook-form";
import './AddTooltip.css'
import {useApi} from "../../useApi";

const AddStorage = (props) => {
    const api = useApi()
    const {register, errors, handleSubmit} = useForm();
    const onSubmit = data => {
        api.postStorage(data.storage)
        props.update(null)
    }
    return (
        <Popup
            trigger={
                <button type="button">
                    Добавить хранилище
                </button>
            }
            position={['bottom center']}
            closeOnDocumentClick
            arrow={false}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name='storage'
                    ref={register({
                        required:true
                    })}
                />
                <button type="submit">+</button>
            </form>
        </Popup>
    );
}
export {
    AddStorage
}