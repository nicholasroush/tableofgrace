import React from "react";
import './home.css';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import food from '../pictures/412food-logo.jpg';
import apm from '../pictures/apm-logo.jpg';
import ecfp from '../pictures/ecfp-logo.jpg';
import fom from '../pictures/fom-logo.png';
import lcog from '../pictures/lcog-logo.jpg';
import tpf from '../pictures/tpf-logo.png';
import ua from '../pictures/ua-logo.jpg';
import wv from '../pictures/wv-logo.png';
import food_bank from '../pictures/food_bank_black_24dp.svg';
import soup_kitchen from '../pictures/soup_kitchen_black_24dp.svg';
import articleone from '../pictures/article1.jpg';
import articletwo from '../pictures/article2.jpg';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { GiOpenedFoodCan } from 'react-icons/gi';
import { RiHandHeartFill } from 'react-icons/ri';



export function Home() {

    return (
        <div className="home-main" id="top">
            <div className='hero'>
                <div className='hero-overlay'></div>
                <div className='hero-content'>
                    <h1>There is no greater gift than the gift of giving.</h1>
                    <h4>Find out how to give back to your community, and how you can <Link to='/help'><Button size='lg'>Help</Button></Link></h4>
                </div>
            </div>
            <div className='home-content'>
                <div className='top-bio'>
                    <p>Proudly serving the community since 2014, we at <strong>Table of Grace Feeding Ministries</strong> work tirelessly to improve the quality of life for those in our comminity who need our services most. Those who sit at the table of grace shall not go without.</p>
                </div>
                <h1>Ways To Give</h1>
                <div className="donate-links">
                    <Link to='/donate'>
                        <div>
                            <FaMoneyBillAlt className="donate-icon" />
                            <h4>Donate Money</h4>
                            <h6>Any amount helps.</h6>
                        </div>
                    </Link>
                    <Link to='/contact'>
                        <div>
                            <GiOpenedFoodCan className="donate-icon" />
                            <h4>Donate Food</h4>
                            <h6>Contact us to find out about our donation needs.</h6>
                        </div>
                    </Link>
                    <Link to='/volunteer'>
                        <div>
                            <RiHandHeartFill className="donate-icon" />
                            <h4>Donate Time</h4>
                            <h6>We can't do this without you!</h6>
                        </div>
                    </Link>
                </div>
                <div className='section-one'>
                    <div className='home-content-text'>
                        <h1>Our Impact</h1>
                        <div className='impacts'>
                            <div className='food'>
                                <img src={food_bank} alt='Food Bank svg' />
                                <p>On average <span>1</span> in <span>6</span> people go hungry due to food waste, and approximately <span>40%</span> of our food is wasted in the U.S. On average we rescue <span>4,000lbs</span> (about twice the weight of a Clydesdale horse) of donated food monthly from our pickup locations that we then redistribute back to the community.</p>
                                <p className='button-titles'>Find out how you can help</p>
                                <Link to='/help'><Button>Here</Button></Link>
                                <p className='button-titles'>Find out more about food waste</p>
                                <Link to='/stats'><Button>Here</Button></Link>
                            </div>
                            <div className='soup-kitchen'>
                                <img src={soup_kitchen} alt='Soup Kitchen svg' />
                                <p>In <span>1995</span>, the Census Bureau found <span>12%</span> of the American population was food deprived. With the American population and economy, this number is still at <span>12.3%</span> today. We service our community by feeding <span>15,600+</span> individuals annually.</p>
                                <p className='button-titles'>Find out how you can help</p>
                                <Link to='/help'><Button>Here</Button></Link>
                            </div>
                        </div>
                    </div>
                    <div className='affiliates'>
                        <h1>Local Organizations We Work With</h1>
                        <div className='org-logos'>
                            <a href='https://412foodrescue.org/' target="_blank" rel="noreferrer"><img src={food} alt='412 Food Logo' /></a>
                            <a href='https://appliedpestmanagement.com/' target="_blank" rel="noreferrer"><img src={apm} alt='Applied Pest Management Logo' /></a>
                            <a href='https://www.foodpantries.org/ci/pa-ellwood_city' target="_blank" rel="noreferrer"><img src={ecfp} alt='Ellwood City Food Pantries Logo' /></a>
                            <a href='https://m.facebook.com/pg/Fishers-of-Men-290552684958239/events/' target="_blank" rel="noreferrer"><img src={fom} alt='Fishers of Men Logo' /></a>
                            <a href='https://www.worldvision.org/' target="_blank" rel="noreferrer"><img src={wv} alt='world Vision Logo' /></a>
                            <a href='https://pittsburghfoundation.org/' target="_blank" rel="noreferrer"><img src={tpf} alt='The Pittsburgh Foundation Logo' /></a>
                            <a href='https://www.facebook.com/groups/412093832844550/' target="_blank" rel="noreferrer"><img src={ua} alt='Undercover Angles Logo' /></a>
                            <a href='https://www.lillyvillechurch.com/food-pantry' target="_blank" rel="noreferrer"><img src={lcog} alt='Lillyville Church of God Logo' /></a>
                        </div>
                    </div>
                </div>
                <div className='section-two'>
                    <h1>News</h1>
                    <div className='articles'>
                        <Card>
                            <Card.Img variant="top" src={articleone} />
                            <Card.Body>
                                <Card.Text>
                                Feeding the hungry and homeless is the mission of the busy new Table of Grace Feeding Ministry ...
                                </Card.Text>
                                <a href='https://www.ellwoodcityledger.com/story/lifestyle/around-town/2016/02/18/tanis-fox-helps-set-table/18653373007/' target="_blank" rel="noreferrer"><Button variant="primary">Read More</Button></a>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={articletwo} />
                            <Card.Body>
                                <Card.Text>
                                BEAVER FALLS — Guests can tour the Moltrup mansion this weekend in support of a local feeding ministry ...
                                </Card.Text>
                                <a href='https://www.timesonline.com/story/entertainment/2021/12/07/moltrup-mansion-tour-support-beaver-falls-based-feeding-ministry/8886270002/' target="_blank" rel="noreferrer"><Button variant="primary">Read More</Button></a>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}