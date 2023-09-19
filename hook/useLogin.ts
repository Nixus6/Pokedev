import { messageErrors } from '@/lib/types';
import users from '@/users.json' assert{type: 'json'}
import { useState } from 'react';
// import { redirect , useRouter, usePathname, useSearchParams} from 'next/navigation'
// import { useRouter } from "next/navigation";

interface LoginType {
    email: string;
    password: string;
}

const getDataUser = (
) => {
    const [messageAmbos, setMessage] = useState('');
    const [messageEmail, setEmail] = useState('');
    const [enter, setEnter] = useState(false);

    // let enter = false;
    const LoginUser = (data: LoginType) => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        let errOutputs = false;
        // const pathname = usePathname()
        // const searchParams = useSearchParams()
        if (data.email === '' || data.password === '') {
            errOutputs = true;
            setMessage('Ingrese un email y contraseña');
        } else if (data.email !== users[0].email || data.password !== users[0].password) {
            errOutputs = true;
            setMessage('Correo y/o Contraseña Incorrectos');
        } else {
            setMessage('');
        }
        if (!regex.test(data.email)) {
            errOutputs = true;
            setEmail('Ingrese un formato de correo valido')
        } else {
            setEmail('');
        }
        if (!errOutputs) {
            console.log(":::Ingreso::::")
            localStorage.setItem('JWToken', users[0].token);
            localStorage.setItem('name', users[0].name);
            setEnter(true)
        }
    }
    return { LoginUser, messageAmbos, messageEmail, enter }
}

export default getDataUser;
