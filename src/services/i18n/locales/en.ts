// tslint:disable:max-line-length
export default {
  shared: {
    menu: {
      myCashflows: 'My cashflows',
      marketplace: 'Marketplace',
    },
    validation: {
      isRequired: 'Field is required',
      moreThen: 'Should be more then %{value}',
      moreThenOrEqual: 'Should be more then or equal %{value}',
      lessThenOrEqual: 'Should be less then or equal %{value}',
      invalidWalletAddress: 'Invalid wallet address',
      notDefault: 'Value must be different from initial',
      maxStringLength: 'Should be less then %{max} character',
      allowedCharactersForCashFlowName: 'Should contain only allowed characters: %{characters}',
    },
    pageNotFound: 'We can’t find this page',
    copiedAtClipboard: 'Copied at clipboard',
    cancel: 'Cancel',
    retry: 'Retry',
    noEthereumConnection: 'No connection to the Etherium network',
    noEthereumAccounts: 'We can\'t find any Ethereum accounts! Please check and make sure Metamask or your browser are pointed at the correct network and your account is unlocked.',
    needUseMetamask: 'This browser has no connection to the Ethereum network. Please use the Chrome/FireFox extension MetaMask, or dedicated Ethereum browsers Mist or Parity.',
    makeSureUseKovan: 'Please make sure you are using Kovan Test Network when connecting your Metamask',
  },
  components: {
    fund: {
      commissionLabel: 'Commission',
      policyLabel: 'Policy',
    },
  },
  features: {
    manageCashFlows: {
      status: {
        pending: 'tx pending',
        saving: 'saving',
        awaitingBuyer: 'Awaiting buyer',
        sold: 'sold',
        completed: 'Completed',
      },
      obligations: 'Obligations',
      income: 'Income',
      name: 'Name',
      payersRating: 'Payer\'s score',
      performance: 'Performance',
      rating: 'Rating',
      nextInstalment: 'Next instalment',
      cashFlowBalance: 'Cashflow balance',
      discount: 'Discount',
      dueAmount: 'Due amount',
      id: 'Cashflow number',
      payer: 'Cashflow payer',
      lender: 'Cashflow payee',
      instalmentSize: 'Instalment size',
      firstInstalmentDate: 'First instalment',
      lastInstalmentDate: 'Last instalment',
      availableBalance: 'Available balance',
      discountValue: 'Discount value',
      nextInstalmentInfo: '+%{amount} DAI on %{date}',
      amountPerPeriodicity: '%{amount} / %{periodicity}',
      howMuchInstalmentIsComplete: '%{amount}% complete',
      price: 'Price',
      sellCashflow: 'Sell cashflow',
      withdrawDai: 'Withdraw DAI',
      payInstalment: 'Pay instalment',
      buyCashflow: 'Buy cashflow',
      duration: 'Duration',
      amount: 'Repaying amount',
      recommendedPrice: 'Recommended price',
      sellingPrice: 'Selling price',
      borrowingAmount: 'Borrowing amount',
      borrowLink: 'Borrow',
      emptyOutgoingList: 'You have no outgoing cashflows yet.',
      emptyIncomingList: 'You have no incoming cashflows yet.',

    },
    signIn: {
      button: 'Connect to %{address}',
      logout: 'Log out',
      connectToWallet: 'Connect a wallet',
      givePermission: 'Give permission',
      metamaskDescription: 'Metamask allows Web 3.0 applications to interact with Etherium blockchain and leaves you in full control over every transaction',
      confirmModal: {
        title: 'Confirm your address',
        beforeAddressDescription: 'You’re signing in with the following address:',
        afterAddressDescription: 'To verify your ownership of this address, we\'ll ask you to sign a confirmation message. Click the Confirm button to continue. If this isn’t the address you’d like to connect to C2FC 0xchanger, click Cancel and select a different address from the wallet menu.',
        buttons: {
          cancel: 'Cancel',
          confirm: 'Confirm',
        },
      },
      permissions: {
        title: 'In the context of this hackaton, please authorise Cashflow Relay to perform these operations:',
        createCashflows: 'Create cashflows',
        sellCashflows: 'Sell cashflows',
        payInstalments: 'Pay instalments from your wallet',
        buyCashflows: 'Buy cashflows',
      },
    },
    createCashFlow: {
      getButton: 'Get in fund',
      modalTitle: 'Choice of conditions',
      form: {
        fields: {
          name: 'CashFlow name',
          amount: 'I want to borrow',
          interest: 'With interest rate of',
          installmentSize: 'Instalment size',
          installmentCount: 'Instalment count',
          periodicity: 'Instalment periodicity',
          borrowingAmount: 'Borrowing amount',
          repayingAmount: 'Repaying amount',
          duration: 'Duration',
          firstInstalment: 'First instalment',
          lastInstalment: 'Last instalment',
        },
        creationDescription: 'Create a commitment to future cashflow (C2FC) and place it on the marketplace to get the money you need',
        creationHint: 'Borrowing money is a two-step process. First, a cashflow is created. Then, it’s placed on the markeplace for sale.',
        periodicityItemPrefix: 'once per',
        submitButton: 'Borrow',
        loanSummary: 'Loan summary',
        name: 'Name',
        nameDescription: 'Give your cashflow a descriptive name',
        createCashFlow: 'Create Cash Flow',
        borrow: 'Borrow',
      },
    },
  },
  documents: {},
  modules: {
    marketplace: {
      fundsMarketplace: 'Funds marketplace',
      YouAreInThisFund: 'You’re in this fond',
    },
  },
  services: {
    dataProvider: {
      showMoreButton: 'Show more',
    },
    user: {
      connectedToMetamask: 'Connected to Metamask',
      walletAddress: 'Wallet address',
    },
    notifications: {
      title: {
        addMinter: 'Pending add minter',
        addMinterSuccess: 'Add minter succes',
        addMinterFail: 'Add minter fail',
        createCashFlow: 'Transaction pending. You will be notified of the transaction outcome once it\'s complete.',
        createCashFlowSuccess: 'Cashflow created. Place it on the marketplace.',
        createCashFlowFail: 'Technical error, e.g. out of gas (Repeat metamask operation). Suggest to repeat the operation.',
        sellCashflow: 'Transaction pending.',
        sellCashflowSuccess: 'Order created.',
        sellCashflowFail: 'Technical error, e.g. out of gas (Repeat metamask operation).',
        buyCashflow: 'Transaction pending.',
        buyCashflowSuccess: 'Cashflow purchased.',
        buyCashflowFail: 'Not enough funds.',
        userPayInstallment: 'Transaction pending.',
        userPayInstallmentSuccess: 'Instalment paid',
        userPayInstallmentFail: 'Not enough funds.',
        withdrawCashFlow: 'Transaction pending',
        withdrawCashFlowSuccess: 'Withdrawing successful',
        withdrawCashFlowFail: 'Withdrawing failed',
      },
      description: {
        addMinter: '',
        addMinterSuccess: '',
        addMinterFail: '',
        createCashFlow: '%{txHash}',
        createCashFlowSuccess: '%{txHash}',
        createCashFlowFail: '%{txHash}',
        sellCashflow: 'You will be notified of the transaction outcome once it\'s complete.',
        sellCashflowSuccess: 'Wait for investors.',
        sellCashflowFail: 'Suggest to repeat the operation.',
        buyCashflow: 'You will be notified of the transaction outcome once it\'s complete.',
        buyCashflowSuccess: '',
        buyCashflowFail: 'Deposit funds on your wallet or your reputation/score will be decreased Top-up.',
        userPayInstallment: 'You will be notified of the transaction outcome once it\'s complete.',
        userPayInstallmentSuccess: '',
        userPayInstallmentFail: 'Deposit funds on your wallet or your reputation/score will be decreased. Top-up',
        withdrawCashFlow: 'You will be notified of the transaction outcome once it\'s complete.',
        withdrawCashFlowSuccess: '',
        withdrawCashFlowFail: 'Deposit funds on your wallet or your reputation/score will be decreased. Top-up',
      },
    },
  },
};
