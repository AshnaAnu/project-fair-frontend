import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';

function Footer() {
    return (
        <div>
            <MDBFooter className='text-center  bg-primary'>
                <MDBContainer className='pt-4'>
                    <section className='mb-4'>
                        <MDBBtn
                            rippleColor="dark"
                            color='link'
                            floating
                            size="lg"
                            className='text-light m-1'
                            href='#!'
                            role='button'
                            style={{ fontSize: '24px', overflow: 'visible' }}
                        >
                            <MDBIcon fab icon='facebook' />
                        </MDBBtn>

                        <MDBBtn
                            rippleColor="dark"
                            color='link'
                            floating
                            size="lg"
                            className='text-light m-1'
                            href='#!'
                            role='button'
                            style={{ fontSize: '24px', overflow: 'visible' }}
                        >
                            <MDBIcon fab icon='twitter' />
                        </MDBBtn>

                        <MDBBtn
                            rippleColor="dark"
                            color='link'
                            floating
                            size="lg"
                            className='text-light m-1'
                            href='#!'
                            role='button'
                            style={{ fontSize: '24px', overflow: 'visible' }}
                        >
                            <MDBIcon fab icon='google' />
                        </MDBBtn>

                        <MDBBtn
                            rippleColor="dark"
                            color='link'
                            floating
                            size="lg"
                            className='text-light m-1'
                            href='#!'
                            role='button' style={{ fontSize: '24px', overflow: 'visible' }}
                        >
                            <MDBIcon fab icon='instagram' />
                        </MDBBtn>

                        <MDBBtn
                            rippleColor="dark"
                            color='link'
                            floating
                            size="lg"
                            className='text-light m-1'
                            href='#!'
                            role='button' style={{ fontSize: '24px', overflow: 'visible' }}
                        >
                            <MDBIcon fab icon='linkedin' />
                        </MDBBtn>

                        <MDBBtn
                            rippleColor="dark"
                            color='link'
                            floating
                            size="lg"
                            className='text-light m-1'
                            href='#!'
                            role='button'
                            style={{ fontSize: '24px', overflow: 'visible' }}
                        >
                            <MDBIcon fab icon='github' />
                        </MDBBtn>
                    </section>
                </MDBContainer>

                <div className=' text-light text-center  p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2024 Copyright:
                    <a className='text-light text-decoration-none' href='https://projectfair.com/'>
                        projectfair.com
                    </a>
                </div>
            </MDBFooter>
        </div>
    );
}

export default Footer;
