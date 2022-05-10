import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import { Tab } from '@headlessui/react'
import FilterTabs from './FilterTabs';
import Button from './Button';

export default function FilterDialog() {
    let [isOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);

    return (
        <>
            <div onClick={openModal} className={`cursor-pointer flex items-center justify-around gap-x-2 py-2 px-3 rounded-md tracking-wider border font-thin hover:bg-zinc-100`}>
                <div className='px-2 rounded-md bg-red-400 text-white font-semibold'>1</div>
                <div className='text-lg'>Filters</div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal} >
                    <div className="min-h-screen px-4 text-center bg-black bg-opacity-50">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>
                        {/* To center */}
                        <span className="inline-block h-screen align-middle" aria-hidden="true" > &#8203; </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title as="h3" className="text-2xl font-semibold leading-6 text-gray-900 px-4 pt-5 pb-2" >
                                    Filters
                                </Dialog.Title>
                                <div className="mt-2 border-t"> </div>
                                <FilterTabs closeModal={closeModal} />
                                <div className="mb-2 border-b"> </div>
                                <div className="mt-4 flex gap-x-3 px-4 pb-4 justify-end">
                                    <Button onClick={closeModal} primary={false} name="Cancel" />
                                    <Button primary={true} name="Apply" />
                                </div>
                            </div>

                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

