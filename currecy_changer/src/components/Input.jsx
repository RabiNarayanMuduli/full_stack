import React from 'react'

function Input({
    label,
    amount,
    onamountChange,
    oncurrencyChange,
    currencyOptions=[],
    SelectCurrency="usd",
    amountDiasable=false,
    currencyDisable=false,
    className="",
    


}) {




  return (
    <div className={`${className} bg-white p-3 rounded-lg text-sm flex`}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    value={amount}
                    onChange={(e)=>onamountChange && onamountChange(Number(e.target.value))}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDiasable}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={SelectCurrency}
                    onChange={(e)=>oncurrencyChange && oncurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}>
                            {currency}

                        </option>
                    ))}
                
                </select>
            </div>
        </div>
  )
}

export default Input