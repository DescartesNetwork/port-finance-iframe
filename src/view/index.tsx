import { useEffect } from 'react'
import { useSetBackground } from '@sentre/senhub'

import EmbededView from '@sentre/embeded-view'

import configs from 'configs'

const {
  manifest: { appId },
} = configs

const View = () => {
  const setBackground = useSetBackground()

  useEffect(() => {
    setBackground({ light: '#18192f', dark: '#18192f' })
  }, [setBackground])

  return (
    <EmbededView
      appId={appId}
      src={'https://mainnet.port.finance'}
      title="The First Non-Custodial Liquidity Protocol On Solana"
      wallet={window.sentre.wallet}
    />
  )
}

export default View
