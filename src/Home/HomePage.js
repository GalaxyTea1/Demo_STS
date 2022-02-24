import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import cat from '../assets/cat2.jpg';
import { logout } from '../Redux/action/authAction';
import './style.css';

function HomePage() {
    const dispatch = useDispatch();
    let activeClassName = 'underline';
    const [state, setState] = useState({
        dataMix: [
            {
                img: 'https://cdn.vox-cdn.com/thumbor/_uOGMmZS6g9DxTmS7KynYmyVj4c=/0x0:7808x5506/1400x1050/filters:focal(3246x2374:4494x3622):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/68672382/shutterstock_149489132.0.0.jpg',
                title: 'Orange Eyes Cat ',
            },
            {
                img: 'https://images.immediate.co.uk/production/volatile/sites/4/2018/08/iStock_13967830_XLARGE-90f249d.jpg?quality=90&resize=960%2C408',
                title: 'Gray Cat',
            },
            {
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXY3S-sQhui58jU6vHWRSbfsRO-mr0C8n5aQ&usqp=CAU',
                title: 'Moon Eyes Cat ',
            },
            {
                img: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg',
                title: 'Strow Cat',
            },
            {
                img: 'https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324.jpg',
                title: 'Asia Cat',
            },
            {
                img: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg',
                title: 'So Deep',
            },
            {
                img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg',
                title: 'House Cat',
            },
            {
                img: 'https://media.istockphoto.com/photos/feline-picture-id108226626?k=20&m=108226626&s=612x612&w=0&h=bDaWwxhcygjerdR71qQu8YFSXaDUIi_HUZV2AADg5L8=',
                title: 'Van Cat',
            },
            {
                img: 'https://media.istockphoto.com/photos/feline-picture-id108226626?k=20&m=108226626&s=612x612&w=0&h=bDaWwxhcygjerdR71qQu8YFSXaDUIi_HUZV2AADg5L8=',
                title: 'Van Cat',
            },
        ],
    });

    const renderDataView = (arr) => {
        return arr.map((item, index) => {
            return (
                <div className='cat-item' key={index}>
                    <img src={item.img} alt='' />
                    <span>{item.title}</span>
                </div>
            );
        });
    };

    return (
        <div className='home'>
            <div className='header'>
                <nav className='menu-nav'>
                    <div className='title'>
                        My Pets
                        <i className='bx bxs-cat'></i>
                    </div>
                    <ul className='link-pages'>
                        <NavLink
                            to='/home'
                            className={({ isActive }) => (isActive ? activeClassName : undefined)}
                        >
                            <li>Features</li>
                        </NavLink>
                        <NavLink
                            to='/home'
                            className={({ isActive }) => (isActive ? activeClassName : undefined)}
                        >
                            <li>About</li>
                        </NavLink>
                        <NavLink
                            to='/home'
                            className={({ isActive }) => (isActive ? activeClassName : undefined)}
                        >
                            <li>Contact</li>
                        </NavLink>
                        <NavLink
                            to='/home'
                            className={({ isActive }) => (isActive ? activeClassName : undefined)}
                        >
                            <li>Blog</li>
                        </NavLink>

                        <li className='dropdown'>
                            <NavLink to='/home' className='dropbtn'>
                                Profile
                            </NavLink>
                            <div className='dropdown-content'>
                                <NavLink
                                    to='/login'
                                    className={({ isActive }) =>
                                        isActive ? activeClassName : undefined
                                    }
                                >
                                    <span onClick={() => dispatch(logout())}>Logout</span>
                                </NavLink>
                            </div>
                        </li>
                    </ul>
                    {/* nav-mobile */}
                    <label for='nav-mobile-input' className='nav-mobile'>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                            <path d='M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z' />
                        </svg>
                    </label>
                    <input
                        type='checkbox'
                        name=''
                        className='nav-input'
                        id='nav-mobile-input'
                        hidden
                    ></input>
                    <label for='nav-mobile-input' className='nav-overlay'></label>

                    <div className='nav-moblie-item'>
                        <label for='nav-mobile-input' className='nav-close'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'>
                                <path d='M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z' />
                            </svg>
                        </label>
                        <ul className='nav-mobile-list'>
                            <Link to='/home'>
                                <li className='item-mobile'>
                                    <i class='bx bx-home'></i>Home
                                </li>
                            </Link>
                            <Link to='/home'>
                                <li className='item-mobile'>
                                    <i class='bx bx-leaf'></i>Features
                                </li>
                            </Link>
                            <Link to='/home'>
                                <li className='item-mobile'>
                                    <i class='bx bx-info-circle'></i>About
                                </li>
                            </Link>
                            <Link to='/home'>
                                <li className='item-mobile'>
                                    <i class='bx bxl-meta'></i>Contact
                                </li>
                            </Link>
                            <Link to='/home'>
                                <li className='item-mobile' onClick={() => dispatch(logout())}>
                                    <i class='bx bx-log-out'></i>Logout
                                </li>
                            </Link>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className='banner'>
                <img src={cat} alt='banner' />
                <div className='banner-title'>
                    <span>Pet Care</span>
                    <p>Care your pets with love</p>
                    <button>SEE MORE</button>
                </div>
            </div>
            <div className='pet-list'>
                <h3 className='title-list'>
                    <i className='bx bx-star'></i>Pet List<i className='bx bx-star'></i>
                </h3>
            </div>
            <div className='cat-list-main'>
                <div className='cat-list'>{renderDataView(state.dataMix.slice(0, 8))}</div>
            </div>
            <div id='footer'>
                <div className='social-list'>
                    <a href='https://www.facebook.com/Kim.Nguyet.Da.1999/'>
                        <i className='bx bxl-facebook'></i>
                    </a>
                    <a href='https://www.instagram.com/kim_nguyet_da_1999/'>
                        <i className='bx bxl-instagram'></i>
                    </a>
                    <a href='https://www.youtube.com/channel/UCoX_mKXFf7kE6-QCjNdA0IA'>
                        <i className='bx bxl-youtube'></i>
                    </a>
                    <a href='https://www.pinterest.com/'>
                        <i className='bx bxl-pinterest-alt'></i>
                    </a>
                    <a href='https://twitter.com/?lang=vi'>
                        <i className='bx bxl-twitter'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/tr%E1%BB%8Dng-%C4%91%E1%BA%B7ng-856735229/'>
                        <i className='bx bxl-linkedin'></i>
                    </a>
                </div>
                <div className='copyright mt-16'>
                    Power by <a href='https://www.facebook.com/Kim.Nguyet.Da.1999/'>Trong</a>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
