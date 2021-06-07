import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Error() {

    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])

    return (
        <div className='not-found'>
            <h1>Oooppss...</h1>
            <h2>This page cannot be found.</h2>
            <p>Go back to <Link href='/'><a>HomePage</a></Link></p>
        </div>
    )
}

export default Error
