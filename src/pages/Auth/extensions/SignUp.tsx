import { useForm } from 'react-hook-form'

import { T_SignUpFormData, T_SignUpProps } from './models'
import * as S from './styles'

import { E_AuthMode } from '../models'

export const SignUp = ({ handleToggleAuthMode }: T_SignUpProps) => {
  const { register, handleSubmit } = useForm<T_SignUpFormData>({
    defaultValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
  })

  const handleSend = (data: T_SignUpFormData) => {
    if (data.password !== data.confirmPassword) {
      alert('password is incorrect')
      return
    }
    console.log({
      email: data.email,
      username: data.username,
      password: data.password,
    })
  }

  return (
    <S.Inner>
      <S.Form onSubmit={handleSubmit(handleSend)}>
        <S.TextField type='text' {...register('email', { required: true })} />
        <S.TextField type='text' {...register('username')} />
        <S.TextField type='password' {...register('password', { required: true })} />
        <S.TextField type='password' {...register('confirmPassword', { required: true })} />
        <S.Button type='submit'>Sign up</S.Button>
        <S.Box>
          <S.Typography>Already have an account?</S.Typography>
          <S.Button onClick={() => handleToggleAuthMode(E_AuthMode.signIn)}>Sign in</S.Button>
        </S.Box>
      </S.Form>
    </S.Inner>
  )
}
