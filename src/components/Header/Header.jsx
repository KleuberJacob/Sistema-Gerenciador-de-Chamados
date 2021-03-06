import './Header.css'
import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'
import { Link } from 'react-router-dom'
import avatar from '../../assets/avatar.png'
import { FiHome, FiUser, FiSettings } from "react-icons/fi"

export default function Header(){

    const { user } = useContext(AuthContext)

    return(
        <div className='sidebar'>
            
            <div>
                <img src={ user.avatarUrl === null ? avatar : user.avatarUrl } alt='Foto de Perfil'></img>
            </div>

            <Link to='/dashboard'>
                <FiHome color='#fff'/>Chamados
            </Link>

            <Link to='/customers'>
                <FiUser color='#fff'/>Clientes
            </Link>

            <Link to='/profile'>
                <FiSettings color='#fff'/>Configurações
            </Link>
        </div>
    )
}