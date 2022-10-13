import EmbededView from '@sentre/embeded-view'

import configs from 'configs'

const {
  manifest: { appId },
} = configs

const View = () => {
  return (
    <EmbededView
      appId={appId}
      src={'https://mainnet.port.finance'}
      title="The First Non-Custodial Liquidity Protocol On Solana"
      wallet={window.sentre.solana}
    />
  )
}

export default View
