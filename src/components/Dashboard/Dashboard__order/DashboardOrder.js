import React from 'react';
import OptionsIcon from '../Options/OptionsIcon';
import './Dashboard__order.css'

const white = 'rgba(255, 255, 255)';

export default function DashboardOrder() {
  return <div className='Dashboard__order__wrapper'>
            <div className='Dashboard__order__title'>Sell Order</div>
            <OptionsIcon color={white} />
            <table className='Dashboard__order__table' cellSpacing={0}>
                <tr>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td>89.90</td>
                    <td>0.15</td>
                    <td className='Dashboard__order__table--total-bucks'>300</td>
                </tr>
                <tr>
                    <td>89.90</td>
                    <td>0.15</td>
                    <td className='Dashboard__order__table--total-bucks'>126</td>
                </tr>
                <tr>
                    <td>89.90</td>
                    <td>0.15</td>
                    <td className='Dashboard__order__table--total-bucks'>16</td>
                </tr>
                <tr>
                    <td>89.90</td>
                    <td>0.15</td>
                    <td className='Dashboard__order__table--total-bucks'>567</td>
                </tr>
                <tr>
                    <td>89.90</td>
                    <td>0.15</td>
                    <td className='Dashboard__order__table--total-bucks'>336</td>
                </tr>
                <tr>
                    <td>89.90</td>
                    <td>0.15</td>
                    <td className='Dashboard__order__table--total-bucks'>1.5</td>
                </tr>
                <tr>
                    <td>89.90</td>
                    <td>0.15</td>
                    <td className='Dashboard__order__table--total-bucks'>126</td>
                </tr>
                <tr>
                    <td>89.90</td>
                    <td>0.15</td>
                    <td className='Dashboard__order__table--total-bucks'>126</td>
                </tr>
            </table>
        </div>;  
}
