'use client'
import React from 'react'
import Link from 'next/link'

function ErrorPage() {

return (
    <div className="fixed inset-0 flex flex-col gap-4 items-center justify-center bg-white z-50">
        <h1 className="text-3xl text-red-400 font-bold">Page not Found</h1>
        <Link href={'/'} className={`btn bg-red-400`} >Return To Main Page</Link>
    </div>
)
}

export default ErrorPage
