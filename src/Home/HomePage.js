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
                </nav>
            </div>
            <div className='banner'>
                <img src={cat} alt='banner' />
                <span>Pet Care</span>
                <p>Care your pets with love</p>
                <button>SEE MORE</button>
            </div>
            <div className='pet-list'>
                <h3 className='title-list'>
                    <i className='bx bx-star'></i>Pet List<i className='bx bx-star'></i>
                </h3>
            </div>
            <div className='cat-list'>
                <div className='cat-list'>{renderDataView(state.dataMix.slice(0, 8))}</div>
            </div>
            <div id='footer'>
                <div className='social-list'>
                    <Link to=''>
                        <i className='bx bxl-facebook'></i>
                    </Link>
                    <Link to=''>
                        <i className='bx bxl-instagram'></i>
                    </Link>
                    <Link to=''>
                        <i className='bx bxl-youtube'></i>
                    </Link>
                    <Link to=''>
                        <i className='bx bxl-pinterest-alt'></i>
                    </Link>
                    <Link to=''>
                        <i className='bx bxl-twitter'></i>
                    </Link>
                    <Link to=''>
                        <i className='bx bxl-linkedin'></i>
                    </Link>
                </div>
                <div className='copyright mt-16'>
                    Power by <Link to=''>Trong</Link>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
