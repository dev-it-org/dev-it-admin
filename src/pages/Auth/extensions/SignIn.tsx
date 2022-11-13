import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { T_SignInFormData, T_SignInProps } from './models'
import * as S from './styles'

import { E_Mode } from '../models'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { E_Routes } from 'models/routes'
import { authAPI } from 'services'
import { setAuth } from 'store/ui'
import { LocalStorage } from 'utils/helpers/localStorage'

export const SignIn = ({ handleToggleAuthMode }: T_SignInProps) => {
  const dispatch = useStoreDispatch()

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
      console.log(signInData)
      LocalStorage.setAuthToken(signInData.data.accessToken)
      dispatch(setAuth(true))
      navigate(E_Routes.home, { replace: true })
    }
  }, [signInData])

  return (
    <S.Inner>
      <S.Form onSubmit={handleSubmit(handleSend)}>
        <S.TextField type='text' {...register('email', { required: true })} />
        <S.TextField type='password' {...register('password', { required: true })} />
        <S.Button disabled={isLoading} type='submit'>
          Sign in
        </S.Button>
        <S.Box>
          <S.Typography>Unregistered?</S.Typography>
          <S.Button onClick={() => handleToggleAuthMode(E_Mode.signUp)}>Sign up</S.Button>
        </S.Box>
      </S.Form>
    </S.Inner>
  )
}
