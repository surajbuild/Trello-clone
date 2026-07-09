import trelloimage from '../assets/trello.png'

const AuthBanner = () => {
    return (
        <div className='bg-black min-h-screen flex flex-col items-center justify-center'>
            <img src={trelloimage} alt="trello" width={'50%'} />
            <h1 className='text-white text-sm font-semibold uppercase tracking-[0.3em] text-primary text-center'>Build a board, get the job  done</h1>
        </div>
    )
}

export default AuthBanner
