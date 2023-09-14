import style from './header.module.css';
import { useState } from 'react';
import ProfileDropDown from './ProfileDropDown';
function Header() {

    const [openSection2, setIsSection2Open] = useState(false);
    const [isLogedIn, setIsLogeIn] = useState(true);
    const [showProfile, setShowprofile] = useState(false);

    function handleOpenMSearchForm() {
        setIsSection2Open(true);
    }
    function handleCloseMSearchForm() {
        setIsSection2Open(false);
    }
    function toogleUserProfile() {
        setShowprofile(!showProfile);
    }
    return (

        <div
            className=
            {openSection2 ? (`${style.main_container} ${style.main_container_reduced} `) : (style.main_container)}>

            <section className={openSection2 ? style.main_nav_bar : ''}>
                <div className={style.container}>

                    <div className={style.left}>
                        <div className={style.logo_text}>
                            WeatherValut
                        </div>
                        <div className={style.homenav}>
                            Home
                        </div>
                        <div className={style.homenav}>
                            Dashbord
                        </div>
                        <form className={`${style.wraper} ${style.searchform}`}>
                            <button type='submit'
                                className={style.submitBtn}>
                                &#128269;
                            </button>
                            <input type="text" placeholder='Search Location Here' className={style.searchInput} />
                        </form>

                        {/* button to open search field on small devices */}

                        <button
                            className={`${style.submitBtn} ${style.open_search_form_btn}`}
                            onClick={handleOpenMSearchForm}
                        >
                            &#128269;
                        </button>

                    </div>
                    <div className={style.end}>

                        {isLogedIn ?
                            (
                                <div className={style.userProfile}>
                                    <div className={style.userProfileBtn}
                                        onClick={toogleUserProfile}
                                    >
                                        <div className={style.avatar}>
                                            <img src="https://avatars.githubusercontent.com/u/83047979?v=4" alt="avatar" />
                                        </div>
                                        <span style={{ marginLeft: '0.5rem' }}>
                                            {showProfile ? (<>🔼</>) : (<>🔽</>)}
                                        </span>
                                    </div>
                                    {/* 888888 */}
                                    <ProfileDropDown showProfile={showProfile} />
                                    {/* 888888 */}
                                </div>

                            ) :
                            (
                                <button className={style.signInButton}>
                                    <span className={style.signInRegularBtn}>Sign in</span>
                                    <span className={style.signInResPBtn}>👨‍💼</span>
                                </button>
                            )
                        }


                    </div>
                </div>
            </section>

            <section className={style.search_nav_bar}>
                <div className={style.container}>

                    <div className={style.left}>
                        <div className={style.logo_text}>
                            WeatherValut
                        </div>

                        <form className={`${style.wraper} ${style.search_form} ${style.mSearch_form}`}>
                            <button
                                className={style.submitBtn}>
                                &#128269;
                            </button>
                            <input type="text" placeholder='Search Location Here' className={style.searchInput} />
                        </form>

                    </div>

                    <div className={style.end}>

                        <button title='close' onClick={handleCloseMSearchForm} className={style.back_button}>X</button>

                    </div>

                </div>
            </section>


        </div>
    )
}
export default Header;