import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(() => {
        //Cuando el componente se monta
        alert("El componente AvisoComponent está montada !!");

        //Cuando el componente se desmonta
        return () => {
            alert("Componente desmontado !!");
        };
    }, []);

    return (
        <div>
            <h3>Saludos Jessica ¿Que tal estas?</h3>
            <button onClick={e => {
                alert("Bienvenida!!")
            }}>Mostrar alerta</button>
        </div>
    );
}
