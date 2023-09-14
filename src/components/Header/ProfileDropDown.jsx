
import style from './ProfileDropDown.module.css';

const ProfileDropDown = ({ showProfile }) => {
    return (
        <div
            className={showProfile ? (`${style.hide_show_box} ${style.showUserProfile}`) : (`${style.hide_show_box}`)}>
            <div className={style.tooltip}>
                <div className={style.tooltipIcon}>🔺</div>
            </div>
            <div className={style.profile_wraper}>
                <div className={style.profileSection}>
                    <div className={style.ProfileAvatar}>
                        <div className={style.profileImage}>
                            <img src="https://avatars.githubusercontent.com/u/83047979?v=4" alt="avatar" />

                        </div>
                    </div>
                    <div className={style.Name_Email}>
                        <div>Bishwajeet pandey</div>
                        <div className={style.EmailTxt}>bishwajeetpandey49@gmail.com</div>
                    </div>
                </div>

                <div className={style.actionSection}>
                    <div className={style.action_icon}>💠</div>
                    <div className={style.action_name}>Dashbord</div>
                </div>

                <div className={style.actionSection}>
                    <div className={style.action_icon}>⛺</div>
                    <div className={style.action_name}>Saved Location</div>
                </div>
                <div className={`${style.actionSection} ${style.last_action}`}>
                    <div className={style.action_icon}>🀄</div>
                    <div className={`${style.action_name} `}>Map</div>
                </div>
                <div className={style.actionSection}>
                    <div className={style.action_icon}>⬅</div>
                    <div className={style.action_name}>Log Out</div>
                </div>


            </div>


        </div>
    )
}
export default ProfileDropDown;