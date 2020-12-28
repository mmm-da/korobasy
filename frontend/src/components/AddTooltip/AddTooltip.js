import React, {useState} from 'react';
import Popup from 'reactjs-popup';
import {useForm} from "react-hook-form";
import './AddTooltip.css'
import {useApi} from "../../useApi";
import  {useHistory} from 'react-router'
import {Spinner} from "../Spinner/Spinner";

const AddStorage = () => {
    const history = useHistory()
    const api = useApi()
    const {register, errors, handleSubmit} = useForm();
    const onSubmit = data => {
        api.postStorage(data.storage)
        history.go(0)
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

const EditStorage = (props)=> {
    const storage = props.storage;
    const api = useApi()
    const [header,setHeader] = useState(storage.name)
    const {register, errors, handleSubmit} = useForm();

    const history = useHistory()

    const removeStorage = () =>{
        api.deleteStorage(storage.id).then(
            ()=>{
                history.go(-1)
            })
    }

    const onSubmit = data => {
        api.patchStorageName(storage.id,data.storage).then(
            ()=>{
                setHeader(data.storage)
            }
        )
    }

    return (
        <Popup
            trigger={
                <h1>
                    {header}
                </h1>
            }
            position={'bottom center'}
            closeOnDocumentClick
            arrow={false}
        >
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        name='storage'
                        ref={register({
                            required:true
                        })}
                        placeholder="Новое название"
                    />
                    <button type="submit">✓</button>
                </form>
                <button onClick={removeStorage}>Удалить</button>
            </div>
        </Popup>
    );
}
export {
    AddStorage,
    EditStorage
}