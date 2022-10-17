import { useState } from "react"
import { Link } from "react-router-dom"
import Alert from "../components/Alert"
import axiosClient from "../config/axiosClient"

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [alerta, setAlerta] = useState({})

  const handleSubmit = async e => {
    e.preventDefault()
    if (email === '' || email.length < 6) {
      setAlerta({
        msg: 'El email es obligatorio',
        error: true
      })
      return
    }

    try {
      const { data } = await axiosClient.post(`/usuarios/forgot-password`, { email })

      setAlerta({
        msg: data.msg,
        error: false
      })
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }

  }

  const { msg } = alerta

  return (
    <>
      <h1 className="text-red-600 font-black text-6xl capitalize select-none">Recupera tu Acceso y no Pierdas tus <span className="text-slate-700">Proyectos</span></h1>
      {msg &&  <Alert alert={alerta}/>}
      <form action="" className="my-10 p-10 bg-white shadow rounded-lg" onSubmit={handleSubmit}> 
        <div className="my-5">
          <label htmlFor="email" className="uppercase text-gray-600 block text-xl font-bold select-none">Email</label>
          <input type="email" id="email" placeholder="Email de Registro" className="w-full mt-3 p-3 border rounded-xl bg-gray-50" value={email} onChange={e => setEmail(e.target.value)}/>
        </div> 
        <input type="submit" value="Enviar Instrucciones" className="bg-red-700 w-full mb-5 py-3 font-bold text-white uppercase rounded-lg border cursor-pointer hover:bg-red-800 transition-all duration-300" />
      </form>
      <nav className="lg:flex lg:justify-between">
        <Link to="/" className="block text-center my-5 text-slate-500 uppercase text-sm">¿Ya tienes una cuenta? Inicia Sesión</Link>
        <Link to="/sign-in" className="block text-center my-5 text-slate-500 uppercase text-sm">¿No tienes una cuenta? Regístrate</Link>
      </nav>
    </>
  )
}

export default ForgotPassword