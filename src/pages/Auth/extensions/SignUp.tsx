import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { T_SignUpFormData, T_SignUpProps } from './models'
import * as S from './styles'

import { E_AuthMode } from '../models'

import { E_Routes } from 'models/routes'
import { E_UserRole } from 'models/users'
import { authAPI } from 'services'
import { LocalStorage } from 'utils/helpers/localStorage'

export const SignUp = ({ handleToggleAuthMode }: T_SignUpProps) => {
  const navigate = useNavigate()

  const [signUp, { data: signUpData, isLoading }] = authAPI.useSignUpMutation()

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
    signUp({
      email: data.email,
      username: data.username,
      password: data.password,
    })
  }

  useEffect(() => {
    if (signUpData) {
      LocalStorage.setAuthToken(signUpData.data.accessToken)
      if (signUpData.data.role === E_UserRole.User) {
        navigate(E_Routes.posts, { replace: true })
      } else {
        navigate(E_Routes.dashboard, { replace: true })
      }
    }
  }, [signUpData])

  return (
    <S.Inner>
      <S.Form onSubmit={handleSubmit(handleSend)}>
        <S.TextField placeholder='Email' {...register('email', { required: true })} />
        <S.TextField placeholder='Username' {...register('username')} />
        <S.TextField
          placeholder='Password'
          type='password'
          {...register('password', { required: true })}
        />
        <S.TextField
          placeholder='Confirm password'
          type='password'
          {...register('confirmPassword', { required: true })}
        />
        <S.ButtonGroup>
          <S.Button disabled={isLoading} type='submit'>
            Sign up
          </S.Button>
          <S.Box>
            <S.LinkButton
              disabled={isLoading}
              onClick={() => handleToggleAuthMode(E_AuthMode.signIn)}
            >
              Have an account?
            </S.LinkButton>
          </S.Box>
        </S.ButtonGroup>
      </S.Form>
    </S.Inner>
  )
}
