import './index.scss'

export default function Carousel({ title = 'Mi lista', children } = {}) {
  return (
    <>
      <div>
        <h3 className='categories__title'>{title}</h3>
        <section className='carousel'>
          <div className='carousel__container'>{children}</div>
        </section>
      </div>
    </>
  )
}
