export default function Contact () {

    const config = {
        email : 'eshwarsk6@gmail.com',
        phone: '+919789843374'
    }

    return <section id='contact' className='flex flex-col bg-primary px-5 py-10 text-white'>
        <div className='flex flex-col items-center'>
           
            <h1 className='text-4xl border-b-4  border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
            <p className='py-2'><span className='font-bold'>Email :</span> {config.email}</p>
            <p className='py-2'><span className='font-bold'>Phone :</span> {config.phone}</p>
        </div>
    </section>
}