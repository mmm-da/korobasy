import React, {useEffect, useState} from 'react';
import Popup from 'reactjs-popup';
import {useForm} from "react-hook-form";
import './AddTooltip.css'
import {useApi} from "../../useApi";
import  {useHistory} from 'react-router'
import {Spinner} from "../Spinner/Spinner";
import {useAuth} from "../../useAuth";

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
                <div className='tooltip-form'>
                    <input
                        name='storage'
                        ref={register({
                            required:true
                        })}
                        placeholder="Новое хранилище"
                    />
                    <button type="submit">Добавить</button>
                </div>
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
                    <div className='tooltip-form'>
                        <input
                            name='storage'
                            ref={register({
                                required:true
                            })}
                            placeholder="Новое название"
                        />
                        <button type="submit">Изменить</button>
                    </div>
                </form>
                <button onClick={removeStorage}>Удалить</button>
            </div>
        </Popup>
    );
}

const AddThing = () => {
    const history = useHistory()
    const api = useApi()
    const {register, errors, handleSubmit} = useForm();
    const onSubmit = data => {
        api.postThing(data.name,data.description)
        history.go(0)
    }

    return (
        <Popup
            trigger={
                <button type="button">
                    Добавить штуку
                </button>
            }
            position={['bottom center']}
            closeOnDocumentClick
            arrow={false}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='tooltip-form'>
                    <input
                        name='name'
                        ref={register({
                            required:true
                        })}
                        placeholder="Название штуки"
                    />
                    <input
                        name='description'
                        ref={register({
                            required:true
                        })}
                        placeholder="Описание штуки"

                    />
                    <button type="submit">Добавить</button>
                </div>
            </form>
        </Popup>
    );
}

const AddInstance = () => {
    const history = useHistory()
    const auth = useAuth()
    const api = useApi()
    const {register, errors, handleSubmit} = useForm();
    const onSubmit = data => {
        api.postInstance(data.count,data.thing,data.section)
    }

    const [storagesSelect,setStorageSelect] = useState(null)
    const [thingSelect,setThingSelect] = useState(null)
    const [currentStorage,setCurrentStorage] = useState(null)
    const [sectionsSelect,setSectionsSelect] = useState(null)

    const getStorages = async (uuidList) => {
        return Promise.all(
            uuidList.map(
                uuid => api.getStorage(uuid)
            )
        );
    }

    const getSections = async (uuidList) => {
        return Promise.all(
            uuidList.map(
                uuid => api.getSection(uuid)
            )
        );
    }

    const changeStorage = (event) =>{
        console.log(event.target.value)
        setCurrentStorage(event.target.value)
    }

    useEffect(
        ()=>{
            api.getThings().then(
                (result)=>{
                    setThingSelect(
                        result.map(thing => <option value={thing.id}>{thing.name}</option>)
                    )
                }
            )
        },[]
    )

    useEffect(
        ()=>{
            if (auth.user){
                getStorages(auth.user.storages).then(
                    (result)=>{
                        setStorageSelect(
                            result.map(storage => <option value={storage.id}>{storage.name}</option>)
                        )
                    }
                )
            }
        },[auth.user]
    )

    useEffect(
        ()=>{
            if (auth.user){
                getStorages(auth.user.storages).then(
                    (result)=>{
                        setStorageSelect(
                            result.map(storage => <option value={storage.id}>{storage.name}</option>)
                        )
                    }
                )
            }
        },[auth.user]
    )

    useEffect(
        ()=>{
            if (currentStorage){
                api.getStorage(currentStorage).then(
                    result =>{
                        const sections = result.sections
                        getSections(sections).then(
                            (result)=>{
                                setSectionsSelect(
                                    result.map(section => <option value={section.id}>{section.name}</option>)
                                )
                            }
                        )
                    }
                )

            }
        },[currentStorage]
    )

    return (
        <Popup
            trigger={
                <button type="button">
                    Положить штуку
                </button>
            }
            position={['bottom center']}
            closeOnDocumentClick
            arrow={false}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='tooltip-form'>
                    <select
                        name='thing'
                        ref={register({
                            required:true
                        })}
                    >
                        {thingSelect}
                    </select>

                    <select
                        name='storage'
                        ref={register({
                            required:true
                        })}
                        onChange={changeStorage}
                    >
                        {storagesSelect}
                    </select>

                    <select
                        name='section'
                        ref={register({
                            required:true
                        })}
                    >
                        {sectionsSelect}
                    </select>

                    <input
                        name='count'
                        ref={register({
                        required:true
                        })}
                        placeholder="Кол-во штук"

                    />
                    <button type="submit">Положить</button>
                </div>
            </form>
        </Popup>
    );
}
export {
    AddStorage,
    EditStorage,
    AddThing,
    AddInstance
}