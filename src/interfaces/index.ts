export interface IBlockChainData{
  data: {
    items: IBlockChainDataItems[]
  };
}

export interface IBlockChainDataItems {
  minedInBlockHash: string;
  minedInBlockHeight: number;
  recipients: IRecipientData[]
}

export interface IRecipientData{
  address: string;
  amount: string;
}