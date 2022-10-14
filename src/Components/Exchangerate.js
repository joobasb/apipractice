import React from 'react'
import { useState } from 'react'

const URL = 'https://api.exchangerate.host/latest'


export default function Exchangerate() {

    const [eur, setEur] = useState(0)
    const [gbp, setGbp] = useState(0)
    const [gbpRate, setGbpRate] = useState('')

    async function convert(e) {
        e.preventDefault();
        if (eur == 0){
            return;
        } else {
        try {
            const address = URL;
            const response = await fetch(address)

            if (response.ok) {
                const json = await response.json();
                setGbp(eur * json.rates.GBP);
                setGbpRate("1 eur equals " + json.rates.GBP +" gbp")
            } else {
                alert('error retrieving exchange rate')
            }
        } catch (err) {
            alert(err);
        }
    }
}

  return (
    <div style={{textAlign: "center"}}>
        <form onSubmit={convert}>
            <h3>eur to gbp converter</h3>
            <div>
                <br/>
                <label>eur</label>&nbsp;
                <input type="number" step="0.01" value={eur} onChange={e => setEur(e.target.value)} /><br/>
                
            </div>
            <div>
                <label>gbp &nbsp; </label>
                <output>{gbp.toFixed(2)} €</output>
                <br/>
                <output>{gbpRate}</output>
            </div>
            <div>
                <button>Calculate</button>
            </div>
        </form>
    </div>
  );
}
