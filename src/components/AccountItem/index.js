import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/dab2fbac6d703a59107ed7cac91d09be~c5_300x300.webp?x-expires=1658646000&x-signature=HVqKHRe3MdGLnBsgIEcJKD3PXG4%3D"
                alt="Avatar"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </p>
                <p className={cx('username')}>vana.nguyen</p>
            </div>
        </div>
    );
}

export default AccountItem;
