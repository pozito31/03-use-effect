/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

export const AjaxComponent = () => {

    const [usuarios, setUsuarios] = useState({});

    //Generico / basico
    const getUsuariosEstaticos = () => {
        setUsuarios([
            {
                "id": 1,
                "email": "victor@reqres.in",
                "first_name": "Victor",
                "last_name": "Robles"
            },
            {
                "id": 2,
                "email": "juan@reqres.in",
                "first_name": "Juan",
                "last_name": "Lopez"
            },
            {
                "id": 3,
                "email": "pepe@reqres.in",
                "first_name": "Pepe",
                "last_name": "Lopez"
            }
        ]);
    }

    const getUsuariosAjaxPms = () => {
        fetch("https://reqres.in/api/users?page=1")
            .then(respuesta => respuesta.json())
            .then(resultado_final => {
                setUsuarios(resultado_final.data);
                console.log(usuarios);
            },
            error => {
                console.log(error);
            })
    }

    const getUsuariosAjaxAW = async() => {
        const peticion = await fetch("https://reqres.in/api/users?page=1");
        const { data } = await peticion.json();

        console.log(data);
    }

    useEffect(() => {
        //getUsuariosEstaticos();
        //getUsuariosAjaxPms();
        getUsuariosAjaxAW();
    }, []);

    return (
        <div>
            <h2>Listado de usuarios via Ajax</h2>
            <ol className='usuarios'>
                {
                    usuarios.map(usuario => {
                        return <li key={usuario.id}>{usuario.first_name} {usuario.last_name}</li>
                    })
                }
            </ol>
        </div>
    );
}
