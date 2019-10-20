import React from 'react'

const Testemunhos = props => {
    return (
        <>
            {/* Testemunhos */}
            <h2>What our customers say</h2>
            <div id='myCarousel' className='carousel slide text-center' data-ride='carousel'>
                {/* Indicators */}
                <ol className='carousel-indicators'>
                    <li data-target='#myCarousel' data-slide-to='0' className='active'></li>
                    <li data-target='#myCarousel' data-slide-to='1'></li>
                    <li data-target='#myCarousel' data-slide-to='2'></li>
                </ol>

                {/* Wrapper for slides */}
                <div className='carousel-inner' role='listbox'>
                    <div className='item active'>
                        <h4>'This company is the best. I am so happy with the result!'<br /><span>Michael Roe, Vice President, Comment Box</span></h4>
                    </div>
                    <div className='item'>
                        <h4>'One word... WOW!!'<br /><span>John Doe, Salesman, Rep Inc</span></h4>
                    </div>
                    <div className='item'>
                        <h4>'Could I... BE any more happy with this company?'<br /><span>Chandler Bing, Actor, FriendsAlot</span></h4>
                    </div>
                </div>

                {/* Left and right controls */}
                <a className='left carousel-control' href='#myCarousel' role='button' data-slide='prev'>
                    <span className='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>
                    <span className='sr-only'>Previous</span>
                </a>
                <a className='right carousel-control' href='#myCarousel' role='button' data-slide='next'>
                    <span className='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>
                    <span className='sr-only'>Next</span>
                </a>
            </div>
        </>
    )
}
export default Testemunhos;