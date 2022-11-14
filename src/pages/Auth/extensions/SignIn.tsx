import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { T_SignInFormData, T_SignInProps } from './models'
import * as S from './styles'

import { E_AuthMode } from '../models'

import { E_Routes } from 'models/routes'
import { E_UserRole } from 'models/users'
import { authAPI } from 'services'
import { LocalStorage } from 'utils/helpers/localStorage'

export const SignIn = ({ handleToggleAuthMode }: T_SignInProps) => {
  const navigate = useNavigate()

  const [signIn, { data: signInData, isLoading }] = authAPI.useSignInMutation()

  const { register, handleSubmit } = useForm<T_SignInFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const handleSend = (data: T_SignInFormData) => {
    signIn({
      ...data,
    })
  }

  useEffect(() => {
    if (signInData) {
      LocalStorage.setAuthToken(signInData.data.accessToken)
      if (signInData.data.role === E_UserRole.User) {
        navigate(E_Routes.posts, { replace: true })
      } else {
        navigate(E_Routes.dashboard, { replace: true })
      }
    }
  }, [signInData])

  return (
    <S.Inner>
      <S.Form onSubmit={handleSubmit(handleSend)}>
        <S.TextField placeholder='Email' {...register('email', { required: true })} />
        <S.TextField
          placeholder='Password'
          type='password'
          {...register('password', { required: true })}
        />
        <S.ButtonGroup>
          <S.Button disabled={isLoading} type='submit'>
            Sign in
          </S.Button>
          <S.Box>
            <S.LinkButton
              disabled={isLoading}
              onClick={() => handleToggleAuthMode(E_AuthMode.signUp)}
            >
              Does not have an account?
            </S.LinkButton>
          </S.Box>
        </S.ButtonGroup>
      </S.Form>
    </S.Inner>
  )
}
