import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Search from './Search';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import {
    CheckIcon,
    CoinIcon,
    EnglishLanguageIcon,
    InboxIcon,
    KeyboardIcon,
    LogOutIcon,
    MessageIcon,
    ProfileIcon,
    SettingIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <EnglishLanguageIcon className={cx('menu-item-icon')} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <CheckIcon className={cx('menu-item-icon')} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon className={cx('menu-item-icon')} />,
        title: 'Keyboard shortcuts',
    },
];

const currentMenuUser = [
    {
        icon: <ProfileIcon className={cx('menu-item-icon')} />,
        title: 'View profile',
        to: '/@f8education',
    },
    {
        icon: <CoinIcon className={cx('menu-item-icon')} />,
        title: 'Get coins',
        to: '/getcoins',
    },
    {
        icon: <SettingIcon className={cx('menu-item-icon')} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <LogOutIcon className={cx('menu-item-icon')} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const currentUser = true;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={150} content="Message">
                                <button className={cx('actions-btn')}>
                                    <MessageIcon
                                        width="3.2rem"
                                        height="3.2rem"
                                        className={cx('actions-icon')}
                                    />
                                </button>
                            </Tippy>
                            <Tippy delay={150} content="Inbox">
                                <button className={cx('actions-btn')}>
                                    <InboxIcon
                                        width="3.8rem"
                                        height="3.8rem"
                                        className={cx('actions-icon')}
                                    />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}

                    <Menu
                        items={currentUser ? currentMenuUser : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                                src="https://scontent.fdad3-6.fna.fbcdn.net/v/t1.6435-9/98348224_1195485754119500_7486024874763223040_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=CFBTy7BQmeoAX_gD_C_&_nc_ht=scontent.fdad3-6.fna&oh=00_AT_E1AyZAUKmHj4BaaD-cGMTsVTyu1Y5M4VlAfYAnqpsCA&oe=6317E83D"
                                fallback="https://static.fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
