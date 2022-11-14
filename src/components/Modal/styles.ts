import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Modal = styled(motion.div)`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  width: 100%;
  height: 100%;
  box-shadow: 8px 0 15px -3px rgb(0 0 0 / 10%);

  & > div {
    z-index: 10001;
  }
`

export const ModalOverlay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgb(0 0 0 / 50%);
`
