import React, { useState } from 'react';
import { sellInterface } from '@/interfaces';
import { useRouter } from 'next/navigation';
import { phpCurrencyFormat } from "@/utils/currencyFormat";
import { getCurrentDateTime } from '@/utils/date-time';



function SellForm({ sell, setSell, onSave }: { sell: sellInterface, setSell: any, onSave: any }) {
    const router = useRouter();
    const getIsSavedBtnDisabled = () => {
        return (
            sell.sellingPrice === 0
        );
    }
    const dateTime = getCurrentDateTime();
    const [value, setValue] = useState()

    return (


        <div className='grid grid-cols-3 mt-2 gap-5'>
            <div className='col-span-3 flex flex-col mt-5'>
                <h2 className="text-white">Transaction Id : {sell._id}</h2>
                <h2 className="text-white">Transaction Date : {dateTime} </h2>
            </div>

            <div className="flex flex-col">
                <h2 className="text-white">Area</h2>
                <select value={sell.area} onChange={(e) => setSell({ ...sell, area: e.target.value })}>
                    <option value='household'>Household</option>
                    <option value='commercial'>Commercial</option>
                    <option value='industrial'>Industrial</option>
                </select>
            </div>

            <div className="flex flex-col">
                <h2 className="text-white">Category</h2>
                <select value={sell.category} onChange={(e) => setSell({ ...sell, category: e.target.value })}>
                    <option value='biodegradable'>Biodegradable</option>
                    <option value='non-biodegradable'>Non-biodegradable</option>
                </select>
            </div>

            <div className="flex flex-col">
                <h2 className="text-white">Types</h2>
                <select value={sell.types} onChange={(e) => setSell({ ...sell, types: e.target.value })}>
                    <option value='plastics'>Plastics</option>
                    <option value='papers'>Papers</option>
                    <option value='metals'>Metals</option>
                    <option value='rubber'>Rubber</option>
                    <option value='glass'>Glass</option>
                    <option value='rotten'>Rotten</option>
                </select>
            </div>

            <div className="flex flex-col">
                <h2 className="text-white">Particular</h2>
                <select value={sell.particular} onChange={(e) => setSell({ ...sell, particular: e.target.value })}>
                    <option value='softplastics'>Soft Plastics</option>
                    <option value='hardplastics'>Hard Plastics</option>
                    <option value='thinpapers'>Thin Papers</option>
                    <option value='thickpapers'>Thick Papers</option>
                    <option value='scrapmetals'>Scrap Metals</option>
                    <option value='scrapwires'>Scrap Wires</option>
                    <option value='thinrubber'>Thin Rubber</option>
                    <option value='thickrubber'>Thick Rubber</option>
                    <option value='thinglass'>Thin Glass</option>
                    <option value='thickglass'>Thick Glass</option>
                    <option value='rotten'>Rotten</option>
                </select>
            </div>


            <div className="flex flex-row gap-5">
                <div>
                    <h2 className="text-white">Weight in kilogram</h2>
                    <input
                        type="number"
                        value={sell.weight}
                        onChange={(e) => setSell({ ...sell, weight: e.target.value })}
                    />
                </div>
                <div>
                    <h2 className="text-white">₱rice per kg</h2>
                    <input
                        type="number"
                        value={sell.sellingPrice}
                        onChange={(e) => setSell({ ...sell, sellingPrice: e.target.value })}
                    />
                </div>
            </div>

            <div className='col-span-3 flex flex-col mt-5'>
                <h2 className="text-white">Total Sold Amount : {phpCurrencyFormat((sell.sellingPrice) * (sell.weight))}</h2>
            </div>

            <div>
                <h2 className="text-white"> Your Wallet Address : </h2>

            </div>


            <div className="col-span-3 flex justify-end gap-10">
                <button
                    className="btn-outlined"
                    onClick={() => { router.push("/sells") }}
                >Cancel
                </button>
                <button
                    className={
                        getIsSavedBtnDisabled() ? "btn-disabled" : "btn-primary"
                    }
                    onClick={onSave}
                    disabled={getIsSavedBtnDisabled()}
                >Save
                </button>
            </div>
        </div>
    )
}

export default SellForm
